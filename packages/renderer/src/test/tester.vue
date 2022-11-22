<!--
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-02-21 18:59:15.180214
 * @Last Modified by: CPS
 * @Last Modified time: 2022-02-21 18:59:15.180214
 * @Filename test.vue
 * @Description: 功能描述
-->

<template lang="pug">
.parent
  .children
</template>

<style lang="stylus">
@import './centers.styl'

.parent
  border 3px red solid
  width 100vw
  height 100vh

  transform-center-parent()

.children
  width 30vw
  height 15vh
  border 3px yellow solid

  transform-center-children()

</style>