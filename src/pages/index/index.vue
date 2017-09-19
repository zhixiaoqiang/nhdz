<template>
  <div id='index_index'>
    <!-- {{ title }} -->
    <headers :navdata="indexNav"></headers>
    <div class="index_index_c">
      <router-view :refresh="isrefresh"></router-view>
    </div>
    <div class="refresh" @click="refresh" :class="{ refreshOn: isrefresh }">
      <img src="../../assets/svg/refresh.svg" alt="">
    </div>
  </div>
</template>

<style scoped>
.index_index_c{
  margin: 3rem 0 0;
  padding-bottom: 3.5rem;
  background: #eee;
}
.refresh{
  position: fixed;
  bottom: 10%;
  right: 5%;
  background: #fff;
  border-radius: 50%;
  padding:.2rem;
}
.refresh img{
  width: 2.5rem;
}
.refreshOn{
  transform: rotate(720deg);
  transition: all 1s;
}
</style>
<script>
import header from '@/commons/header'
export default {
  created () {
    this.$ajax({
      methods: 'get',
      baseURL: '/lf',
      url: 'neihan/service/tabs/'
    }).then((res) => {
      console.log('文本类型content_type')
      // this.indexHeader = res.data.data
      if (res.data.data) {
        this.getIndexNav(res.data.data)
      } else {
        console.log('请求失败，请重新请求')
      }
    })
  },
  data () {
    return {
      isrefresh: false,
      // indexNav: [
      //   {
      //     list_id: -101,
      //     name: '推荐',
      //     type: 1,
      //     url: 'http://lf.snssdk.com/neihan/stream/mix/v1/?content_type=-101'
      //   },
      // ],
      indexNav: [
        {
          'double_col_mode': false,
          'umeng_event': 'follow',
          'is_default_tab': false,
          'baseURl': '/lf',
          'url': 'neihan/dongtai/dongtai_list/v1/',
          'list_id': -10001,
          'refresh_interval': 86400,
          'type': 3,
          'name': '关注',
          path: { name: 'follow' }
        },
        {
          'double_col_mode': false,
          'umeng_event': 'recommend',
          'is_default_tab': true,
          'baseURL': '/lf',
          'url': 'neihan/stream/mix/v1/?content_type=-101',
          'list_id': -101,
          'refresh_interval': 1800,
          'type': 1,
          'name': '推荐',
          path: '/index'
        },
        {
          'double_col_mode': false,
          'umeng_event': 'video',
          'is_default_tab': false,
          'baseURL': '/lf',
          'url': 'stream/mix/v1/?content_type=-104',
          'list_id': -104,
          'refresh_interval': 1800,
          'type': 1,
          'name': '视频',
          path: { name: 'video' }
        },
        {
          'double_col_mode': false,
          'umeng_event': 'live',
          'is_default_tab': false,
          'baseURL': '/zb',
          'url': 'hotsoon/feed/',
          'list_id': -10002,
          'refresh_interval': 300,
          'type': 6,
          'name': '直播',
          path: { name: 'live' }
        },
        {
          'double_col_mode': false,
          'umeng_event': 'pic',
          'is_default_tab': false,
          'baseURL': '/lf',
          'url': 'neihan/stream/mix/v1/?content_type=-103',
          'list_id': -103,
          'refresh_interval': 1800,
          'type': 1,
          'name': '图片',
          path: { name: 'pic' }
        },
        {
          'double_col_mode': false,
          'umeng_event': 'essay',
          'is_default_tab': false,
          'baseURL': '/lf',
          'url': 'neihan/stream/mix/v1/?content_type=-102',
          'list_id': -102,
          'refresh_interval': 1800,
          'type': 1,
          'name': '段子',
          path: { name: 'essay' }
        },
        {
          'double_col_mode': false,
          'umeng_event': 'essence',
          'is_default_tab': false,
          'baseURL': '/ic',
          'url': 'neihan/in_app/essence_list/',
          'list_id': -20002,
          'refresh_interval': 1800,
          'type': 4,
          'name': '精华',
          path: { name: 'essence' }
        },
        // {
        //   'double_col_mode': false,
        //   'umeng_event': 'subscription',
        //   'is_default_tab': false,
        //   'baseURL': '/lf',
        //   'url': 'neihan/in_app/mybar_list/',
        //   'list_id': -20001,
        //   'refresh_interval': 1800,
        //   'type': 4,
        //   'name': '订阅',
        //   path: '/index'
        // },
        // {
        //   'double_col_mode': false,
        //   'umeng_event': 'local',
        //   'is_default_tab': false,
        //   'baseURL': '/lf',
        //   'url': 'stream/mix/v1/?content_type=-201',
        //   'list_id': -201,
        //   'refresh_interval': 1800,
        //   'type': 5,
        //   'name': '同城',
        //   path: '/index'
        // },
        {
          'double_col_mode': false,
          'umeng_event': 'game',
          'is_default_tab': false,
          'baseURL': '/ic',
          'url': 'game/game_hall?app_source=essay_android',
          'list_id': -20003,
          'refresh_interval': 1800,
          'type': 4,
          'name': '游戏',
          path: { name: 'game' }
        }
      ]
    }
  },
  components: {
    headers: header
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
      // console.log(arr1)
    },
    refresh () {
      this.isrefresh = true
      setTimeout(() => {
        this.isrefresh = false
      }, 500)
    }
  }
}
</script>