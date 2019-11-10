import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'

Vue.use(Router)

export default new Router({
    routes: [
		{
		    path: '/',
		    redirect: '/login'
		},
        {
            path: '/login',
			name:'loginLink',
            component: Login,
            meta: { title: '登录界面' }
        },
		{
		    path: '/main',
			name:'mainLink',
		    component: Main,
		    meta: { title: '系统主界面' }
		},
		{
		    path: '*',
		    redirect: '/login'
		}
    ]
});