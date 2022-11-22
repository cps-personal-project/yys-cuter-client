<!--
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-05-16 17:52:46.174830
 * @Last Modified by: CPS
 * @Last Modified time: 2022-05-16 17:52:46.174830
 * @Filename ImgReader.vue
 * @Description: 功能描述
-->

<template lang="pug">
div(class='imgReader-container rounded-sm')
  header "ImageCuter"
  img(:src='src', alt='not img1')
</template>

<script setup lang="ts">
const src = ref("");
const imgStyle = reactive({
  backgroundImage: `url(${src})`,
});

// BUG:
const SUPER_IMG_EXT = ["png", "bmp", "gif", "jpg", "jpeg"];

onBeforeMount(() => init());

// TODO:
onMounted(() => {
  console.log("onMounted");
  nextTick(async () => {
    const body = await document.body;
    await onDrag(body);
  });
});

const init = (): void => {
  preventDefault();
};

/**
 *  @Description 阻止默认事件行为
 */
const preventDefault = (): void => {
  const events = ["drop", "dragover"];
  const defaultAction = (e: any): void => e.preventDefault();

  events.forEach(event =>
    document.addEventListener(event, defaultAction, false)
  );
};

const checkFile = (filePath?: string): boolean => {
  if (!filePath) return false;

  const ext = SUPER_IMG_EXT;
  const [baseName, extName] = filePath.split(".");
  const isExt = ext.includes(extName);

  console.log("isExt: ", baseName);
  if (isExt) return true;

  return false;
};

const onDrag = async (element?: HTMLElement | Document) => {
  if (!element) return;

  element.addEventListener("drop", (e: any) => {
    e.preventDefault();

    if (!e.dataTransfer) return;

    const files = e.dataTransfer.files;
    if (files && files.length >= 1) {
      const path = files[0].path;

      if (checkFile(path)) src.value = path;
      console.log("path: ", path);
    }
  });

  element.addEventListener("dragover", e => {
    e.preventDefault();
  });
};
</script>

<style lang="stylus" scoped>
.imgReader-container {
  @apply container max-w-lg mx-auto rounded-xl
  border 2px solid red

  img {
    @apply h-60
    -webkit-user-drag none
  }
}

</style>