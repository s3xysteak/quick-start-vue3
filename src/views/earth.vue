<script setup>
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

const earth = ref(null)
onMounted(() => {
  const viewer = new Cesium.Viewer(earth.value)
})
</script>

<template>
  <div ref="earth" h-full w-full></div>
</template>
