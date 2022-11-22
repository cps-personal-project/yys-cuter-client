<!--
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-11-04 18:52:32.947394
 * @Last Modified by: CPS
 * @Last Modified time: 2022-11-04 18:52:32.947394
 * @Filename images.vue
 * @Description: 浏览器同源并发测试
-->

<template lang="pug">
div(class='container')
  div(v-for='img in images', class='item')
    img(:src='img', alt='未加载')
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const images = ref<string[]>([]);
onMounted(() => {
  const imgCount = 200;
  for (let i = 0; i < imgCount; i++) {
    images.value.push(i.toString());
  }

  setTimeout(() => {
    for (let i = 0; i < imgCount; i++) {
      // 同源域名的图片，后缀添加一个随机数
      images.value[i] = `https://test-bucket-psd-tools.s3.amazonaws.com/output/${i}.jpg?number=${Math.random() + 1}`;
    }
  }, 5000);
});
</script>

<style lang="stylus" scoped>
.container {
  display flex
  flex-wrap wrap
}

.item {
  margin 2px
  width 70px
  height 70px
  border 1px solid red
}

</style>