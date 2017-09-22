<template>
  <div id="find_index">
    <headers :navdata="findNav"></headers>
    <!-- {{ title }} -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
  #find_index{
    margin: 2.5rem 0 0;
    padding-bottom: 3.5rem;
    /*background: #eee;*/
  }
</style>
<script>
import header from '@/commons/header'
export default {
  data () {
    return {
      title: '发现',
      findNav: [
        {
          'double_col_mode': false,
          'umeng_event': 'huati',
          'is_default_tab': false,
          'list_id': -10001,
          'refresh_interval': 86400,
          'type': 3,
          'name': '话题',
          path: '/find'
        },
        {
          'double_col_mode': false,
          'umeng_event': 'guanzhu',
          'is_default_tab': true,
          'list_id': -101,
          'refresh_interval': 1800,
          'type': 1,
          'name': '关注',
          path: '/find/gz'
        }
      ]
    }
  },
  components: {
    headers: header
  }
}
</script>