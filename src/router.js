import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
      // =============================================================================
      // AUTHENTICATION
      // =============================================================================
      {
        path: '',
        component: () => import('@/layouts/full-page/FullPage.vue'),
        children: [
          /*
          *  Login
          */ 
          {
            path: '/login',
            name: 'login',
            component: () => import('@/views/auth/login.vue')
          },
          
        ]
      },
      // =============================================================================
      // ADMIN
      // =============================================================================
      {
        path: '',
        component: () => import('@/components/Inicio.vue'),
        children: [
          /*
          *  Inicio admin
          */ 
          {
            path: '/inicio',
            name: 'inicio',
            component: () => import('@/components/Inicio.vue')
          },
          
        ]
      },
    ],
          
})

router.beforeEach(function (to, from, next) {
    if (to.path === '/forbidden') {
      next(false)
    } else {
      next()
    }
  })


export default router