<template>
  <div id="login">
    <header>
      <img src="../assets/svg/back.svg" alt="">
      <span>登录</span>
    </header>
    <div class="login">
      <div class="login_telp">
        <img src="../assets/svg/phone.svg" alt="">
        <span>手机号</span>
      </div>
      <div class="login_weichat">
        <img src="../assets/svg/weichat.svg" alt="">
        <span>微信</span>
      </div>
      <div class="login_sina">
        <img src="../assets/svg/sina.svg" alt="">
        <span>新浪微博</span>
      </div>
      <div class="login_qq">
        <img src="../assets/svg/QQ.svg" alt="">
        <span>腾讯QQ</span>
      </div>
    </div>
    <footer>
      <input type="checkbox" name="cc" class="checked" :checked="isAgree">
      <span>我同意《内涵段子用户使用协议》</span>
    </footer>
  </div>
</template>

<style scoped>
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding:.5rem .5rem;
  }
  header span{
    display: inline-block;
    margin-left: 35%;
  }
  img{
    width: 1.5rem;
    height: 1.5rem;
  }
  .login{
    margin-top: 2.5rem;
  }
  .login div{
    display: flex;
    justify-content: flex-start;
    padding: .5rem .5rem;
    align-items: center;
  }
  .login div span{
    display: inline-block;
    margin-left: .5rem;
  }
  .login .login_telp{
    border-top: .5rem solid #f7f7f7;
    border-bottom: .5rem solid #f7f7f7;
  }
  .login div {
    border-bottom: 1px solid rgb(237, 237, 237);
  }
  footer {
    font-size: .8rem;
    color: #999;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  footer input{
    width: 1rem;
    height: 1rem;
    border: 1px solid #999;
    color: #999;
    outline: none;
  }
</style>
<script>
export default {
  data () {
    return {
      isAgree: true
    }
  }
}
</script>