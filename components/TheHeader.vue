<template>
  <div>
   <el-menu class="el-menu-demo" mode="horizontal" :router="true" :default-active="activeIndex2">
      <router-link index="1" to="/"><div>Резюме</div></router-link>
      <router-link index="2" to="/projects"><div>Портфолио</div></router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: '1'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/partials/_params.scss";

  .el-menu--horizontal>.el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 6px solid #fff;
    color: #222;
/*     background: $darkcolor;
 */    width: 50%;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
}
  .el-menu-demo div {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 6px solid #fff;
    color: #222;
/*     background: $darkcolor;
 */    width: 50%;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
}
.el-menu--horizontal>.el-menu-item:hover, .el-menu--horizontal>.el-menu-item:focus, .el-menu--horizontal>.el-menu-item.is-active {
  color: #222;
   border-color: #409eff;
}
 .el-menu-demo .nuxt-link-exact-active div {
  color: #222;
   border-color: #409eff;
}
.el-header {
  padding: 0;
}
</style>