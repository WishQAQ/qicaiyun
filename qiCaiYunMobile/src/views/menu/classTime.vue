<template>
  <div class="classTime">
    <NavTitle :title="'课程时间选择'"></NavTitle>
    <div class="main">
      <div class="title">时间选择</div>
      <div class="main_list" v-for="(item , index) in list" :key="index">
        <img :src="item.courseImg" alt="">
        <div class="course_name">{{item.username}}</div>
        <el-select v-model="item.index" placeholder="请选择时间">
          <el-option
            v-for="list in options"
            :key="list.value"
            :label="list.label"
            :value="list.value">
          </el-option>
        </el-select>

      </div>



    </div>
    <div class="courseSubmit" @click="getCourseSubmit()">支付</div>

  </div>
</template>

<script>
  import NavTitle from '@/components/navTitle'
  export default {
    name: 'classTime',
    components:{
      NavTitle
    },
    data(){
      return{
        list: [],
        options: [{
          value: '1',
          label: '1月'
        }, {
          value: '2',
          label: '2月'
        }, {
          value: '3',
          label: '3月'
        }, {
          value: '4',
          label: '4月'
        }, {
          value: '5',
          label: '5月'
        }],
        value: ''
      }
    },
    methods:{
    },
    created(){
      this.list = this.$route.query.checkCourse
    },
    watch:{

    }
  }
</script>

<style scoped lang="less">
  .classTime{
    .main{
      padding: 0 .24rem;
      height: calc(100vh - 1.9rem);
      overflow: auto;
      .title{
        font-size: .28rem;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(246,85,82,1);
        margin-bottom: .5rem;
      }
      .main_list{
        display: flex;
        align-items: center;
        &:not(:last-child){
          margin-bottom: .5rem;
        }
        >img{
          width: .45rem;
          height: .45rem;
          object-fit: contain;
          margin-right: .1rem;
        }
        .course_name{
          font-size: .22rem;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(85,85,85,1);
          margin-right: .25rem;
        }
      }
    }
    .courseSubmit{
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
