<template>
  <div class="guanzhu">
    <div class="content">
      <div v-for="(item,index) in findGz" :key="item.src" class="list">
        <img :src="item[0].src" alt="">
        <div class="list_right">
          <p>{{ item[0].title }}</p>
          <span>{{ item[0].content }}</span>
        </div>
        <span class="list_gz" @click="addFindGz(index)">+ 关注</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .guanzhu{
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
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.findGz)
  },
  computed: {
    ...mapState([
      'findGz'
    ])
  }
}
</script>