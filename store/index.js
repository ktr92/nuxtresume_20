export const state = () => ({
  projects: [],
  name: "Кудашев Тимур",
  city: "Набережные Челны",
  date: "25 июня 1992",
  status: "Ищу работу Frontend разработчиком Vue / Nuxt",
  emailvalue: "ktr992@yandex.ru",
  phonevalue: '89869108073',
  tgvalue: '//tttttt.me/ktr992',
  description: 'Опыт адаптивной кроссбраузерной верстки более 10 лет. Опыт коммерческой Frontend разработки Vue, Nuxt более 4 лет',
  skills: [    
    { type: 'info', label: 'Vue' },
    { type: 'info', label: 'Nuxt' },
    { type: 'info', label: 'HTML - CSS - SCSS' },
    { type: 'info', label: 'Javascript' },
    { type: 'info', label: 'Typescript' }, 
  ],
  skills2: [    
       { type: 'info', label: 'REST API' },  

   { type: 'info', label: 'Git' },
   /* { type: 'info', label: 'Pug' },   */
 /*    { type: 'info', label: 'Webpack' },  */   
    { type: 'info', label: 'Figma / Photoshop' },
   // { type: 'info', label: 'C++' },
   // { type: 'info', label: 'Python' },
   // { type: 'info', label: 'Matlab' },
   { type: 'info', label: 'MongoDB' },
    { type: 'info', label: 'MySQL' }, 
       { type: 'info', label: 'Jest/Cypress' },  
  
   // { type: 'info', label: 'CMS Opencart' },
   // { type: 'info', label: 'CMS Diafan' }
  ],
  langs: [
    { type: 'info', label: 'Английский' },
    { type: 'info', label: 'Французский' },
  ],
  experience: [
    {
      date: '2010 - 2015',
      title: 'Филиал Казанского (Приволжского) федерального университета, Набережные Челны',
      description: 'Прикладная математика и информатика (математик, системный программист)',
      role: 'Специалист',
      status: 'past',
      id: '001'
    },
    {
      date: '2015 - 2018',
      title: 'VELVETMEDIA, веб-студия г. Набережные Челны',
      description: 'Frontend разработка + интеграция сайтов на CMS Diafan, Wordpress, Opencart.',
      role: 'Frontend-разработчик',
      status: 'past',
      id: '002'
    },
    {
      date: '2021 - 2022',
      title: 'ООО ИПОТЕХ. Иннополис',
      description: 'Frontend разработка на проекте Vue / Nuxt + REST API -  <a href="//itrent.onrender.com/calculator" target="_blank">подбор помещений для аренды</a>',
      role: 'Frontend-разработчик',
      status: 'past',
      id: '004'
    },
    {
      date: '2018 - н.в.',
      title: 'ООО "Эмпис", интернет-агентство полного цикла, г.Москва - <a href="//www.empis.ru" target="_blank">empis.ru</a> ',
      description: 'Frontend разработка + поддержка сайтов на CMS Битрикс',
      role: 'Frontend-разработчик',
      status: 'past',
      id: '004'
    },
   /*  {
      date: '04.2022 - 2023',
      title: 'ООО "ИПОТЕХ", Иннополис',
      description: 'Разработка Frontend части приложений Nuxt Vue.',
      role: 'Frontend-разработчик',
      status: 'present',
      id: '005'
    }, */
  ],
  about: `<div>
   <p>На этой странице представлены некоторые из моих проектов</p>
  </div>`

})


export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects;
  },
};

export const actions = {
  async fetchProjects({ commit }) {
    try {
      const response = await fetch('/.netlify/functions/projects');
      const data = await response.json();
      commit('SET_PROJECTS', data);
    } catch (error) {
      console.error('Ошибка при получении проектов:', error);
    }
  },
};

