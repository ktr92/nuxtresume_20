<template>
  <div>
      
      <el-card class="box-card">
        <AppText :data="about" />
      </el-card>
      <br>
      <el-collapse v-model="activeNames" accordion v-for="(project, idx) in dataset" :key="idx" class="projects">
       
          <AppProject :data="project" />
         
      </el-collapse>  
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData({store}) {
   /* const dataset = await store.dispatch('projects/getAll')
   return {dataset} */
   try {
    console.log('загружаем проекты')
       const response = await fetch('/.netlify/functions/projects');
       const dataset = await response.json();
       console.log(dataset); // Массив проектов из MongoDB
       return {dataset}
     } catch (error) {
       console.error('Ошибка при получении проектов:', error);
     }
  },
  data() {
    return {
      activeNames: [false]
    }
  },
  computed: {
    ...mapState([
      'about'
    ])
  }
}
</script>

<style scoped lang="scss">
  
 
</style>