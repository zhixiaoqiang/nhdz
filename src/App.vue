<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import footer from '@/commons/footer'
import rem from '../static/rem'
export default {
  name: 'app',
  data () {
    return {
      indexHeader: {}
    }
  },
  created () {
    // // 登录
    // this.$ajax({
    //   methods: 'get',
    //   baseURL: '/qdkj',
    //   url: '/login.php',
    //   params: {
    //     telp: '454',
    //     pwd: '33'
    //   }
    // }).then((res) => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    // // 注册
    // this.$ajax({
    //   methods: 'get',
    //   baseURL: '/qdkj',
    //   url: '/reg.php',
    //   params: {
    //     telp: '454',
    //     username: 'xx',
    //     pwd: '33'
    //   }
    // }).then((res) => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    // this.$ajax({
    //   methods: 'get',
    //   baseURL: '/iu',
    //   url: 'neihan/stream/mix/v1/'
    // }).then((res) => {
    //   console.log('视频/段友秀')
    //   console.log(res.data.data)
    // })
    // this.$ajax({
    //   methods: 'get',
    //   baseURL: '/lf',
    //   url: 'neihan/service/tabs/'
    // }).then((res) => {
    //   console.log('文本类型content_type')
    //   // this.indexHeader = res.data.data
    //   // this.nextTick(() => {
    //   // console.log(JSON.stringify(res))
    //   console.log(res.data.data)
    //   // this.getIndexNav(res.data.data)
    //   // })
    // })
    // this.$ajax({
    //   methods: 'get',
    //   baseURL: '/is',
    //   url: 'neihan/stream/mix/v1/'
    // }).then((res) => {
    //   console.log('段子/图片')
    //   console.log(res.data.data)
    // })
    // this.$ajax({
    //   methods: 'get',
    //   baseURL: '/zb',
    //   url: 'hotsoon/feed/'
    // }).then((res) => {
    //   console.log('直播')
    //   console.log(res.data.data)
    // })
  },
  mounted () {
    rem.adapt(640, 100)
    // this.getIndexNav()
  },
  components: {
    // headers: header,
    footers: footer
  },
  computed: {
    // indexNav () {
    // }
  },
  methods: {
    getIndexNav (arr) {
      console.log(arr)
      let arr1 = []
      for (let i = 0; i < arr.length; i++) {
        var a = {}
        a.name = arr[i].name
        a.url = arr[i].url
        a.list_id = arr[i].list_id
        a.type = arr[i].type
        arr1.push(a)
      }
      this.indexHeader = arr1
      console.log(arr1)
    }
  }
}
</script>

<style>
@import url('/static/normal.css');
*{
  padding: 0;
  margin:0;
  -webkit-tap-highlight-color: transparent;
}
#app {
  font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
body{
  font-size: 1rem;
  user-select:none;
  -webkit-appearance: none;
}
</style>
