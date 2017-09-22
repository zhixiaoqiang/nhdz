<template>
  <div id="swiper" v-on="{
    mouseout: autoPlay,
    mousemove: clearI,
    touchstart: touchS,
    touchmove: touchM,
    touchend: touchE
  }">
    <ul class="swiper_wrap">
      <transition-group :name="fx" mode="out-in" tag="p">
        <li
          v-for="(item,index) in imgData"
          :key="item.src"
          v-show="index == curIndex">
          <img :src="item.src" alt="" class="swiper_img">
        </li>
      </transition-group>
      <img :src="imgData[0].src" alt="" class="swiper_img swiper_img1">
      <div class="swiper_footer">
        <p>{{ imgData[curIndex].text }}</p>
        <div>
          <span v-for="index in imgData.length" :class="{on: (index-1) == curIndex }" class="swiper_num"></span>
        </div>
      </div>
    </ul>
  </div>
</template>

<style>
  #swiper{
    width: 100%;
    overflow:hidden;
    position: relative;
  }
  .swiper_wrap li{
    position: absolute;
    width: 100%;
    list-style:none;
    float: left;
  }
  .swiper_img{
    width: 100%;
    vertical-align: middle;
  }
  .swiper_img1{
    opacity: 0;
  }
  .swiper_footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem .5rem;
    box-sizing: border-box;
    color: #fff;
    width: 100%;
    background: rgba(0,0,0,0.4);
    position: absolute;
    bottom: 0;
  }
  .swiper_footer .swiper_num{
    width: .6rem;
    height: .6rem;
    border-radius: 50%;
    background: rgba(255,255,255,0.8);
    display:inline-block;
    margin:0 .2rem;
  }
  .swiper_footer .swiper_num.on{
    background: #ffae4b;
  }
  .next-enter-active,.next-leave-active,.prev-enter-active,.prev-leave-active{
    transition: 1s;
  }
  .next-enter,.prev-leave-to{
    transform: translateX(100%);
  }
  .prev-enter,.next-leave-to{
    transform: translateX(-100%);
  }
</style>

<script>
export default {
  props: ['imgData'],
  data () {
    return {
      curIndex: 0,
      fx: 'next',
      timer: '',
      point: {}
    }
  },
  mounted () {
    this.autoPlay()
  },
  methods: {
    next () {
      this.fx = 'next'
      if (this.curIndex < this.imgData.length - 1) {
        this.curIndex++
      } else {
        this.curIndex = 0
      }
    },
    prev () {
      this.fx = 'prev'
      if (this.curIndex > 0) {
        this.curIndex--
      } else {
        this.curIndex = this.imgData.length - 1
      }
    },
    autoPlay () {
      this.timer = setInterval(() => {
        this.next()
      }, 3000)
    },
    clearI () {
      clearInterval(this.timer)
    },
    touchS (e) {
      this.clearI()
      var tt = e.targetTouches[0]
      this.point.start = tt.clientX
      this.point.end = 'px'
    },
    touchM (e) {
      e.preventDefault()
      var tt = e.targetTouches[0]
      if (this.point.end) {
        this.point.end = tt.clientX
      } else {
        return
      }
    },
    touchE (e) {
      var distand = this.point.end - this.point.start
      if (distand < -10) {
        this.next()
      } else if (distand > 10) {
        this.fx = 'prev'
        this.prev()
      }
      this.autoPlay()
      this.point = {}
    }
  }
}
</script>