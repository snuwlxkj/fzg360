<template>
  <div class="home">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
  
</template>

<script>
import Vue from 'vue';
import { Search, Tabbar, TabbarItem } from 'vant';

Vue.use(Search).use(Tabbar).use(TabbarItem);

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return {
      active:0,
      value:'2'
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    onSearch(){

    },
    onCancel(){

    }
  }
}
</script>
