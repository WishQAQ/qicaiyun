import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'

Vue.use(Router)

const Home = () => import('@/Home');
const UserInfo = () => import('@/views/userInfo/userInfo');  // 个人中心

const InfoInitial = () => import('@/views/userInfo/infoInitial');  // 信息初始化

const ParentInfo = () => import('@/views/userInfo/parentInfo');  // 家长信息
const ChildInfo = () => import('@/views/userInfo/childInfo');  // 孩子信息

const MessageBoard = () => import('@/views/messageBoard/messageBoard');  // 留言板

const MyCourse = () => import('@/views/course/myCourse');  // 我的课程courseMenu

const MyPrize = () => import('@/views/prize/myPrize');  // 我的奖品

const CourseMenu = () => import('@/views/menu/courseMenu');  // 我的课程

const LuckyWheel = () => import('@/views/luckyWheel/luckyWheel');  // 幸运转盘


const router = new Router({
  mode: 'history',
  routes: [
    //主页面路由
    {
      path: '/',
      redirect: '/home/index'
    },
    {
      path: '/home',
      redirect: '/home/index'
    },
    {
      path: '/index',
      redirect: '/home/index'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/home/index',
        name: 'Index',
        component: Index
      },{
        // 个人中心
        path: '/home/userInfo',
        name: 'UserInfo',
        component: UserInfo,
      },{
        // 信息初始化
        path: '/home/infoInitial',
        name: 'InfoInitial',
        component: InfoInitial,
      },{
        // 家长信息
        path: '/home/parentInfo',
        name: 'ParentInfo',
        component: ParentInfo,
      },{
        // 孩子信息
        path: '/home/childInfo',
        name: 'ChildInfo',
        component: ChildInfo,
      },{
        // 留言板
        path: '/home/messageBoard',
        name: 'MessageBoard',
        component: MessageBoard
      },{
        // 我的课程
        path: '/home/myCourse',
        name: 'MyCourse',
        component: MyCourse
      },{
        // 我的奖品
        path: '/home/myPrize',
        name: 'MyPrize',
        component: MyPrize
      },{
        // 选课菜单
        path: '/home/courseMenu',
        name: 'CourseMenu',
        component: CourseMenu
      },{
        // 幸运转盘
        path: '/home/luckyWheel',
        name: 'LuckyWheel',
        component: LuckyWheel
      }]
    }]
});

export default router;
