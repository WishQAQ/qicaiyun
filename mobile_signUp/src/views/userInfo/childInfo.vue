<template>
  <div class="childInfo">
    <NavTitle :title="'孩子信息'"></NavTitle>

    <div class="main">
      <div class="main_banner"></div>
      <div class="main_content">
        <div class="title">
          <p class="title_name">孩子信息</p>
        </div>

        <div class="child_content">

          <div class="child_box">
            <div class="child_message child_name">
              <img src="/static/images/child_name.png" alt="">
              姓名：꽃이 흩날리다.
            </div>

            <div class="child_message child_sex">
              <img src="/static/images/female.png" alt="">
              女
            </div>
          </div>

          <div class="child_message child_age">
            <img src="/static/images/child_age.png" alt="">
            年龄：12岁
          </div>

          <div class="child_message child_id">
            <img src="/static/images/message_id.png" alt="">
            孩子身份证件：500XXXXXXXXXXX1321
          </div>

          <div class="child_message child_school">
            <img src="/static/images/child_school.png" alt="">
            孩子就读学校：重庆第二十四中学校
          </div>

          <div class="childInfo_edit">
            <img src="/static/images/message_edit.png" alt="">
            信息修改
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import NavTitle from '@/components/navTitle'

  export default {
    name: "childInfo",
    data (){
      return {

      }
    },
    components:{
      NavTitle
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
  .childInfo{
    .main{
      height: calc(100vh - 1rem);
      overflow: auto;
      .main_banner{
        height:4.22rem;
        width: 100%;
        background: url("/static/images/child_banner.png") no-repeat center center;
        background-size: cover;
      }
      .main_content{
        padding: 0 .25rem;
        .title{
          margin-top: .8rem;
          margin-bottom: .3rem;
          .title_name{
            font-size: .28rem;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(85,85,85,1);
          }

        }
        .child_content{
          font-size: .22rem;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(85,85,85,1);
          img{
            width: .44rem;
            height: .44rem;
            object-fit: contain;
            margin-right: .14rem;
          }

          .child_box{
            display: flex;
            align-items: center;
            .child_name{
              margin-right: .5rem;
            }
          }
          .child_message{
            display: flex;
            align-items: center;
            margin-bottom: .3rem;
          }
          .childInfo_edit{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            img{
              width: .3rem;
              height: .3rem;
            }
          }
        }
      }
    }
  }
</style>
