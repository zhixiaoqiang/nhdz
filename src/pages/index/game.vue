<template>
  <div id="game" :style="{height:innerHeight+'px'}">
    <iframe src="http://localhost:8586/ic/game/game_hall?app_source=essay_android" frameborder="0" ></iframe>
  </div>
</template>

<style scoped>
#game{
  background: #eee;
}
iframe{
  width: 100%;
  height: 100%;
}
</style>

<script>
import joke from '@/commons/joke'
export default {
  created () {
    this.innerHeight = window.innerHeight
    console.log(window.innerHeight)
    // this.$ajax({
    //   methods: 'get',
    //   baseURL: '/ic',
    //   url: 'game/game_hall?app_source=essay_android'
    // }).then((res) => {
    //   console.log('游戏')
    //   console.log(res)
    //   // this.jokes = res.data.data
    // })
  },
  data () {
    return {
      innerHeight: '',
      jokes: ''
    }
  },
  components: {
    joke
  }
}
</script>