<template>
  <div>
    <el-button-group>
        <el-button type="primary" icon="el-icon-message" @click="email"><small>{{ emailvalue }} </small></el-button>
        <el-button type="primary" @click="telegram"><img src="~/assets/img/tg.svg" alt=""></el-button>
        <el-button type="primary" icon="el-icon-mobile-phone" @click="call"><small>{{ phonevalue }}</small></el-button>
      </el-button-group>          
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
      ...mapState([
        'emailvalue', 'phonevalue', 'tgvalue'
      ])
  },
   methods: {
    call() {
      location.href=`tel:${this.phonevalue}`
    },
    telegram() {
      location.href=this.tgvalue
    },
    email() {
      location.href=`mailto:${this.emailvalue}`
    },

  }
}
</script>

<style>

</style>