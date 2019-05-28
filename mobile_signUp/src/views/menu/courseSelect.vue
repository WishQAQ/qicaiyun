<template>
  <div class="courseSelect">
    <div class="menu_list">
      <div class="menu_box">
        <div class="list_name" v-bind:class="{ active:index == isActive }" @click="clickMenuList(index)" v-for="(item , index) in menuList" :key="index">{{item.name}}</div>
      </div>
      <div class="more_button" @click="openMore()"></div>
      <div class="more_box" v-if="moreBox">
<!--   123123    -->
      </div>
    </div>


    <div class="list_box">
      <div ref="listBox" class="course_box" v-on:click="clickCourse(i)" v-for="i in 8" :key="i">
        <img src="/static/images/children_pinyin.png" alt="">
        拼音
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "courseSelect",
    // props:['isActive' , 'isClick'],
    data(){
      return{
        menuList:[
          {name: '少儿类'},
          {name: '初中类'},
          {name: '高中类'},
          {name: '舞蹈类'},
          {name: '运动类'},
          {name: '兴趣类'},
          {name: '少儿类'},
          {name: '初中类'},
          {name: '高中类'},
          {name: '舞蹈类'},
          {name: '运动类'},
          {name: '兴趣类'},
        ],
        moreBox: false,
        isActive: '',
        checkedCities: '',
        clickNum: 0,
        rightData:'',
      }
    },
    methods:{
      clickMenuList(index){
        this.isActive = index
      },
      clickCourse(i){
        this.isClick = i-1;

          if(this.$refs.listBox[i-1].className === 'course_box'){
            if(this.clickNum <9){
              this.$refs.listBox[i-1].className = 'course_box clickCourse';// 添加类
              this.clickNum ++
              console.log('数量  '+this.clickNum);
            }else {
              this.$message({
                message: '最多只可选择4项课程',
                type: 'warning'
              });
            }
          }else{
            this.$refs.listBox[i-1].className = 'course_box';// 选中再取消的情况
            this.isClick = ''
            this.clickNum --
            console.log('数量  '+this.clickNum);
          }


        this.$emit('childByValue', [this.isActive , this.isClick])
      },
      openMore(){
        if(!this.moreBox){
          this.moreBox = true
        }else {
          this.moreBox = false
        }
      },
    },
    mounted() {
      this.isActive = 0;

      this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => {
          console.log(res);
        })
    }
  }
</script>

<style scoped lang="less">
  .courseSelect{
    padding: 0 .25rem;
    .menu_list{
      display: flex;
      align-items: center;
      font-size: .24rem;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(85,85,85,.5);
      position: relative;
      .menu_box{
        width: calc(100% - .55rem);
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        .list_name{
          position: relative;
          display: flex;
          justify-content: center;
          flex-shrink: 0;
          &:not(:last-child){
            margin-right: .35rem;
          }
          &.active{
            &:before{
              content: '';
              position: absolute;
              bottom: 0;
              height: .04rem;
              width: 80%;
              background: rgba(246,85,82,1);
              border-radius: .1rem;
            }
          }
        }
      }
      .more_button{
        background: url("/static/images/more.png") no-repeat center center;
        background-size: contain;
        width: .5rem;
        height: .5rem;
        margin-left: .3rem;
      }
      .more_box{
        position: absolute;
        top: .5rem;
        width: 100%;
        height: 4rem;
        background: red;
      }
    }
    .list_box{
      display: flex;
      align-items: center;
      margin-top: .48rem;
      flex-wrap: wrap;
      .course_box{
        display: flex;
        align-items: center;
        height: .8rem;
        padding: 0 .24rem;
        background:rgba(242,242,242,1);
        border-radius:10px;
        font-size: .22rem;
        font-family:PingFang-SC-Bold;
        color:rgba(153,153,153,1);
        font-weight:bold;
        margin-bottom: .3rem;
        &.clickCourse{
          background:rgba(247,85,82,1);
          box-shadow:1px 2px 7px 1px rgba(247,85,82,0.79);
          color:rgba(255,255,255,1);

        }
        &:not(:nth-child(3n)){
          margin-right: 1.3rem;
        }
        >img{
          width: .38rem;
          height: .46rem;
          object-fit: cover;
          margin-right: .14rem;
          font-size: .22rem;
          font-family:PingFang-SC-Bold;
          font-weight:bold;
          color:rgba(255,255,255,1);
        }
      }
    }

  }
</style>
