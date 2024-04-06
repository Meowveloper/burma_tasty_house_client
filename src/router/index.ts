import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('../views/LandingPage/LandingPage.vue'), 
    beforeEnter(to, from, next) {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');

      if(user && token) {
        next({ name: 'NewsFeedPage' });
      } else {
        next();
      }
    }
  },

  {
    path: '/NewsFeed', 
    name: 'NewsFeedPage', 
    component: () => import('../views/NewsFeedPage/NewsFeedPage.vue'), 
    beforeEnter(to, from, next) {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if(user && token) {
        next();
      } else {
        next({ name: 'LandingPage' })
      }
    }
  }, 


  {
    path : '/CreateRecipe', 
    name : 'CreateRecipePage', 
    component : () => import('../views/CreateRecipePage/CreateRecipePage.vue'), 
    beforeEnter(to, from, next) {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if(user && token) {
        next();
      } else {
        next({ name: 'LandingPage' })
      }
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
