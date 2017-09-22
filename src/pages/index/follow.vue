<template>
  <div id="follow">
    <h3>正在努力开发中···,预计10.15号之前完成</h3>
  </div>
</template>

<style scoped>
#follow{
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
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