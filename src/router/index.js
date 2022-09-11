import Vue from "vue";
import VueRouter from "vue-router";
import homePage from '@/views/homePage'
import forRoom from '@/views/forRoom'
import consulting from '@/views/consulting'
import my from '@/views/my'
import denglu from '@/views/denglu/denglu.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/homePage',
    component:homePage
  },
  {
    path: '/forRoom',
    component:forRoom
  },
  {
    path: '/consulting',
    component:consulting
  },
  {
    path: '/my',
    component:my
  },
  {
    path: '/denglu',
    component:denglu
  }
];

const router = new VueRouter({
  routes,
});

export default router;
