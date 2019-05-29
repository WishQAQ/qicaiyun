<template>
  <div class="parentInfo">
    <NavTitle :title="'基本信息'"></NavTitle>

    <div class="main">
      <div class="main_banner"></div>
      <div class="main_content">
        <div class="title">
          <p class="title_name">家长信息</p>
        </div>

        <div class="parent_content">

          <div class="parent_message parent_name">
            <img src="../../assets/images/message_id.png" alt="">
            姓名：家长姓名
          </div>

          <div class="parent_box">
            <div class="parent_message parent_phone">
              <img src="../../assets/images/message_phone.png" alt="">
              13212341234
            </div>
            <div class="parent_message parent_phone">
              <img src="../../assets/images/message_phone.png" alt="">
              13212341234
            </div>
          </div>


          <div class="parent_message parent_address">
            <img src="../../assets/images/message_address.png" alt="">
            家庭住址：重庆
          </div>

          <div class="parentInfo_edit">
            <img src="../../assets/images/message_edit.png" alt="">
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
    name: "parentInfo",
    data (){
      return {
        userName: '',
        phone: '',
        mobilePhone: '',
        address: '',
      }
    },
    components:{
      NavTitle
    },
    methods: {
      submitMessage(){
        console.log(this.userName);
        console.log(this.phone);
        console.log(this.mobilePhone);
        console.log(this.address);
        this.$message({
          message: '保存成功',
          type: 'success'
        });
        this.$router.push({
          path: '/home/userInfo',
          query: {}
        });
      }
    },
  }
</script>

<style scoped lang="less">
  .parentInfo{
    .main{
      height: calc(100vh - 1rem);
      overflow: auto;
      .main_banner{
        height:4.22rem;
        width: 100%;
        background: url("../../assets/images/parent_banner.jpg") no-repeat center center;
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
        .parent_content{
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

          .parent_box{
            display: flex;
            align-items: center;
          }
          .parent_name{
            margin-right: .5rem;
            border-bottom: .01rem solid #999;
          }
          .parent_message{
            display: flex;
            align-items: center;
            margin-bottom: .3rem;
          }
          .parentInfo_edit{
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
