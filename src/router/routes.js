
const routes = [
  
  {
    path: '/',
    component: () => import('layouts/siteCV.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'Contact', component: () => import('pages/Contact.vue') },
      { path: 'Skills', component: () => import('pages/Skills.vue') },
      { path: 'Trainings', component: () => import('pages/Trainings.vue') },
      { path: 'Experiences', component: () => import('pages/Experiences.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
