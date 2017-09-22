<template>
  <div id="essence">
      <h3>正在努力开发中···,预计10.15号之前完成</h3>
  </div>
</template>

<style scoped>
#essence{
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
      jokes: '',
      showTip: false
    }
  },
  components: {
    joke
  }
}
</script>