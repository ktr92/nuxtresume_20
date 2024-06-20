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
  async fetch() {
       const response = await fetch('/.netlify/functions/projects');
       const dataset = await response.json();
       console.log(dataset); // Массив проектов из MongoDB
       this.projects = dataset
       return {dataset}
  },
  fetchOnServer: false,
  data() {
    return {
      activeNames: [false],
      projects: null
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