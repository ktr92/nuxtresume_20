<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">Проекты</el-breadcrumb-item>
      <el-breadcrumb-item>{{project.prname}}</el-breadcrumb-item>
    </el-breadcrumb>
    

    <el-form
      :model="controls"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
    <el-form-item label="Название" prop="title">
       <el-input
        type="text"
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
      

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  middleware: ['admin-auth'],
  layout: 'admin',
  head() {
    return {
      title: `Проект | ${this.project.prname}`
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({store, params}) {
    const project = await store.dispatch('projects/fetchAdminById', params.id)
    return {project}
  },
  data() {
   return {
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: '',
        prlink: '',
        prgit: '',
        prwork: '',
        tags: [],
        prsort: [],
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
    this.controls.title = this.project.prname
    this.controls.text = this.project.prdescription
    this.controls.prlink = this.project.prlink
    this.controls.prwork = this.project.prwork
    this.controls.prgit = this.project.prgit
    this.controls.tags = this.project.prtags
    this.controls.prsort = this.project.prsort
    this.skills = Object.keys(this.$store.getters['projects/tags'])
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            prname: this.controls.title,
            prdescription: this.controls.text,
            prlink: this.controls.prlink,
            prwork: this.controls.prwork,
            prgit: this.controls.prgit,
            prtags: this.controls.tags,
            prsort: this.controls.prsort,
            id: this.project._id
          }
          
          try {
            await this.$store.dispatch('projects/update', formData)
            this.loading = false
            this.$router.push('/admin/')
          } catch (e) {
            this.loading = false
          }

        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-wrap {
    width: 600px;
  }

  .mr {
    margin-right: 2rem;
  }
</style>
