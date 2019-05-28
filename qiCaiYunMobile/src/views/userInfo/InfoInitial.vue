<template>
  <div class="parentInfoInitial">
    <NavTitle :title="'家长基本信息'"></NavTitle>
    <!--家长信息-未收录-->
    <div class="main" v-if="firstMessage">
      <div class="title"><p>家长基本信息</p></div>
      <form class="form">
        <div class="input userName">
          <img class="icon" src="../../assets/images/message_id.png" alt="">
          <el-input
            v-model="userName"
            placeholder="请输入家长的姓名"
          ></el-input>
        </div>
        <div class="input telPhone">
          <div class="phone">
            <img class="icon" src="../../assets/images/message_phone.png" alt="">
            <el-input
              v-model="phone"
              placeholder="请输入您的电话"
            ></el-input>
          </div>
          <div class="mobilePhone">
            <img class="icon" src="../../assets/images/message_phone.png" alt="">
            <el-input
              v-model="mobilePhone"
              placeholder="请输入您的电话"
            ></el-input>
          </div>
        </div>
        <div class="input address">
          <img class="icon" src="../../assets/images/message_address.png" alt="">
          <el-input
            v-model="address"
            placeholder="请输入家庭详细地址"
          ></el-input>
        </div>

        <el-button @click="submitMessage" type="submit" class="submit">保存信息</el-button>

      </form>


    </div>
    <!--家长信息-已收录-->
    <div class="main" v-else>
      <div class="title"><p>家长基本信息</p></div>
      <form class="form">
        <div class="input userName">
          <img class="icon" src="../../assets/images/message_id.png" alt="">
          家长姓名
        </div>
        <div class="input telPhone">
          <div class="phone">
            <img class="icon" src="../../assets/images/message_phone.png" alt="">
            13212341234
          </div>
          <div class="mobilePhone">
            <img class="icon" src="../../assets/images/message_phone.png" alt="">
            18612341234
          </div>
        </div>
        <div class="input address">
          <img class="icon" src="../../assets/images/message_address.png" alt="">
          重庆市沙坪坝区石桥铺微创中心
        </div>

        <el-button @click="submitMessage" type="submit" class="submit">保存信息</el-button>

      </form>


    </div>
    <span class="line"></span>

    <div class="main">
      <div class="title">
        <p>孩子基本信息</p>
        <div class="addMessage">添加</div>
      </div>
      <form class="form">
        <div class="input childName">
          <img class="icon" src="../../assets/images/child_name.png" alt="">
          <el-input
            v-model="childName"
            placeholder="请输入孩子的姓名"
          ></el-input>
        </div>
        <div class="input childMessage">
          <div class="age">
            <img class="icon" src="../../assets/images/child_age.png" alt="">
            <el-input
              v-model="childAge"
              placeholder="请输入孩子的年龄"
            ></el-input>
          </div>
          <div class="sex">
            <el-radio v-model="radio" label="1"><img src="../../assets/images/male.png" alt="">男</el-radio>
            <el-radio class="female" v-model="radio" label="2"><img src="../../assets/images/female.png" alt="">女</el-radio>
          </div>
        </div>
        <div class="input userId">
          <img class="icon" src="../../assets/images/message_id.png" alt="">
          <el-input
            v-model="childId"
            placeholder="请输入孩子的身份证号码信息"
          ></el-input>
        </div>
        <div class="input address">
          <img class="icon" src="../../assets/images/child_school.png" alt="">
          <el-input
            v-model="school"
            placeholder="请输入孩子的学校名称"
          ></el-input>
        </div>

        <el-button @click="submitMessage" type="submit" class="submit">支付</el-button>
      </form>


    </div>

  </div>
</template>

<script>

  import NavTitle from '@/components/navTitle'

  export default {
    name: "parentInfoInitial",
    data (){
      return {
        firstMessage: true,

        userName: '',
        phone: '',
        mobilePhone: '',
        address: '',

        childName: '',
        childAge: '',
        radio: '1',
        childId: '',
        school: '',
      }
    },
    components:{
      NavTitle
    },
    methods: {
      submitMessage(){
        console.log('家长信息');
        console.log(this.userName);
        console.log(this.phone);
        console.log(this.mobilePhone);
        console.log(this.address);
        console.log('孩子信息');
        console.log(this.childName);
        console.log(this.childAge);
        console.log(this.childPhone);
        console.log(this.childId);
        console.log(this.school);

        this.$message({
          message: '保存成功',
          type: 'success'
        });
        // this.$router.push({
        //   path: '/home/userInfo',
        //   query: {}
        // });
      }
    },
  }
</script>

<style scoped lang="less">
  .parentInfoInitial{
    .main{
      padding: .3rem .48rem;
      .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
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
            background: url("../../assets/images/userInfo_basic.png") no-repeat;
            background-size: contain;
            object-fit: contain;
            margin-right: .25rem;
          }
        }
        .addMessage{
          font-size: .16rem;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(85,85,85,1);
          display: flex;
          align-items: center;
          &::before{
            content: '';
            background: url("../../assets/images/addMessage.png") no-repeat center center;
            background-size: 100%;
            object-fit: contain;
            width: .18rem;
            height: .18rem;
            display: flex;
            margin-right: .1rem;
          }
        }
      }
      .form{
        .input{
          margin-top: .1rem;
          display: flex;
          align-items: flex-end;
          height: .7rem;
          font-size: .25rem;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:rgba(85,85,85,1);
          .phone,.mobilePhone,.age{
            display: flex;
            align-items: flex-end;
            flex: 1;
          }
          .icon{
            width: .44rem;
            height: .44rem;
            object-fit: contain;
            margin-right: .25rem;
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
          &.childMessage{
            .sex{
              display: flex;
              align-items: center;

              margin-left: .3rem;
              img{
                display: flex;
                align-items: center;
                justify-content: center;
                width: .21rem;
                height: .33rem;
                object-fit: contain;
                flex-shrink:0
              }
              /deep/.el-radio{
                display: flex;
                align-items: center;
                .el-radio__label{
                  display: flex;
                  align-items: center;
                  padding: unset;
                  font-size: .2rem;
                  font-family:PingFang-SC-Medium;
                  font-weight:500;
                  color:rgba(85,85,85,1);
                }
              }
              .female.is-checked{
                /deep/.el-radio__input.is-checked{
                  .el-radio__inner{
                    border-color: #F65552;
                    background: #F65552;
                  }
                }
                /deep/.el-radio__label{
                  color: #F65552;
                }
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
    .line{
      height: .5rem;
      width: 100%;
      display: block;
      background: RGBA(245, 245, 245, 1);
    }
  }
</style>
