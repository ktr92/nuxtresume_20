<template>
  <div>
     <el-header>
      <TheHeader />
    </el-header>
   <el-container>
    <el-main>
      <Transition name="fade" appear>
        <Nuxt />
      </Transition>

    </el-main>
  </el-container>
  </div>
 
   
</template>

<script>
export default {

}
</script>

<style>
.fade-enter-active, 
.fade-leave-active {
  transition: transform 0.5s;
}
.fade-enter, 
.fade-leave-to {
  transform: translateX(-100%);
}
</style>