<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :router="true">
      <el-menu-item index="1" route="/admin/">
        <i class="el-icon-menu"></i>
        <span>Все проекты</span>
      </el-menu-item>
      <el-menu-item index="2" route="/admin/create">
        <i class="el-icon-document"></i>
        <span>Добавить проект</span>
      </el-menu-item>
     
    </el-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>