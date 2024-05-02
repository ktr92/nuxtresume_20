<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >

    <h1 class="mb">Добавить новый проект</h1>

    <el-form-item label="Название" prop="title">
      <el-input
        v-model="controls.title"
      />
    </el-form-item>

    <el-form-item label="Описание" prop="text">
      <el-input
        type="textarea"
        v-model="controls.text"
        :rows="14"
      />
    </el-form-item>

     <el-form-item label="Ссылка на демо" prop="text">
      <el-input
        type="text"
        v-model="controls.prlink"
      
      />
    </el-form-item>

     <el-form-item label="Ссылка на гитхаб" prop="text">
      <el-input
        type="text"
        v-model="controls.prgit"
      
      />
    </el-form-item>
     <el-form-item label="Ссылка на сайт" prop="text">
      <el-input
        type="text"
        v-model="controls.prwork"
      
      />
    </el-form-item>
     <el-form-item label="Порядок сортировки" prop="text">
      <el-input
        type="number"
        v-model="controls.prsort"
      
      />
    </el-form-item>

    <el-checkbox-group v-model="controls.tags">
      <span v-for="item in skills" :key="item" class="tags">
        <el-checkbox :label="item"></el-checkbox>
      </span>
    </el-checkbox-group>
    <br>
   
<!-- 
    <el-upload
      class="mb"
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">файлы с расширением jpg/png</div>
    </el-upload> -->

    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
        :loading="loading"
      >
        Создать проект
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      image: null,
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: 'Адаптивная верстка сайта с каталогом, фильтром, информационными страницами, модальными окнами, слайдерами ',
        prlink: '',
        prgit: '',
        prwork: '',
        tags: [],
        prsort: 1,
      },
      skills: [],
      rules: {
        
        title: [
          { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.skills = Object.keys(this.$store.getters['projects/tags'])
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid /* && this.image */) {
          this.loading = true

          const formData = {
            prname: this.controls.title,
            prdescription: this.controls.text,
            prlink: this.controls.prlink,
            prwork: this.controls.prwork,
            prgit: this.controls.prgit,
            prtags: this.controls.tags,
            prsort: this.controls.prsort
           /*  image: this.image */
          }

          try {
            await this.$store.dispatch('projects/create', formData)
            this.$router.push('/admin/')
           
          } catch (e) {} finally {
            this.loading = false
          }
        } else {
          alert("Форма не валидна")
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  form {
    width: 600px;
  }
 
</style>
