<template>
  <div class="huati">
    <swiper :imgData="imgData"></swiper>
    <div class="content">
      <div v-for="(item,index) in unfindGz" :key="item.src" class="list">
        <img :src="item.src" alt="">
        <div class="list_right">
          <p>{{ item.title }}</p>
          <span>{{ item.content }}</span>
        </div>
        <span class="list_gz" @click="addFindGz(index)">+ 关注</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .content{
    padding: .5rem;
  }
  .list{
    padding: .5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
  .list img{
    width: 2rem;
    border-radius: .5rem;
    flex:1;
  }
  .list_right{
    padding: 0 .5rem;
    flex: 5;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .list_right span{
    font-size: .8em;
    color: #666;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-top:.5rem; 
  }
  .list_gz{
    display: inline-block;
    font-size: .8em;
    font-weight: bold;
    color: #f85e93;
    padding: .25rem;
    border: 1px solid #f85e93;
    border-radius: .2rem;
  }
</style>

<script>
import swiper from '@/commons/swiper'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      imgData: [
        {
          src: require('@/assets/banner1.jpg'),
          text: '免费'
        },
        {
          src: require('@/assets/banner2.jpg'),
          text: '收费'
        },
        {
          src: require('@/assets/banner3.jpg'),
          text: '收收'
        },
        {
          src: require('@/assets/banner4.jpg'),
          text: '费费'
        },
        {
          src: require('@/assets/banner5.jpg'),
          text: '收费费'
        }
      ],
      lists: [
        {
          src: require('@/assets/gz1.png'),
          title: '内涵段子',
          content: 'IPhone8要8000块 qq好友总共有1000个 如果每个人愿意给我8块的话 那他们岂不是脑子有病？'
        },
        {
          src: require('@/assets/gz2.jpg'),
          title: '滑稽',
          content: '我有个朋友才写小说一个月，就赚了38万。我问他怎么赚的？他说把男主写死了，女主被人先奸后杀。他被读者打断了腿，对方赔的。'
        },
        {
          src: require('@/assets/gz3.jpg'),
          title: '头像',
          content: '跟妹子亲热，她羞羞地说：“请把你的手放在离我心最近的地方……”我看了看妹子的胸，应该离心很远，只好耿直地把手放在了她的后背上……'
        },
        {
          src: require('@/assets/gz4.jpg'),
          title: '动漫',
          content: '士兵:“营长，我想回家看看我媳妇，”营长:“不行你才来一年还不能离队。”士兵:“营长，我老婆三个月前怀孕了。”营长沉默了一会道:“准了，你看一个连够不够？”'
        },
        {
          src: require('@/assets/gz1.png'),
          title: '内涵段子',
          content: '今天我怀着发泄的心情去嫖娼，然后！到那女的连叫都不叫，躺在那跟跟死人一样，口都不给口，亲都不给亲，我有句妈卖批不知道当讲不当讲'
        },
        {
          src: require('@/assets/gz2.jpg'),
          title: '滑稽',
          content: '一人说一句违心的话，看谁的最扎心'
        },
        {
          src: require('@/assets/gz3.jpg'),
          title: '头像',
          content: '一人说一句违心的话，看谁的最扎心'
        },
        {
          src: require('@/assets/gz4.jpg'),
          title: '动漫',
          content: '在连续剧里你这种人活不过两级。'
        }
      ]
    }
  },
  components: {
    swiper
  },
  methods: {
    addFindGz (index) {
      // let data = this.unfindGz.splice(index, 1)
      // console.log(data[0])
      this.$store.commit('addFindGz', index)
    }
  },
  computed: {
    ...mapState([
      'unfindGz'
    ])
  }
}
</script>