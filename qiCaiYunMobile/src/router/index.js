import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'

Vue.use(Router)

const Home = () => import('@/Home')

// 个人中心
const UserInfo = () => import('@/views/userInfo/userInfo')
// 信息初始化
const InfoInitial = () => import('@/views/userInfo/infoInitial')
// 家长信息
const ParentInfo = () => import('@/views/userInfo/parentInfo')
// 孩子信息
const ChildInfo = () => import('@/views/userInfo/childInfo')
// 留言板
const MessageBoard = () => import('@/views/messageBoard/messageBoard')
// 我的课程courseMenu
const MyCourse = () => import('@/views/course/myCourse')
// 我的奖品
const MyPrize = () => import('@/views/prize/myPrize')
// 我的课程
const CourseMenu = () => import('@/views/menu/courseMenu')
// 幸运转盘
const LuckyWheel = () => import('@/views/luckyWheel/luckyWheel')
// 夏令营详情页
const SummerCamp = () => import('@/views/summerCamp/summerCamp')
// 课程时间选择
const ClassTime = () => import('@/views/menu/classTime')

const router = new Router({
  // mode: 'history',
  routes: [
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
        path: '/home/userInfo',
        name: 'UserInfo',
        component: UserInfo
      },{
        // 信息初始化
        path: '/home/infoInitial',
        name: 'InfoInitial',
        component: InfoInitial
      },{
        // 家长信息
        path: '/home/parentInfo',
        name: 'ParentInfo',
        component: ParentInfo
      },{
        // 孩子信息
        path: '/home/childInfo',
        name: 'ChildInfo',
        component: ChildInfo
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
        // 课程时间选择
        path: '/home/classTime',
        name: 'ClassTime',
        component: ClassTime
      },{
        // 幸运转盘
        path: '/home/luckyWheel',
        name: 'LuckyWheel',
        component: LuckyWheel
      },{
        // 夏令营详情
        path: '/home/summerCamp',
        name: 'SummerCamp',
        component: SummerCamp
      }]
    }]
});

// router.beforeEach(( to, from, next ) => {
//   if (to.name != 'auth') {//判断当前是否是新建的auth路由空白页面
//     let _token = sessionStorage.getItem('wechataccess_token');
//     if (!_token) {//如果没有token,则让它授权
//       //保存当前路由地址，授权后还会跳到此地址
//       sessionStorage.setItem('beforeUrl', to.fullPath);
//       //授权请求,并跳转http://m.water.ui-tech.cn/auth路由页面
//       window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx93702596c4a16d03&redirect_uri=URL%2Fauth&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
