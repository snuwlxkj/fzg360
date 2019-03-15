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
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return {
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
