<template>
  <div class="joke" v-if="isremove">
    <header>
      <div class="joke_h">
        <div>
          <img class="joke_userimg" :src="joke.user.avatar_url" alt="">
          <span class="joke_username">{{ joke.user.name }}</span>
        </div>
        <p @click="isremove = false">X</p>
      </div>
      <div class="joke_c">
        <span class="joke_c_huati">#{{ joke.category_name }}#</span>
        <span class="joke_c_content">{{ joke.content }}</span>
      </div>
    </header>
    <div class="middle middle_pic" v-if="joke.media_type == 1">
      <div class="" >
        <!-- <img v-for="pic in joke.large_image.url_list" :src="pic.url" alt=""> -->
        <img :src="joke.large_image.url_list[0].url" width="100%">
      </div>
    </div>
    <!-- gif图 -->
    <div class="middle middle_gif" v-if="joke.media_type == 2">
      <div class="" @click="joke.is_gif = !joke.is_gif">
        <!-- <img v-for="pic in joke.large_image_image.url_list[0]" :src="pic.url" alt=""> -->
        <img src="../assets/svg/gif.svg" v-show="joke.is_gif" class="icon_gif">
        <img
          :src="joke.middle_image.url_list[0].url"
          v-if="joke.is_gif"
          width="100%">
        <img
          :src="joke.large_image.url_list[0].url"
          v-else
          width="100%">
      </div>
    </div>
    <!-- 视频 -->
    <div class="middle middle_video" v-if="joke.media_type == 3">
      <div class="" @click="joke.is_video = !joke.is_video">
        <img src="../assets/svg/play.svg" class="icon_video" v-show='joke.is_video'>
        <img :src="joke.medium_cover.url_list[0].url" alt="" width="100%">
        <video autobuffer autoloop controls v-if="!joke.is_video">
          <source :src="joke.mp4_url">
          <!-- <object type="video/ogg" data="/media/video.oga" width="320" height="240">
          <param name="src" value="/media/video.oga">
          <param name="autoplay" value="false">
          <param name="autoStart" value="0">
          <p><a href="/media/video.oga">Download this video file.</a></p>
          </object> -->
        </video>
      </div>
    </div>
    
    <!-- 神评 -->
    <div class="hot_comment" v-if="comments.length">
      <div v-for="item in comments" class="hot_comment_c" :key="item.avatar_url">
        <div class="hot_comment_c_h">
          <div class="hot_comment_c_h_left">
            <img :src="item.avatar_url"><span>{{ item.user_name }}</span>
          </div>
          <div class="hot_comment_c_h_right">
            <div @click="item.is_digg = 1">
              <img src="../assets/svg/dzOn.svg" alt="" v-if="item.is_digg">
              <img src="../assets/svg/dz.svg" alt="" v-else>
              <span>{{ item.digg_count + item.is_digg }}</span>
            </div>
            <div class="footer_right">
              <img src="../assets/svg/zf.svg" alt="" class="first">
              <img src="../assets/svg/zfOn.svg" alt="" class="scoend">
            </div>
          </div>
        </div>
        <div class="hot_comment_c_f">
          {{ item.text }}
        </div>
      </div>
    </div>
    <footer>
      <div class="footer_left">
        <div @click="clickZan">
          <img src="../assets/svg/dzOn.svg" alt="" v-if="isZan">
          <img src="../assets/svg/dz.svg" alt="" v-else>
          <span>{{ getZan }}</span>
        </div>
        <div @click="clickCai">
          <img src="../assets/svg/dcOn.svg" v-if="isCai">
          <img src="../assets/svg/dc.svg" v-else>
          <span>{{ getCai }}</span>
        </div>
        <div class="info">
          <img src="../assets/svg/info.svg" alt="" class="first">
          <img src="../assets/svg/infoOn.svg" alt="" class="scoend">
          <span>{{ joke.comment_count }}</span>
        </div>
      </div>
      <div class="footer_right">
        <img src="../assets/svg/zf.svg" alt="" class="first">
        <img src="../assets/svg/zfOn.svg" alt="" class="scoend">
        <span>{{ joke.share_count }}</span>
      </div>
    </footer>
    <!-- 已赞或已踩 -->
    <transition name="zoc">
      <span v-if="isZan && showInfo" class="total">你已赞过</span>
      <span v-if="isCai && showInfo" class="total">你已踩过</span>
    </transition>
  </div>
</template>

<style scoped>
  .joke{
    margin-bottom: .5rem;
    background: #fff;
  }
  header{
    padding: 0 1rem;
  }
  .total{
    background: rgba(0,0,0,.8);
    display: inline-block;
    position: fixed;
    padding: 1rem 2rem;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
  }
  .joke_h{
    display: flex;
    justify-content: space-between;
    padding:.5rem 0;
    align-items: center;
  }
  .joke_h .joke_userimg{
    width: 2rem;
    border-radius: 50%;
    vertical-align: middle;
  }
  .joke_h .joke_username{
    display: inline-block;
    padding-left: .5rem;
    color: #9a9797;
    vertical-align: middle;
  }
  .joke_c{
    text-align: left;
    font-size: 1.2rem;
    padding-bottom: .5rem;
  }
  .joke_c .joke_c_huati{
    color: #f85e93;
  }
  .middle img{
    margin: .5rem 0 .3rem;
  }
  .middle_gif div,.middle_video div{
    position: relative;
  }
  .middle_gif .icon_gif, .middle_video .icon_video{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4rem;
    height: 4rem;
    transform: translate(-50%,-50%);
  }
  .hot_comment{
    padding: 0 .5rem .5rem;
  }
  .hot_comment .hot_comment_c{
    width: 100%;
    box-sizing: border-box;
    padding: .5rem;
    background: #f7f7f7;
    display: inline-block;
    color: #595555;
    border-radius: .2rem;
    vertical-align: middle;
  }
  .hot_comment .hot_comment_c_h,.hot_comment_c_h_right, .hot_comment div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    line-height: 1.5rem;
  }
  .hot_comment .hot_comment_c_h{
    padding-bottom: .5rem; 
  }
  .hot_comment_c_h span{
    display: inline-block;
    padding: 0 .5rem;
  }
  .hot_comment img{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    vertical-align: middle;
  }
  .hot_comment .hot_comment_c_h_left img{
    width: 2rem;
    height: 2rem;
  }
  footer{
    padding:0 1rem .5rem;
    display: flex;
    justify-content: space-between;
  }
  footer span {
    padding-left: .5rem;
  }
  .footer_left,.footer_right{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer_left div{
    display: flex;
    align-items: center;
    padding: 0 .5rem;
  }
  .footer_left img{
    width: 1.5rem;
  }
  .zoc-enter-active{
    transition: .3s;
    z-index:9;
  }
  .zoc-leave-active{
    transition: .1s .3s;
    z-index:9;
  }
  .zoc-enter{
    opacity: 0;
    top: 55%;
  }
  .zoc-leave-to{
    opacity: 0;
  }
  .info:active .first,.footer_right:active .first{
    display: none;
  }
  .info .scoend,.footer_right .scoend{
    display: none;
  }
  .info:active .scoend,.footer_right:active .scoend{
    display: block;
  }
</style>

<script>
export default {
  props: ['joke', 'comments'],
  created () {
    console.log(this.joke)
  },
  data () {
    return {
      isZan: false,
      isCai: false,
      isFX: false,
      isReport: false,
      showInfo: false,
      isremove: true
    }
  },
  methods: {
    clickZan () {
      if (this.isCai || this.isZan) {
        this.showInfo = true
        setTimeout(() => {
          this.showInfo = false
        }, 300)
      } else {
        this.isZan = true
      }
    },
    clickCai () {
      if (this.isZan || this.isCai) {
        this.showInfo = true
        setTimeout(() => {
          this.showInfo = false
        }, 300)
      } else {
        this.isCai = true
      }
    }
  },
  computed: {
    getZan () {
      if (this.isZan) {
        return this.joke.digg_count + 1
      } else {
        return this.joke.digg_count
      }
    },
    getCai () {
      if (this.isCai) {
        return this.joke.bury_count + 1
      } else {
        return this.joke.bury_count
      }
    }
  }
}
</script>