<!--
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-11-06 14:04:15.473252
 * @Last Modified by: CPS
 * @Last Modified time: 2022-11-06 14:04:15.473252
 * @Filename IconFont.vue
-->

<template>
  <svg class="iconFont-svg" :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconClassName" :fill="props.color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import "@/assets/icons/iconfont.js";

// 入参
/**
 * @Description 这是一个iconfont的通用vue3组件，挂载到全局后，只需要输入对应的iconname即可生成icon
 * @example
 * ```html
 * <template>
 *   <IconFont iconName="crop"></IconFont>
 * </template>
 * ```
 */
const props = withDefaults(
  defineProps<{
    iconName: string;
    className?: string;
    color?: string;
    iconPrefix?: string;
  }>(),
  {
    className: "",
    color: "#409eff",
    iconPrefix: "icon-yys-",
  }
);

// 图标在 iconfont 中的名字
const iconClassName = computed(() => `#${props.iconPrefix}${props.iconName}`);

// 给图标添加上其他自定义类名，进行自定义样式
const svgClass = computed(() => `svg-icon ${props.className}`);
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}

.iconFont-svg {
  display: inline-block;
}
</style>
