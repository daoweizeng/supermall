<template>
  <div id="nav-home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name:'Home',
  components:{
    NavBar
  }
}
</script>

<style>
  .nav-bar{
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>