<template>
  <div id="me_index">
    <!-- 点击登录 -->
    <login v-if="!login"></login>
    <div class="content">
      <!-- 登录后 -->
      <div class="login login_info" v-if="login">
        <div class="login_left">
          <img src="../../assets/svg/people.svg" alt="">
          <div>
            <span>{{ user.name }}</span>
            <p class="">个人主页</p>
          </div>
          
        </div>
        <div class="login_right">
          <img src="../../assets/svg/go.svg" alt="">
        </div>
      </div>
      <!-- 未登录 -->
      <div class="login unlogin_info" v-else>
        <div class="unlogin_left">
          <img src="../../assets/svg/people.svg" alt="">
          <span>立即登录</span>
        </div>
        <div class="unlogin_right">
          <img src="../../assets/svg/go.svg" alt="">
        </div>
      </div>
      <!-- 用户的关注等信息 -->
      <div class="user_info">
        <div>
          {{ user.guanzhu_count }}
          <p>关注</p>
        </div>
        <div>
          {{ user.fans_count }}
          <p>粉丝</p>
        </div>
        <div>
          {{ user.score }}
          <p>积分</p>
        </div>
      </div>
      <div class="footer">
        <div>
          <span>我的投稿</span>
          <img src="../../assets/svg/go.svg" alt="">
        </div>
        <div>
          <span>我的消息</span>
          <img src="../../assets/svg/go.svg" alt="">
        </div>
        <div>
          <span>我的收藏</span>
          <img src="../../assets/svg/go.svg" alt="">
        </div>
        <div>
          <span>我的直播</span>
          <img src="../../assets/svg/go.svg" alt="">
        </div>
        <div>
          <span>我的钱包</span>
          <img src="../../assets/svg/go.svg" alt="">
        </div>
        <div>
          <span>设置</span>
          <img src="../../assets/svg/go.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #me_index{
    padding:0 .6rem;
  }
  .login{
    display: flex;
    justify-content: space-between;
    padding:.5rem 0;
  }
  .login>div{
    display: flex;
    align-items: center;
    color: #f85e93;
    font-size: 1.5rem;
  }
  .login_info div{
    color: #000;
    font-size: 1.1rem;
  }
  .login_info p{
    font-size: .8rem;
    color: #999;
    padding: .1rem 0;
  }
  .login .unlogin_left img,.login .login_left img{
    width: 4rem;
  }
  .login .unlogin_right img,.login .login_right img{
    width: 2rem;
  }
  .user_info{
    display: flex;
    justify-content: space-around;
    padding: .5rem 0;
    border-top: 1px solid rgb(237, 237, 237);
    border-bottom: 1px solid rgb(237, 237, 237);
  }
  .user_info p{
    font-size: .8rem;
    color: #999;
  }
  .footer{
    padding:1rem 0;
    /*margin-bottom: 2.5rem;*/
  }
  .footer img{
    width: 2rem;
  }
  .footer div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:.5rem;
  }
</style>
<script>
import login from '@/commons/login'
export default {
  data () {
    return {
      login: true,
      user: {
        name: '我姓蒋',
        guanzhu_count: 0,
        fans_count: 0,
        score: 0
      }
    }
  },
  components: {
    login
  }
}
</script>