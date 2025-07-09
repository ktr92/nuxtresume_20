export const state = () => ({
  projects: [],
  name: "Кудашев Тимур Ринатович",
  city: "Набережные Челны",
  date: "25 июня 1992",
  status: "Ищу работу Frontend разработчиком Vue / Nuxt. Удаленно или офис.",
  emailvalue: "ktr992@yandex.ru",
  phonevalue: '8-986-910-80-73',
  tgvalue: '//tttttt.me/ktr992',
  description: `Frontend разработка:<br>
- более 10 лет опыта верстки HTML, CSS/SCSS, JS/JQuery (более 100 проектов)<br>
- более 8 лет опыта разработки на чистом Javascript - ES6 и выше<br>
- более 3 лет опыта разработки на фреймворках - Vue 2 и Vue 3, а также Nuxt 2 и Nuxt 3<br>
- более 2 лет опыта работы c TypeScript<br>

- имеется опыт работы с REST API, MongoDB, MySQL, Firebase, Prisma ORM, Supabase<br>
- небольшой опыт написание тестов Jest / Cypress<br>
- использую в работе git, webpack, eslint <br>
- помимо FrontEnd разработки, имеется опыт работы с CMS Битрикс, Opencart, Wordpress. <br>
Ориентируюсь в PHP коде. <br>
Имеется опыт работы с C++, Python-Django.`,
  skills: [    
    { type: 'success ', label: 'Vue' },
    { type: 'success ', label: 'Nuxt' },
    { type: 'success ', label: 'HTML - CSS - SCSS' },
    { type: 'success ', label: 'Javascript' },
    { type: 'success ', label: 'Typescript' }, 
  ],
  skills2: [    
       { type: 'warning ', label: 'REST API' },  

   { type: 'warning ', label: 'Git' },
   /* { type: 'info', label: 'Pug' },   */
 /*    { type: 'info', label: 'Webpack' },  */   
    { type: 'warning ', label: 'Figma / Photoshop' },
   // { type: 'info', label: 'C++' },
   // { type: 'info', label: 'Python' },
   // { type: 'info', label: 'Matlab' },
   { type: 'warning ', label: 'MongoDB' },
    { type: 'warning ', label: 'MySQL' }, 
       { type: 'warning ', label: 'Jest/Cypress' },  
  
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

