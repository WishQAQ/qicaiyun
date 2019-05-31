<template>
  <div class="parentInfo">
    <NavTitle :title="'基本信息'"></NavTitle>

    <div class="main">
      <div class="main_banner"></div>
      <div class="main_content">
        <div class="title">
          <p class="title_name">家长信息</p>
        </div>

        <div class="parent_content" v-if="parentInfo">
          <div class="parent_message parent_name">
            <img src="../../assets/images/message_id.png" alt="">
            姓名：{{this.userName}}
          </div>
          <div class="parent_box">
            <div class="parent_message parent_phone">
              <img src="../../assets/images/message_phone.png" alt="">
              <span>{{this.phone}}</span>
            </div>
            <div class="parent_message parent_phone">
              <img src="../../assets/images/message_phone.png" alt="">
              <span>{{this.sparePhone}}</span>
            </div>
          </div>
          <div class="parent_message parent_address">
            <img src="../../assets/images/message_address.png" alt="">
            家庭住址：{{this.address}}
          </div>
          <div class="parentInfo_edit" @click="parentInfo = false">
            <img src="../../assets/images/message_edit.png" alt="">
            信息修改
          </div>
        </div>


        <div class="edit_content" v-else>
          <el-form>
            <div class="parent_message parent_name">
              <img src="../../assets/images/message_id.png" alt="">
              姓名：<el-input v-model="userName"></el-input>
            </div>
            <div class="parent_box">
              <div class="parent_message parent_phone">
                <img src="../../assets/images/message_phone.png" alt="">
                <el-input v-model="phone"></el-input>
              </div>
              <div class="parent_message parent_phone">
                <img src="../../assets/images/message_phone.png" alt="">
                <el-input v-model="sparePhone"></el-input>
              </div>
            </div>
            <div class="parent_message parent_address">
              <img src="../../assets/images/message_address.png" alt="">
              家庭住址：<el-input v-model="address"></el-input>
            </div>
            <div class="parentInfo_edit" @click="addUserInfo()">
              <img src="../../assets/images/message_edit.png" alt="">
              保存
            </div>

          </el-form>


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
        sparePhone: '',
        address: '',

        parentInfo: true
      }
    },
    components:{
      NavTitle
    },
    created(){
      var userMessage = JSON.parse(localStorage.getItem('userInfo'))
      this.userName = userMessage.nickname
      this.phone = userMessage.phone
      this.sparePhone = userMessage.sparePhone
      this.address = userMessage.homeAddress
      console.log(JSON.parse(localStorage.getItem('userInfo')));
    },
    methods: {
      addUserInfo(){
        var editUserInfo = JSON.parse(localStorage.getItem('userInfo'))
        editUserInfo.nickname = this.userName
        editUserInfo.phone = this.phone
        editUserInfo.sparePhone = this.sparePhone
        editUserInfo.homeAddress = this.address
        localStorage.setItem('userInfo', JSON.stringify(editUserInfo));

        console.log(JSON.parse(localStorage.getItem('userInfo')));

        console.log(this.userName)
        console.log(this.phone)
        console.log(this.sparePhone)
        console.log(this.address)

        this.parentInfo = true
        this.$message({
          message: '保存成功',
          type: 'success'
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
        .edit_content{
          /deep/.el-input{
            .el-input__inner{
              height: .5rem;
              line-height: .5rem;
              border: unset;
            }
          }
          .parent_name{
            /deep/.el-input{
              width: 5.2rem;
            }
          }
          .parent_box{
            .parent_message{
              width: 50%;
              &.parent_phone{
                /deep/.el-input__inner{
                  border: .01rem solid rgba(0,0,0,.5);
                  border-radius: .2rem;
                }

              }

              }
            }
          }
          .parent_address{
            /deep/.el-input{
              width: 5rem;
            }
          }
        }
        .parent_content,.edit_content{
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
            .parent_message{
              width: 50%;
            }
          }
          .parent_name{
            margin-right: .5rem;
            border-bottom: .01rem solid #999;
          }
          .parent_message{
            display: flex;
            align-items: center;
            margin-bottom: .3rem;
            &.parent_phone{
              >span{
                border: .01rem solid rgba(0,0,0,.5);
                border-radius: .2rem;
                padding: 0 .2rem;
                display: inline-flex;
                align-items: center;
                width: 100%;
              }
          }

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
</style>
