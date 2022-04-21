import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        component: () => import('@/pages/admin/MainAdmin'),
        children: [
            {
                path: 'user',
                component: () => import('@/pages/admin/PageUser')
            },
            {
                path: 'add-post',
                component: () => import('@/pages/admin/FormAddPost')
            }
        ]
    },
    {
        path: '',
        component: () => import('@/pages/auth/MainAuth'),
        children: [
            {
                path: '/',
                component: () => import('@/pages/auth/CompLogin')
            },
            {
                path: '/register',
                component: () => import('@/pages/auth/CompRegister')
            },
            {
                path: '/forgot-password',
                component: () => import('@/pages/auth/CompForgot')
            },
            {
                path: '/reset-password',
                component: () => import('@/pages/auth/ResetPassword')
            }
        ]
    },
    {
        path: '*',
        component: () => import('@/pages/page404')
    }
];

const router = new VueRouter({
    mode: "history",
    routes
})

export default router