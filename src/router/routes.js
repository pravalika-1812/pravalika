
const routes = [
  {
    path: '/pravalika',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'AboutMe', component: () => import('src/pages/AboutMe.vue') },
      { path: 'myinterests', component: () => import('src/pages/MyInterests.vue') },
      { path: 'myskills', component: () => import('src/pages/MySkills.vue') },
      { path: 'Family', component: () => import('src/pages/MyFamily.vue') },
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
