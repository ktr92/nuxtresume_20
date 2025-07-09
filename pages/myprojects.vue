<template>
  <div>
    <el-card class="box-card">
      <AppText :data="about" />
    </el-card>
    <br />
    <div v-if="projects">
      <el-collapse
        v-model="activeNames"
        accordion
        v-for="(project, idx) in projects"
        :key="idx"
        class="projects"
      >
        <AppProject :data="project" />
      </el-collapse>
    </div>
    <div v-else>
      Загрузка проектов...
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import jsonprojects from '~/static/projects.json'
export default { 
  mounted() {
    console.log('jsonprojects: ', jsonprojects)
    this.projects = jsonprojects
  },
  data() {
    return {
      activeNames: [false],
      projects: null,
      loaded: false,
    };
  },
  computed: {
    ...mapState(["about"]),
  },
};
</script>

<style scoped lang="scss"></style>
