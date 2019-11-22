import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/view/Home'

const router =  new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home,
			meta: {
				title: '首页',
				requireAuth: false
			}
		}
	]
})

//全局router守卫
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
	/* 登录判断 */ //requireAuth是否要登录
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {//是否有token
      next();
    } else {
  		next('/login');
  	}
  } else {
    next();
  }
})


export default router