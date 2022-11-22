<!--
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-02-14 06:05:24.812112
 * @Last Modified by: CPS
 * @Last Modified time: 2022-02-14 06:05:24.813058
 * @Filename layout
 * @Description: 功能描述
-->

<template>
  <layoutNav />
  <layoutMain />
</template>

<script setup lang="ts">
import layoutNav from "@/layout/aside/index.vue";
import layoutMain from "@/layout/Main.vue";
</script>

<style lang="stylus" scoped>
// @import 'background-switch'
html, body {
  width 100vw
  height 100vh
}

</style>