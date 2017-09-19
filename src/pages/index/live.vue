<template>
  <div id="live">
    <div>
      {{ jokes.tip }}
    </div>
    <joke v-for="item in jokes.data" :key="item.display_time" :joke="item.group"></joke>
  </div>
</template>

<style scoped>
#live{
  background: #eee;
}
</style>

<script>
import joke from '@/commons/joke'
export default {
  mounted () {
    this.$ajax({
      methods: 'get',
      baseURL: '/zb',
      url: 'hotsoon/feed/'
    }).then((res) => {
      console.log('直播')
      console.log(res.data.data)
      this.jokes = res.data.data
    })
  },
  data () {
    return {
      jokes: ''
    }
  },
  components: {
    joke
  }
}
</script>