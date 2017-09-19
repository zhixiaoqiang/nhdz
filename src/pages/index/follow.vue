<template>
  <div id="follow">
    <div>
      {{ jokes.tip }}
    </div>
    <joke v-for="item in jokes.data" :key="item.display_time" :joke="item.group"></joke>
  </div>
</template>

<style scoped>
#follow{
  background: #eee;
}
</style>

<script>
import joke from '@/commons/joke'
export default {
  mounted () {
    this.$ajax({
      methods: 'get',
      baseURL: '/lf',
      url: 'neihan/dongtai/dongtai_list/v1/'
    }).then((res) => {
      console.log('关注')
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