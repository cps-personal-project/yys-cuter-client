<!--
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-11-09 21:14:28.130267
 * @Last Modified by: CPS
 * @Last Modified time: 2022-11-09 21:14:28.130267
 * @Filename asideSplitLine.vue
 * @Description: 功能描述
-->

<template lang="pug">
fieldset(style='border: 0', :style='{ "border-top": lineStyle }')
  legend(:style='{ padding: textPadding, textAlign: textAlign }') {{ text }}
</template>

<script setup lang="ts">
import { computed } from "vue";
/**
 * @param text          文字内容：
 * @param textAlign     文字位置： 行首|居中|行尾
 * @param lineStyle     线条样式： 实线|虚线
 * @param lineColor     线条颜色：
 * @param lineWidth     线条宽度：
 * @param direction     水平垂直：
 */
interface Props {
  text?: string;
  height?: string | number;
  textAlign?: string;
  lineStyle?: string; // 实线|虚线
  lineColor?: string;
  lineWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  height: 0,
  textAlign: "center",
  lineStyle: "solid",
  lineColor: "#666",
  lineWidth: "1.5px",
});

const lineStyle = computed(
  () => `${props.lineWidth} ${props.lineColor} ${props.lineStyle}`
);
const textPadding = computed(() =>
  props.text ? `${props.height} 10%` : `${props.height} 0`
);
const textAlign = computed(() => `${props.textAlign}`);
</script>
