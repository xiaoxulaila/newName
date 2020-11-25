import Vue from 'vue'
//引入组件
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import register from './components/register.vue'
import login from './components/login.vue'
import userinfo from './components/userinfo.vue'
import edit from './components/edit.vue'


// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




//引入vant
import {
    Button
} from 'vant';
import 'vant/lib/index.css';

Vue.use(Button);


Vue.use(ElementUI);



Vue.use(Router)


const router = new Router({
    routes: [{
            path: '',
            redirect: "userinfo"
        },
        {
            path: '/helloworld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            component: userinfo,
            meta: {
                istoken: true
            }
        },
        {
            path: '/edit',
            name: 'edit',
            component: edit,
            meta: {
                istoken: true
            }
        }
    ]
})



// 路由拦截
router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true) {
        router.push('login')
        Vue.prototype.$msg.fail('请重新登录')
        return
    }
    next();
})

export default router