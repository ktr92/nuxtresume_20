<template>
  <div>
    <div class="tag-group">
        <span class="tag-group__title"></span>
        <el-tag
          v-for="item in data"
          :key="item.label"
          :type="item.type">
          {{ item.label }}
        </el-tag>
      </div>
  </div>
</template>

<script>

export default {
  props: ['data'],
}
</script>

<style>

</style>