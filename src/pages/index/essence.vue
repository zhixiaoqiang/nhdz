<template>
  <div id="essence">
    <div>
      <!-- {{ jokes.tip }} -->
    </div>
    <!-- <joke v-for="item in jokes.data" :key="item.display_time" :joke="item.group"></joke> -->
  </div>
</template>

<style scoped>
#essence{
  background: #eee;
}
</style>

<script>
import joke from '@/commons/joke'
export default {
  mounted () {
    this.$ajax({
      methods: 'get',
      baseURL: '/ic',
      url: 'neihan/in_app/essence_list/'
    }).then((res) => {
      console.log('精华')
      console.log(res)
      this.jokes = res.data
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