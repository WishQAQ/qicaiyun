<template>
  <div class="container">
    <div class="lucky-wheel">
      <div class="wheel-main">
        <div class="wheel-pointer-box">
          <div class="wheel-pointer" @click="rotate_handle()" :style="{transform:rotate_angle_pointer,transition:rotate_transition_pointer}"></div>
        </div>
        <div class="wheel-bg" :style="{transform:rotate_angle,transition:rotate_transition}">
          <div class="prize-list">
            <div class="prize-item" v-for="(item,index) in prize_list" :key="index">
              <div class="prize-pic">
                <img :src="item.icon">
              </div>
              <div class="prize-count" v-if="item.count">
                {{item.count}}
              </div>
              <div class="prize-type">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toast" v-show="toast_control">
      <div class="toast-container">
        <img :src="toast_pictrue" class="toast-picture">
        <div class="close" @click="close_toast()"></div>
        <div class="toast-title">
          {{toast_title}}
        </div>
        <div class="toast-btn">
          <div class="toast-cancel"  @click="close_toast">关闭</div>
        </div>
      </div>
    </div>
    <div class="toast-mask" v-show="toast_control"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        easejoy_bean: 0, //金豆
        lottery_ticket: 0, //抽奖次数
        prize_list: [
          {
            icon: "../../assets/img/bean_500.png", // 奖品图片
            count: 10, // 奖品数量
            name: "易趣豆", // 奖品名称
            isPrize: 1 // 该奖项是否为奖品
          },
          {
            icon: "../../assets/img/bean_five.png",
            count: 5,
            name: "豆",
            isPrize: 1
          },
          {
            icon: "../../assets/img/bean_one.png",
            count: 10,
            name: "易趣豆",
            isPrize: 1
          },
          {
            icon: "../../assets/img/point_five.png",
            count: 5,
            name: "积分",
            isPrize: 1
          },
          {
            icon: "../../assets/img/point_ten.png",
            count: 10,
            name: "积分",
            isPrize: 1
          },
          {
            icon: "../../assets/img/bean_500.png",
            count: 10,
            name: "易趣豆",
            isPrize: 1
          },
          {
            icon: "../../assets/img/give_up.png",
            count: 0,
            name: "未中奖",
            isPrize: 0
          },
          {
            icon: "../../assets/img/bean_500.png",
            count: 10,
            name: "易趣豆",
            isPrize: 1
          }
        ], //奖品列表
        toast_control: false, //抽奖结果弹出框控制器
        hasPrize: false, //是否中奖
        start_rotating_degree: 0, //初始旋转角度
        rotate_angle: 0, //将要旋转的角度
        start_rotating_degree_pointer: 0, //指针初始旋转角度
        rotate_angle_pointer: 0, //指针将要旋转的度数
        rotate_transition: "transform 6s ease-in-out", //初始化选中的过度属性控制
        rotate_transition_pointer: "transform 12s ease-in-out", //初始化指针过度属性控制
        click_flag: true, //是否可以旋转抽奖
        index: 0
      };
    },
    created() {
      this.init_prize_list();
    },
    computed: {
      toast_title() {
        return this.hasPrize
          ? "恭喜您，获得" +this.prize_list[this.index].count + ' ' + this.prize_list[this.index].name
          : "未中奖";
      },
      toast_pictrue() {
        return this.hasPrize
          ? "/static/img/congratulation.png"
          : "/static/img/sorry.png";
      }
    },
    methods: {
      //此方法为处理奖品数据
      init_prize_list(list) {},
      rotate_handle() {
        this.index = 1 //指定每次旋转到的奖品下标
        this.rotating();
      },
      rotating() {
        if (!this.click_flag) return;
        var type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
        var during_time = 5; // 默认为1s
        var random = Math.floor(Math.random() * 7);
        var result_index = this.index ; // 最终要旋转到哪一块，对应prize_list的下标
        var result_angle = [337.5, 292.5, 247.5, 202.5, 157.5, 112.5, 67.5, 22.5]; //最终会旋转到下标的位置所需要的度数
        var rand_circle = 6; // 附加多转几圈，2-3
        this.click_flag = false; // 旋转结束前，不允许再次触发
        if (type == 0) {
          // 转动盘子
          var rotate_angle =
            this.start_rotating_degree +
            rand_circle * 360 +
            result_angle[result_index] -
            this.start_rotating_degree % 360;
          this.start_rotating_degree = rotate_angle;
          this.rotate_angle = "rotate(" + rotate_angle + "deg)";
          // // //转动指针
          // this.rotate_angle_pointer = "rotate("+this.start_rotating_degree_pointer + 360*rand_circle+"deg)";
          // this.start_rotating_degree_pointer =360*rand_circle;
          var that = this;
          // 旋转结束后，允许再次触发
          setTimeout(function() {
            that.click_flag = true;
            that.game_over();
          }, during_time * 1000 + 1500); // 延时，保证转盘转完
        } else {
          //
        }
      },
      game_over() {
        this.toast_control = true;
        this.hasPrize = this.prize_list[this.index].isPrize
      },
      //关闭弹窗
      close_toast() {
        this.toast_control = false;
      }
    }
  };
</script>
<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
  .lucky-wheel {
    height: 100%;
    width: 100%;
    background: rgb(252, 207, 133) url("/static/images/wheel_background.png") no-repeat
    top center;
    background-size: cover;
  }
  .wheel-main {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 5rem;
  }
  .wheel-bg {
    width: 6rem;
    height: 6rem;
    background: url("/static/img/draw_wheel.png") no-repeat center top;
    background-size: 100%;
    color: #fff;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    transition: transform 3s ease;
  }
  .wheel-pointer-box {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -60%);
    width: 3rem;
    height: 3rem;
  }
  .wheel-pointer {
    width: 3rem;
    height: 3rem;
    background: url("/static/img/draw_btn.png") no-repeat center top;
    background-size: 100%;
    transform-origin: center 60%;
  }
  .wheel-bg div {
    text-align: center;
  }
  .prize-list {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .prize-list .prize-item {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .prize-list .prize-item:first-child {
    top: .3rem;
    left: 3.2rem;
    transform: rotate(20deg);
  }
  .prize-list .prize-item:nth-child(2) {
    top: 1.4rem;
    left: 4.2rem;
    transform: rotate(67deg);
  }
  .prize-list .prize-item:nth-child(3) {
    top: 2.6rem;
    left: 4.2rem;
    transform: rotate(-250deg);
  }
  .prize-list .prize-item:nth-child(4) {
    top: 3.6rem;
    left: 3.3rem;
    transform: rotate(-210deg);
  }
  .prize-list .prize-item:nth-child(5) {
    top: 3.6rem;
    left: 1.85rem;
    transform: rotate(-160deg);
  }
  .prize-list .prize-item:nth-child(6) {
    top: 2.7rem;
    left: .9rem;
    transform: rotate(-111deg);
  }
  .prize-list .prize-item:nth-child(7) {
    top: 1.4rem;
    left: 1.2rem;
    transform: rotate(-69deg);
  }
  .prize-list .prize-item:nth-child(8) {
    top: .3rem;
    left: 1.8rem;
    transform: rotate(-20deg);
  }
  .prize-item {
    width: 1rem;
    height: 2rem;
  }

  .prize-pic img {
    width: .7rem;
    height: .5rem;
    margin-top: .2rem;
  }
  .prize-count {
    font-size: 0.3rem;
  }
  .prize-type {
    font-size: .2rem;
  }
  .toast-mask {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10000;
    width: 100%;
    height: 100%;
  }
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 20000;
    transform: translate(-50%, -50%);
    width: 5rem;
    border-radius: 0.2rem;
    padding: 0.2rem;
    background-color: rgb(252, 244, 224);
  }
  .toast-container {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px dotted #fccc6e;
  }
  .toast-picture {
    position: absolute;
    top: -1.5rem;
    left: .5rem;
    width: 3.75rem;
    height: 2rem;
  }
  .toast-title {
    padding: 1rem 0;
    font-size: .18rem;
    color: #fc7939;
    text-align: center;
  }
  .toast-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.9375rem;
  }
  .toast-btn div {
    background-image: -moz-linear-gradient(
      -18deg,
      rgb(242, 148, 85) 0%,
      rgb(252, 124, 88) 51%,
      rgb(252, 124, 88) 99%
    );

    background-image: -ms-linear-gradient(
      -18deg,
      rgb(242, 148, 85) 0%,
      rgb(252, 124, 88) 51%,
      rgb(252, 124, 88) 99%
    );
    background-image: -webkit-linear-gradient(
      -18deg,
      rgb(242, 148, 85) 0%,
      rgb(252, 124, 88) 51%,
      rgb(252, 124, 88) 99%
    );
    box-shadow: 0px 4px 0px 0px rgba(174, 34, 5, 0.7);
    width: 2.6875rem;
    height: 0.875rem;
    border-radius: 0.875rem;
    text-align: center;
    line-height: 0.875rem;
    color: #fff;
  }
  .close {
    position: absolute;
    top: -0.5rem;
    right: -.5rem;
    width: .5rem;
    height: .5rem;
    background: url("/static/img/close_store.png") no-repeat center top;
    background-size: 100%;
  }
</style>

