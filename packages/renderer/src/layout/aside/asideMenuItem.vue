<!--
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-11-07 23:17:36.201746
 * @Last Modified by: CPS
 * @Last Modified time: 2022-11-07 23:17:36.201746
 * @Filename asideMenuItem.vue
 * @Description: 菜单的按钮列表部分，提取成组件复用
-->

<template>
  <section>
    <header class="py-2 mb-2 text-xs">{{ title }}</header>
    <ul
      class="mx-1 rounded-md whitespace-nowrap border-gray-500/10"
      :style="{ 'background-color': props.bgColor }"
    >
      <template v-for="item in props.menus" :key="item.name">
        <li
          class="menu-item relative flex flex-nowrap my-1 py-2 px-4 hover:bg-gray-200/[0.1] rounded-md cursor-pointer justify-between items-center"
        >
          <span class="flex items-center flex-nowrap">
            <IconFont class="mr-3 text-2xl" :iconName="item.icon"></IconFont>
            <span
              class="-translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              >{{ item.name }}</span
            >
          </span>

          <IconFont
            class="opacity-0 text-md group-hover:opacity-100"
            v-if="item.iconSub"
            :iconName="item.iconSub"
            color="green"
          ></IconFont>

          <div
            class="absolute w-1 h-full bg-red-400 rounded-sm opacity-0 menu-item-light -left-5"
          ></div>
        </li>
      </template>
    </ul>
  </section>
</template>

<script setup lang="ts">
interface menuItemsType {
  name: string;
  icon: string;
  iconSub?: string;
}

interface menuProps {
  title: string; // 菜单栏的名称
  menus?: menuItemsType[];
  bgColor?: string;
}

const props = withDefaults(defineProps<menuProps>(), {
  title: "插件库",
  bgColor: "",
  menus: () => [
    { name: "截图插件", icon: "crop", iconSub: "setting" },
    { name: "截图插件", icon: "crop", iconSub: "setting" },
    { name: "截图插件", icon: "crop", iconSub: "setting" },
  ],
});
</script>

<style lang="stylus">
.cps__layout-aside .menu-item:hover .menu-item-light {
  @apply opacity-90
}

</style>