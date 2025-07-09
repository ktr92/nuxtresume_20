<template>
  <div>
  <!--   <el-card class="box-card"> -->
      <!-- <AppText :data="about" /> -->
       <div
        role="alert"
        class="el-message el-message--warning"
        style="bottom: 20px;top: unset;left: 0;right: 0;width: 100%;opacity: 1;position: relative;transform: none;margin: 20px auto;">
        <i class="el-message__icon el-icon-warning  "></i>
        <p class="el-message__content" style="font-size: 18px">
         Часть моих проектов не могут быть опубликованы. Кроме того, невозможно продемонстрировать опыт работы связанный с доработками на проектах.
        </p>
      </div>
       <div
        role="alert"
        class="el-message el-message--warning"
        style="bottom: 20px;top: unset;left: 0;right: 0;width: 100%;opacity: 1;position: relative;transform: none;margin: 20px auto;">
        <i class="el-message__icon el-icon-warning  "></i>
        <p class="el-message__content" style="font-size: 18px">
        Среди представленных ниже работ - исключительно коммерческий опыт. В каждом проекте указаны ссылки на Демонстрацию приложения, Репозиторий моей работы, а также ссылка на реальный сайт, на котором использовалась моя работа.
        </p>
      </div>
<!--     </el-card> -->

    <div v-if="projects">
      <el-collapse
        v-model="activeNames"
        accordion
        v-for="(project, idx) in projects"
        :key="idx"
        class="projects"
      >
        <AppProject :data="project" :index="idx" />
      </el-collapse>
     
    </div>
    <div v-else>
      <div class="el-loading-mask" style="">
        <div class="el-loading-spinner">
          <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg><!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import jsonprojects from "~/static/projects.json";
export default {
  mounted() {
    console.log("jsonprojects: ", jsonprojects);
    this.projects = jsonprojects;
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

<style scoped lang="scss">
.el-message--warning .el-message__content {
    color: #583705;
}</style>
