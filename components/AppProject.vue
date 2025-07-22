<template>
  <el-collapse-item :name="data.prname">
    <template slot="title">
      <div class="projects__header clearfix">
        <div class="flex">
          <span class="projects__title">#{{ index + 1 }} - </span>
          <span class="projects__title">{{ data.prname }}</span>
        </div>
      
        <span class="projects__images">
          <span v-for="prtag in data.prtags" :key="prtag" class="tags-images">
            <span v-if="tags[prtag]">
              <img :src="require(`~/assets/img/${tags[prtag].icon}`)" />
              <span>{{ tags[prtag].name }} </span>
            </span>
          </span>
        </span>
      </div>
    </template>
    <div>
      <el-button-group>
        <el-button type="primary" v-if="data.prgit">
          <a v-if="data.prgit === '0'" href="#">Github (по запросу)</a>
          <a v-else :href="data.prgit" target="_blank">GitHub</a>
        </el-button>
        <el-button type="primary" v-if="data.prlink">
          <a :href="data.prlink" target="_blank">Демо</a>
        </el-button>
        <el-button type="primary" v-if="data.prwork">
          <a :href="data.prwork" target="_blank">Сайт</a>
        </el-button>
      </el-button-group>
    </div>

    <div class="text item projects__text">
      <p>
        <vue-markdown>{{ data.prdescription }}</vue-markdown>
      </p>
    </div>
  </el-collapse-item>
</template>

<script>
export default {
  props: ["data", 'index'],
  data() {
    return {
      tags: [],
    };
  },
  mounted() {
    this.tags = this.$store.getters["projects/tags"];
  },
};
</script>

<style></style>
