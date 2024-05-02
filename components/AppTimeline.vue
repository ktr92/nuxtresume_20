<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="item in data" :timestamp="item.date" :key="item.id" placement="top" :color="color(item.status)">
        <el-card>
          <h4 v-html="item.title"></h4>
          <p v-html="item.description"></p>
          <span class="el-tag el-tag--light">{{ item.role }}</span>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>

export default {
  props: ['data'],
  data() {
    return {
      
    }
  },
  methods: {
    color(status) {
      return status === 'present' ? '#409eff': '#909399'
    }    
  }
}
</script>

<style>

</style>