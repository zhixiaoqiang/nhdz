<template>
  <div id="footer">
    <router-link
      v-for="(item,index) in nav"
      :key="item.title"
      @click.native="showOn(index)"
      :to="item.url"
      tag="p"
      >
        <img :class="{ add : item.only }" :src="item.icon" alt="" v-show="!item.checked">
        <img :class="{ add : item.only }" :src="item.iconOn" alt="" v-show="item.checked">
        <span v-show="!item.only">{{ item.title }}</span>
      </router-link>
  </div>
</template>

<style scoped>
  img{
    width: 32px;
    height: 32px;
  }
  #footer{
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -1px 0 rgba(0,0,0,.1);
    font-size: .7rem;
    background: #fff;
    z-index: 3;
  }
  #footer p{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: .3rem 0;
  }
  .add{
    padding:2px 3px;
    border-radius: 3px;
    background:#f85e93;
  }
</style>

<script>
export default {
  created () {
    // this.$router.push('/')
  },
  mounted () {
    let pathArr = this.$route.path.split('/')
    for (let i in this.nav) {
      if (pathArr.indexOf(this.nav[i].path) === 1) {
        this.nav[i].checked = true
      } else if (pathArr[1] === '' || pathArr[1] === 'index') {
        this.nav[0].checked = true
      } else {
        this.nav[i].checked = false
      }
    }
  },
  data () {
    return {
      nav: [
        {
          path: 'index',
          title: '首页',
          icon: require('@/assets/svg/homepage.svg'),
          iconOn: require('@/assets/svg/homepage_fill.svg'),
          url: '/',
          checked: true
        },
        {
          path: 'friendshow',
          title: '段友秀',
          icon: require('@/assets/svg/workbench.svg'),
          iconOn: require('@/assets/svg/workbench_fill.svg'),
          url: '/friendshow',
          checked: false
        },
        {
          icon: require('@/assets/svg/add.svg'),
          iconOn: require('@/assets/svg/add.svg'),
          checked: false,
          url: '',
          only: true
        },
        {
          path: 'find',
          title: '发现',
          icon: require('@/assets/svg/search.svg'),
          iconOn: require('@/assets/svg/search_fill.svg'),
          url: '/find',
          checked: false
        },
        {
          path: 'me',
          title: '我的',
          icon: require('@/assets/svg/people.svg'),
          iconOn: require('@/assets/svg/people_fill.svg'),
          url: '/me',
          checked: false
        }
      ]
    }
  },
  methods: {
    showOn (index) {
      if (!this.nav[index].only) {
        for (let i in this.nav) {
          this.nav[i].checked = false
        }
        this.nav[index].checked = true
      }
    }
  }
}
</script>