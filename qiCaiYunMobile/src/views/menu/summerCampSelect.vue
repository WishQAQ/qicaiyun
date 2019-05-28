<template>
  <div class="summerCampSelect">
    <div class="main">
      <div class="cover">
        <img src="../../assets/images/summerCamp_photo.png" alt="">
        <span class="summerCampPrice">&yen; 4500</span>
      </div>

      <div class="message">
        <div class="message_content">
          <div class="title">重庆航空夏令营</div>
          <div class="content">
            让“航空梦”播种在每一个孩子的心中实施科教兴国战略和人才强国战略、提高全民素质，体验科学魅力，启迪创新思想。
          </div>
        </div>
        <div class="message_box">
          <div class="time">
            <p>第一期：7月1日-5日</p>
            <p>第二期：7月15日-19日</p>
          </div>
          <div class="more">更多详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "summerCampSelect"
  }
</script>

<style scoped lang="less">
  .summerCampSelect{
    padding: 0 .25rem;
    .main{
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:not(:last-child){
        margin-bottom: .22rem;
      }
      &:nth-child(3n+1){
        .title{
          color:rgba(114,155,198,1);
        }
      }
      &:nth-child(3n+2){
        .title{
          color:rgba(186,139,55,1);
        }
      }
      &:nth-child(3n+3){
        .title{
          color:rgba(79,116,64,1);
        }
      }

      .cover{
        width:3.14rem;
        height:2.09rem;
        border-radius: .1rem;
        overflow: hidden;
        position: relative;
        >img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .summerCampPrice{
          height: .36rem;
          background:rgba(255,255,255,.5);
          border-radius: .1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .2rem;
          font-family:PingFang-SC-Bold;
          font-weight:bold;
          color:rgba(248,18,14,1);
          position: absolute;
          right: 0;
          top: 0;
          padding: 0 .2rem;
        }
      }
      .message{
        width: 3.23rem;
        height: 2.09rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .message_content{
          .title{
            font-size: .28rem;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            /*color:rgba(114,155,198,1);*/
            margin-bottom: .15rem;
          }
          .content{
            font-size: .16rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(153,153,153,1);
            text-align: justify;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
        }

        .message_box{
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .time{
          font-size: .12rem;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(153,153,153,1);
          p{
            display: flex;
            align-items: center;
            &:not(:last-child){
              margin-bottom: .1rem;
            }
            &::before{
              content: '';
              margin-right: .08rem;
              width: .08rem;
              height: .08rem;
              background:rgba(247,85,82,1);
              border-radius:50%;
            }
          }
        }
        .more{
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 .06rem;
          height: .28rem;
          background:rgba(247,85,82,1);
          border-radius: .1rem;
          font-size: .16rem;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
        }
      }
    }



  }
</style>
