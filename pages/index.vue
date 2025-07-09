<template>
  <div>
    <el-card class="box-card">
      <h1>{{ name }} </h1>
      <h3>Основная информация</h3>
      <AppInfo />

      <h3>Ключевые навыки</h3> 
      <AppSkills type="dark" :data="skills"/>

      <h3>Дополнительные навыки</h3>
      <AppSkills type="dark" :data="skills2"/>      

      <h3>Знание иностранных языков</h3>
      <AppSkills type="dark" :data="langs"/>

      <h3>О себе</h3>
      <AppText :data="description"/>

      <NuxtLink to="/myprojects"><el-button type="primary">Перейти в портфолио</el-button></NuxtLink>
         
      <h3>Образование и Опыт работы</h3>
      <AppTimeline :data="experience"/> 

    </el-card>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed: {
      ...mapState([
        'name', 'skills', 'skills2', 'langs', 'description', 'experience'
      ])
  },
 
}
</script>

<style scoped lang="scss">
 @import "../assets/scss/partials/_params.scss";
  .el-card__body a {
    color: $green;
    text-decoration: underline;
  }
  

</style>
