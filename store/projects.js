export const state = () => ({
  tags: 
    {
      nuxt: {
        icon: 'nuxt.svg',
        name: 'NuxtJS',
        sort: 1,
      },    
      vue: {
        icon: 'vue.svg',
        name: 'VueJS',
        sort: 2,
      },
      mongodb: {
        icon: 'mongodb.svg',
        name: 'MongoDB',
        sort: 3,
      },       
      html: {
        icon: 'html.svg',
        name: 'HTML',
        sort: 10,
      },       
      css: {
        icon: 'css.svg',
        name: 'CSS',
        sort: 11,
      },       
      vuetify: {
        icon: 'vuetify.svg',
        name: 'Vuetify',
        sort: 20,
      },       
      elementui: {
        icon: 'element.svg',
        name: 'ElementUI',
        sort: 21,
      },       
      scss: {
        icon: 'scss.svg',
        name: 'SCSS',
        sort: 12,
      },       
      js: {
        icon: 'js.svg',
        name: 'JavaScript',
        sort: 15,
      },       
      jquery: {
        icon: 'jquery.svg',
        name: 'jQuery',
        sort: 16,
      },       
      figma: {
        icon: 'figma.svg',
        name: 'Figma',
        sort: 40,
      },       
      photoshop: {
        icon: 'photoshop.svg',
        name: 'Photoshop',
        sort: 41,
      },       
      webpack: {
        icon: 'webpack.svg',
        name: 'Webpack',
        sort: 50,
      },       
      php: {
        icon: 'php.svg',
        name: 'PHP',
        sort: 20,
      },       
      diafan: {
        icon: 'diafan.jpg',
        name: 'diafan.CMS',
        sort: 7,
      },       
      opencart: {
        icon: 'opencart.svg',
        name: 'OpenCart CMS',
        sort: 7,
      },       
          
    }      
})

export const mutations = {

}

export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/projects/admin/create', data)
    } catch (e) {
      throw e
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`/api/projects/admin/${id}`)
    } catch (e) {
      throw e
    }
  },
  async update({commit}, data) {
    try {
      return await this.$axios.$put(`/api/projects/admin/${data.id}`, data)
    } catch (e) {
    
      throw e
    }
  },
  async getAll({commit}, data) {
    try {
      return await this.$axios.$get('/api/projects') 
    } catch (error) {
      
    }
  },
  async fetchAdminById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/projects/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
}

export const getters = {
  tags: state => state.tags
}