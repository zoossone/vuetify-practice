import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import( '@/layouts/default/Index'),
        children: [
          {
              path: '/',
              name: 'Dashboard',
              component: () => import( '@/views/Dashboard'),
          },
          {
              path: '/grid-system',
              name: 'GridSystem',
              component: () => import( '@/views/GridSystem'),
          },
          {
              path: '/grid-list-page',
              name: 'GridList',
              component: () => import( '@/views/GridListPage'),
          },
          {
              path: '/breakpoints',
              name: 'Breakpoints',
              component: () => import( '@/views/Breakpoints'),
          },
          {
              path: '/typography',
              name: 'Typography',
              component: () => import( '@/views/Typography'),
          },
          {
              path: '/tables',
              name: 'Tables',
              component: () => import( '@/views/Tables'),
          },
          {
              path: '/forms',
              name: 'Forms',
              component: () => import( '@/views/Forms'),
          },
          {
              path: '/buttons',
              name: 'Buttons',
              component: () => import( '@/views/Buttons'),
          },
          {
              path: '/icons',
              name: 'Icons',
              component: () => import( '@/views/Icons'),
          },
        ]
    },
    {
        path: '/authentication',
        component: () => import( '@/layouts/authentication/Index'),
        children: [
          {
              path: 'sign-in',
              name: 'SignIn',
              component: () => import( '@/views/authentication/SignIn'),
          },
          {
              path: 'sign-up',
              name: 'SignUp',
              component: () => import( '@/views/authentication/SignUp'),
          },
        ]
    },
    {
        path: '/page',
        component: () => import('@/layouts/page/Index'),
        children: [
          {
              path: 'product-list',
              name: 'ProductList',
              component: () => import( '@/views/page/ProductList'),
          },
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
