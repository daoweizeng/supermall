<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-else><slot name="icon-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  data(){
    return{
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) !==-1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  props:{
    link:{
      type:String,
      required:true
    },
    activeColor:{
      type:String,
      default:'red'
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.link)
    }
  }
}
</script>

<style>
  #tab-bar-item {
    flex: 1;
  }

  .item-icon, .item-active-icon{
    display: inline-block;
  }

  .item-icon img, .item-active-icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
  
</style>