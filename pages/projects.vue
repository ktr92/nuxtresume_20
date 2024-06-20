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
 /*  async asyncData({store}) {
   const dataset = await store.dispatch('projects/getAll')
   return {dataset}
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
  } */
    async asyncData() {
      try {
        const response = await fetch('/.netlify/functions/projects');
        const dataset = await response.json();
        return {dataset}
      } catch (error) {
        console.error('Ошибка при получении проектов:', error);
      }
    }

}


</script>

<style scoped lang="scss">
  
 
</style>