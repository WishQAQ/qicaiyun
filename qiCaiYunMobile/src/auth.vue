<template>
  <div @click="getCode">auth测试</div>
</template>

<script>
  export default {
    name: 'auth',
    data() {
      return {
        getQueryString: '',
        winUrl: '',
        code: '',
        token: '',
        openId:'',
        userOpenId: '',
        userName: '',
        userSex: '',
        userAvatar: '',
        userInfo: {},
        userAA: ''
      }
    },
    methods:{
      mounted() {
        if (!window.localStorage.getItem('openId')) { // 如果缓存localStorage中没有微信openId，则需用code去后台获取
          this.getCode()
        } else {
          // 别的业务逻辑
          console.log('this.$route.query.code')
        }
      },

      getCode () { // 非静默授权，第一次有弹框
        this.code = ''
        var local = window.location.href // 获取页面url
        var appid = 'wx93702596c4a16d03'
        this.code = this.getUrlCode().code // 截取code
        if (this.code == null || this.code === '') { // 如果没有code，则去请求
          window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
        } else {
          // 存储code
          localStorage.setItem('code', this.code)
          this.$http.post('/login/getCode.action?code='+this.code)
            .then(res =>{
              this.token = res.data.data.access_token
              this.openId = res.data.data.openid
              // 判断openId

              if(this.openId !== null || this.openId !== ''){
                localStorage.setItem('token', this.token)
                localStorage.setItem('openId', this.openId)
                this.$http.post('/login/getUserxx.action?openid='+this.openId+'&access_token='+this.token)
                  .then(res =>{
                    console.log(res)
                    this.userOpenId = res.data.data.openid
                    this.userName = res.data.data.nickname
                    this.userSex = res.data.data.sex
                    this.userAvatar = res.data.data.headimgurl

                    // 后台存储的用户信息
                    this.$http.post('/login/loginByOpenid.action?openid='+this.openId)
                      .then(res=>{
                        console.log(res)
                        var userInfo = res.data.data
                        console.log(userInfo)
                        // 判断是否已有用户信息
                        if(res.data.code === 20013){
                          console.log('用户为空')
                          // 用户信息
                          let formData = new FormData();
                          formData.append('openid', this.userOpenId);
                          formData.append('nickname', this.userName);
                          formData.append('gender', this.userSex);
                          formData.append('avatarUrl', this.userAvatar);

                          this.$http.post('/parent/register.action',formData)
                            .then(res =>{
                              var userNewInfo = res.data.data
                              localStorage.setItem('userInfo', JSON.stringify(userNewInfo));

                              this.$router.push({
                                path: '/home/luckyWheel',
                                query: {}
                              });

                            })
                          // 已有用户信息进行下一步操作
                        }else if(res.data.code===20000){
                          console.log('已有用户')

                          localStorage.setItem('userInfo', JSON.stringify(userInfo));


                          this.$router.push({
                            path: '/home/index',
                            query: {}
                          });

                        }
                      })
                  })


              } else {
                this.getCode()
              }
            })






        }
      },
      // getToken() { // 非静默授权，第一次有弹框
      //   console.log(this.code)
      //   this.$http.get('/login/getCode.action'+'?code='+this.code)
      //     .then(res =>{
      //       console.log(res)
      //     })
      // },
      getUrlCode() { // 截取url中的code方法
        var url = window.location.search
        this.winUrl = url
        var theRequest = new Object()
        if (url.indexOf("?") != -1) {
          var str = url.substr(1)
          var strs = str.split("&")
          for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1])
          }
        }

        return theRequest

      }
    },

    created() {
      this.getCode()
      // this.getToken()
    }
  }
</script>

<style scoped lang="less">

</style>
