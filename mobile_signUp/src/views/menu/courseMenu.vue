<template>
  <div class="courseMenu">
    <NavTitle :title="menuClick?'课程选择':'夏令营选择'"></NavTitle>
    <div class="main">
      <div class="banner" v-if="menuClick"></div>
      <div class="banner summerCamp" v-else></div>

      <div class="main_menu">
        <div
          class="menu_button"
          v-bind:class="menuClick?'courseClick':''"
          @click="openCourse()"
        >课程选择</div>
        <div
          class="menu_button"
          v-bind:class="!menuClick?'courseClick':''"
          @click="openSummerCamp()"
        >夏令营选择</div>
      </div>

      <CourseSelect v-on:childByValue="childByValue" ref="select" v-if="menuClick"></CourseSelect>
      <SummerCampSelect v-else></SummerCampSelect>

    </div>

    <div v-if="menuClick" class="courseMenuSubmit" @click="getCourseSubmit()">支付</div>

  </div>
</template>

<script>
  import NavTitle from '@/components/navTitle'
  import CourseSelect from '@/views/menu/courseSelect'
  import SummerCampSelect from '@/views/menu/summerCampSelect'

  export default {
    name: "courseMenu",
    components:{
      NavTitle,
      CourseSelect,
      SummerCampSelect
    },
    created(){

    },
    data(){
      return{
        menuClick:true,
        childVal: ''
      }
    },
    methods:{
      openCourse(){
        this.menuClick = true
      },
      openSummerCamp(){
        this.menuClick = false
      },
      childByValue: function (childValue) {
        this.childVal = childValue
        console.log(childValue);
      },
      getCourseSubmit(){
        if(this.childVal['1'] === ''||this.childVal === ''){
          this.$message({
            message: '请选中课程已完成支付',
            type: 'warning'
          });
        }else {
          this.$router.push({
            path: '/home/infoInitial',
            query: {}
          });
          this.$message({
            message: '正在跳转',
            type: 'success',
          });
        }
      },
    }
  }
</script>

<style scoped lang="less">
  .courseMenu{
    .main{
      height: calc(100vh - 1.9rem);
      overflow: auto;
      padding-bottom: .5rem;
      .banner{
        background: url("/static/images/61background.jpeg") no-repeat center center;
        background-size: cover;
        height: 4.7rem;
        &.summerCamp{
          background: url("/static/images/summerCamp_banner.png") no-repeat center center;
          background-size: cover;
        }
      }

      .main_menu{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        font-size: .28rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(85,85,85,1);
        margin: .32rem 0 .45rem;
        .menu_button{
          display: flex;
          justify-content: center;
          align-items: center;
          height: .40rem;
          border-radius: .1rem;
          padding: 0 .16rem;
          &.courseClick{
            background:rgba(247,85,82,1);
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(255,255,255,1);
          }
        }
      }

    }
    .courseMenuSubmit{
      z-index: 99;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.9rem;
      background: #f65552;
      border-radius: unset;
      border: unset;
      font-size: 0.3rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
