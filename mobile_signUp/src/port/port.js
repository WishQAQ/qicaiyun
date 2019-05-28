export default {
  install(Vue,options)
  {
    //全局属性aiosx接口
    Vue.prototype.request = {
      axiosPort:'http://server.kooshua.com/',
      axiosApi:'api/',
      picUrl:'http://cdn.kooshua.com/', //图片返回地址
      upvote:'http://test.kslab.com/api/videos/upvote'   //视频点赞接口
    },
      //全局方法时间转换
      Vue.prototype.DateTime = function(Deadline){
        var timeSpanStr;
        if (Deadline <= 1000 * 60 * 1) {
          timeSpanStr = '刚刚';
        }
        else if (1000 * 60 * 1 < Deadline && Deadline <= 1000 * 60 * 60) {
          timeSpanStr = Math.round((Deadline / (1000 * 60))) + '分钟前';
        }
        else if (1000 * 60 * 60 * 1 < Deadline && Deadline <= 1000 * 60 * 60 * 24) {
          timeSpanStr = Math.round(Deadline / (1000 * 60 * 60)) + '小时前';
        }
        else if (1000 * 60 * 60 * 24 < Deadline && Deadline <= 1000 * 60 * 60 * 24 * 360) {
          timeSpanStr = Math.round(Deadline / (1000 * 60 * 60 * 24)) + '天前';
        }
        return timeSpanStr
      },
      //全局label_name关键词转换方法
      Vue.prototype.filtration = function(strings){
        if(strings != null){

          var arr = strings.split(',')
          console.log(arr)
          return arr
        }
      },
      //全局最后时间戳计算方法
      Vue.prototype.finalDate = function(abbreviationEnc){
        var auto = new Array;
        var DateTimen = new Date(abbreviationEnc.created_at)
        var ultimatelytTime = Number(new Date) - Date.parse(DateTimen)
        auto.push(ultimatelytTime)
        // console.log(auto)
        return auto
      },
      //全局点击跳转他人页面uid为用户uid，type用户类型 1用户 2商家
      Vue.prototype.RouterLinkOther = function(uid,type){
        if(type == undefined){
          this.HttpClient.post('/other/type',{
            uid:uid
          })
            .then((res) => {
              if(res.data.type == 1){
                this.$router.push({
                  path:'/home/others',
                  query:{
                    others:uid
                  }
                })
              }else{
                this.$router.push({
                  path:'/home/merchantHomePage',
                  query:{
                    others:uid
                  }
                })
              }
            })
        }else{
          if(type == 1){
            this.$router.push({
              path:'/home/others',
              query:{
                others:uid
              }
            })
          }else{
            this.$router.push({
              path:'/home/merchantHomePage',
              query:{
                others:uid
              }
            })
          }
        }



        return
      },
      //全局返回401登陆方法
      Vue.prototype.userIfStatus = function(err){
        if(err.response.data.status_code == "401"){
          this.$message({
            message: '唉哟，好像还没登陆哦！立刻登陆！',
            type: 'warning'
          });
        }else{
          return
        }
      },
      //全局用户提醒
      Vue.prototype.stipulateRemind = function(res){
        if(res.data.code == 200){
          this.$message({
            message: res.data.msg,
            type: 'success'
          });
        }else{
          this.$message.error(res.data.msg);
        }
        return
      }
  }
}
