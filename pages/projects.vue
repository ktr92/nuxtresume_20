<template>
  <div>
      
      <el-card class="box-card">
        <AppText :data="about" />
      </el-card>
      <br>
      <el-collapse v-model="activeNames" accordion v-for="(project, idx) in projects" :key="idx" class="projects">
       
          <AppProject :data="project" />
         
      </el-collapse>  
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // fetch для загрузки данных на клиенте (при переходах)
  async fetch() {
    if (!this.projects) {  // Избегаем повторной загрузки, если данные уже есть
      await this.fetchProjects();
    }
  },
  // asyncData для загрузки данных на сервере (первоначальная загрузка)
  async asyncData({ store }) { 
    if (process.server || !store.state.projects.length) { // Выполняем на сервере или если данные не в Vuex
      await store.dispatch('fetchProjects');
    }
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await fetch('/.netlify/functions/projects');
        const data = await response.json();
        this.$store.commit('SET_PROJECTS', data); 
        this.projects = data; // Дополнительно обновляем данные в data() для мгновенного отображения
      } catch (error) {
        console.error('Ошибка при получении проектов:', error);
      }
    },
  },
  data() {
    return {
      activeNames: [false]
    }
  },
  computed: {
    ...mapState([
      'about'
    ]),
    projects() {
      return this.$store.state.projects;
    },
  }
}
</script>

<style scoped lang="scss">
  
 
</style>