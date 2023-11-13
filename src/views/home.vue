<script setup>
import router from '@/router'

const paneList = [
  ['welcome', 'Welcome'],
  ['earth', 'Cesium'],
  ['map', 'Leaflet']
]
const activeKey = ref(router.currentRoute.value.name)

function onTabChange(activeKey) {
  router.push({ name: activeKey })
}
</script>

<template>
  <a-tabs @change="onTabChange" v-model:activeKey="activeKey">
    <a-tab-pane v-for="i in paneList" :key="i[0]" :tab="i[1]"></a-tab-pane>
  </a-tabs>
  <div h-90vh>
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component"></component>
      </KeepAlive>
    </router-view>
  </div>
</template>

<style scoped>
:deep(.ant-tabs-nav-wrap) {
  justify-content: center;
}
</style>
