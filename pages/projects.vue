<template>
  <div>
    <el-card class="box-card">
      <AppText :data="about" />
    </el-card>
    <br />
    <div v-if="$fetchState.pending">Загрузка проектов...</div>
    <div v-else>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async fetch() {
    const response = await fetch("/.netlify/functions/projects");
    const dataset = await response.json();
    console.log(dataset); // Массив проектов из MongoDB
    this.projects = dataset;
    this.loaded = true;
    return { dataset };
  },
  mounted() {
    if (!this.loaded) this.$fetch();
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
