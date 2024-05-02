<template>
  <div>
     <div class="description">
      <p v-html="data"></p>
     </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>

</style>