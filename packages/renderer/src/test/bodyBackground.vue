<!--
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-02-14 06:05:24.812112
 * @Last Modified by: CPS
 * @Last Modified time: 2022-02-14 06:05:24.813058
 * @Filename bodyBackground.vue
 * @Description: 功能描述
-->

<template lang="pug">
.body-background-container 123455555555555
</template>

<script>
export default {
  methods: {
    colors: function () {
      return [
        ["110deg", "#FF1D1D", "#F628D7", "#D139EC", "#5800FF", "#028CFF", "#00FB9D", "#00FF0F"],
        // ["217deg", "rgba(255,0,0,.8)", "rgba(255,0,0,0) 70.33%"],
        // ["127deg", "rgba(0,255,0,.8)", "rgba(0,255,0,0) 70.33%"],
        // ["336deg", "rgba(0,0,255,.8)", "rgba(0,0,255,0) 70.33%"]
      ];
    },
  },

  mounted() {
    console.log("color1: ", this.colors);
    console.log("background2: ", this.background);
  },
};
</script>

<style lang="stylus">
body
  background-color #1DACF1
  // background-image linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)

</style>