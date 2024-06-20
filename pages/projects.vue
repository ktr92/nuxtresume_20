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
  async fetch() {
    const response = await fetch('/.netlify/functions/projects');
       const dataset = await response.json();
       console.log(dataset); // Массив проектов из MongoDB
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
  }
}
</script>

<style scoped lang="scss">
  
 
</style>