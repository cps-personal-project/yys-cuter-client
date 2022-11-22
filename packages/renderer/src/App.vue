<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Layout from "@/layout/index.vue";
import { onMounted } from "vue";
export default defineComponent({
  components: { Layout },
  setup() {
    onMounted(() => {
      console.log("app onMounted !2");
    });
  },
});
</script>

<template>
  <Layout />
</template>

<style lang="stylus">
body, html, div, span, p {
  margin 0
  padding 0
  box-sizing border-box
}

#app {
  display flex
}

/* .icon {
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  overflow hidden
} */

</style>