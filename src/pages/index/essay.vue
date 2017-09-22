<template>
  <div id="essay">
    <transition name="tip">
      <div v-if="showTip" class="tip">
        {{ jokes.tip }}
      </div>
    </transition>
    <joke v-for="item in jokes.data" :key="item.display_time" :joke="item.group" :comments="item.comments"></joke>
  </div>
</template>

<style scoped>
#essay{
  background: #eee;
}
.tip{
  background: #f85e93;
  color: #fff;
  display: inline-block;
  padding:.5rem 2rem;
  border-radius: 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3rem;
}
.tip-enter-active{
  transition: .3s .5s;
}
.tip-enter{
  opacity: 0;
  transform: scale(.3);
}
.tip-leave-active{
  transition: .1s .5s;
}
.tip-leave-to{
  opacity: 0;
}
</style>

<script>
import joke from '@/commons/joke'
export default {
  props: ['refresh'],
  mounted () {
    this.getInfo()
  },
  data () {
    return {
      jokes: '',
      showTip: false
    }
  },
  components: {
    joke
  },
  watch: {
    'refresh': 'getInfo'
  },
  methods: {
    getInfo () {
      document.body.scrollTop = document.documentElement.scrollTop = 0
      this.showTip = true
      setTimeout(() => { this.showTip = false }, 800)
      this.$ajax({
        methods: 'get',
        baseURL: '/lf',
        url: 'neihan/stream/mix/v1/?content_type=-102'
      }).then((res) => {
        console.log('段子')
        console.log(res.data.data)
        this.jokes = res.data.data
      })
    }
  }
}
</script>