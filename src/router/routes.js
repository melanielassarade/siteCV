
const routes = [
  
  {
    path: '/',
    component: () => import('layouts/vue1.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'Contact', component: () => import('pages/Contact.vue') },
      { path: 'Skills', component: () => import('pages/Skills.vue') },
      { path: 'Trainings', component: () => import('pages/Trainings.vue') },
      { path: 'Experiences', component: () => import('pages/Experiences.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
