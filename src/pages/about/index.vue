<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <hello-world></hello-world>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { Button } from 'vant';

Vue.use(Button);

export default {
  components: {
    HelloWorld
  }
}
</script>
