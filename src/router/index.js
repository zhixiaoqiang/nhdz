import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Index from '~~/index'
// 首页-关注
import follow from '~~/index/follow'
// 首页-推荐
import recommend from '~~/index/recommend'
// 首页-视频
import video from '~~/index/video'
// 首页-直播
import live from '~~/index/live'
// 首页-图片
import pic from '~~/index/pic'
// 首页-段子
import essay from '~~/index/essay'
// 首页-精华
import essence from '~~/index/essence'
// 首页-游戏
import game from '~~/index/game'
// 首页-同城
import local from '~~/index/local'

// 发现
import FindIndex from '~~/find'

// 段友秀
import FriendsShow from '~~/friendsShow'

// 我的
import Me from '~~/me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '',
          name: 'recommend',
          component: recommend
        },
        {
          path: 'follow',
          name: 'follow',
          component: follow
        },
        {
          path: 'video',
          name: 'video',
          component: video
        },
        {
          path: 'live',
          name: 'live',
          component: live
        },
        {
          path: 'pic',
          name: 'pic',
          component: pic
        },
        {
          path: 'essay',
          name: 'essay',
          component: essay
        },
        {
          path: 'essence',
          name: 'essence',
          component: essence
        },
        {
          path: 'game',
          name: 'game',
          component: game
        },
        {
          path: 'local',
          name: 'local',
          component: local
        }
      ]
    },
    {
      path: '/find',
      name: 'Find',
      component: FindIndex
    },
    {
      path: '/friendshow',
      name: 'FriendShow',
      component: FriendsShow
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
