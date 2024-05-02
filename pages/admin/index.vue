<template>
  <el-table
    :data="dataset"
    style="width: 100%"
  >
    <el-table-column
      prop="prname"
      label="Название"
    />
    <el-table-column label="Действия" width="120">
      <template slot-scope="{row}">
        <el-tooltip effect="dark" content="Открыть " placement="top">
          <el-button
            icon="el-icon-edit"
            type="primary"
            circle
            @click="open(row._id)"
          />
        </el-tooltip>
        <el-tooltip effect="dark" content="Удалить " placement="top">
          <el-button
            icon="el-icon-delete"
            type="danger"
            circle
            @click="remove(row._id)"
          />
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store}) {
    const dataset = await store.dispatch('projects/getAll')
    return {dataset}
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/project/${id}`)
    },
    async remove(id) {
      try {
        await this.$confirm('Удалить?', 'Внимание!', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning'
        })
        await this.$store.dispatch('projects/remove', id)
        this.dataset = this.dataset.filter(p => p._id !== id)
      } catch (e) {}

    }
  }
}
</script>
