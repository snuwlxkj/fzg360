import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/index'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
			return { x: 0, y: to.meta.savedPosition || 0};
		}
	},
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/pages/home/index'
    },
    {
      path: '/pages/home/index',//首页
      name: 'homeIndex',
      meta: {
				keepAlive: true,
				title: '首页'
			},
      component: home
    },
    {
      path: '/pages/about/index',
      name: 'about',
      meta: {
				title: '关于我们'
			},
      component: () => import(/* webpackChunkName: "about" */ '@/pages/about/index')
    }
  ]
})
