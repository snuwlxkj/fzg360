<template>
  <div id="app">
		<transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
	components: {
	},
}
</script>

<style>
body{
  background-color: #f5f5f5;
}
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>
