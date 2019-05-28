<template>
  <div class="parentInfo">
    <NavTitle :title="'家长基本信息'"></NavTitle>

    <div class="main">
      <div class="title">家长基本信息</div>
      <form class="form">
        <div class="input userName">
          <img class="icon" src="/static/images/message_id.png" alt="">
          <el-input
            v-model="userName"
            placeholder="请输入家长的姓名"
          ></el-input>
        </div>
        <div class="input telPhone">
          <div class="phone">
            <img class="icon" src="/static/images/message_phone.png" alt="">
            <el-input
              v-model="phone"
              placeholder="请输入您的电话"
            ></el-input>
          </div>
          <div class="mobilePhone">
            <img class="icon" src="/static/images/message_phone.png" alt="">
            <el-input
              v-model="mobilePhone"
              placeholder="请输入您的电话"
            ></el-input>
          </div>
        </div>
        <div class="input address">
          <img class="icon" src="/static/images/message_address.png" alt="">
          <el-input
            v-model="address"
            placeholder="请输入家庭详细地址"
          ></el-input>
        </div>

        <el-button @click="submitMessage" type="submit" class="submit">保存信息</el-button>

      </form>


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
      padding: 0 .48rem;
      .title{
        display: flex;
        align-items: center;
        font-size: .24rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(85,85,85,1);
        &::before{
          content: '';
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: .44rem;
          height: .44rem;
          background: url("/static/images/userInfo_basic.png") no-repeat;
          background-size: contain;
          object-fit: contain;
          margin-right: .25rem;
        }
      }
      .form{
        .input{
          margin-top: .1rem;
          display: flex;
          align-items: flex-end;
          height: .7rem;
          .phone,.mobilePhone{
            display: flex;
            align-items: flex-end;
            flex: 1;
          }
          .icon{
            width: .44rem;
            height: .44rem;
            object-fit: contain;
          }
          /deep/.el-input{
            border-bottom: .01rem solid rgba(153,153,153,.5);
            .el-input__inner{
              border: none;
              background: transparent;
              height: .5rem;
              line-height: .5rem;
              font-size: .18rem;
              font-family:PingFang-SC-Regular;
              font-weight:400;
              color:rgba(85,85,85,1);
              &::placeholder{
                text-align: right;
                font-size: .16rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(85,85,85,.5);
              }
            }
          }
        }
        .submit{
          z-index: 99;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: .9rem;
          background:rgba(246,85,82,1);
          border-radius: unset;
          border: unset;
          font-size: .30rem;
          font-family:PingFang-SC-Bold;
          font-weight:bold;
          color:rgba(255,255,255,1);
        }
      }
    }
  }
</style>
