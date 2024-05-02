<template>
  <div>
    <el-descriptions class="margin-top" title="" :column="2"  border>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                Город
              </template>
             {{ city }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-time"></i>
                Дата рождения
              </template>
               {{ date }}
            </el-descriptions-item><br>
             <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-loading"></i>
                Статус
              </template>
               {{ status }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-chat-round"></i>
               Способы связи
              </template>
              <AppContact />
       </el-descriptions-item>           
      </el-descriptions>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
      ...mapState([
        'city', 'date', 'status'
      ])
  },
}
</script>

<style>

</style>