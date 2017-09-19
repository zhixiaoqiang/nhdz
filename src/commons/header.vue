<template>
  <div id="header">
    <div class="header_c">
      <router-link
        v-for="item in navdata"
        :to="item.path"
        tag="p"
        class="header_nav"
        :key="item.umeng_event"
      >
        <span>{{ item.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  #header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: .1rem 0;
    box-shadow: 0 0px 2px rgba(0,0,0,0.2);
    color: #ccc;
    font-size: 1.2rem;
    background: #fff;
    z-index: 3;
  }
  #header .header_c::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
  #header .header_c{
    overflow: auto;
    word-break:keep-all;
    white-space:nowrap;
  }
  #header .header_nav{
    display: inline-block;
    padding: .5rem;
    position: relative;
  }
  #header .header_nav.on{
    color: #000;
  }
  .router-link-exact-active{
    color: #000;
  }
  .router-link-exact-active span:after{
    content: '';
    width: 26%;
    position: absolute;
    bottom: 10%;
    height: .2rem;
    left: 36%;
    background: #f85e93;
    border-radius: 50px;
  }
  #header .header_nav span{
    display: inline-block;
    /*padding: .1rem;*/
  }
</style>

<script>
export default {
  props: ['navdata'],
  data () {
    return {
      nav: []
    }
  }
}
</script>
