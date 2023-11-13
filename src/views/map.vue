<script setup>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  const map = L.map('mapContainer', {
    crs: L.CRS.EPSG4326,
    minZoom: 12
  }).setView([35.645, 119.725], 13)

  L.tileLayer('http://192.168.2.111:9876/{z}/{x}/{y}.png', {
    zoomOffset: 1,
    maxNativeZoom: 15
  }).addTo(map)

  geoJsonLayer.addTo(map)
})

const geoJsonFileArray = [
  ['extent', '#989999'],
  [
    '2Ddt',
    {
      消防站: '#ff0000',
      化工类企业: '#f8cdba',
      公用工程企业: '#9ad6e1',
      铁路物流园项目: '#ffff01',
      飞和雪地车: '#ffff01',
      中法水务: '#A4D2DC',
      新奥门站: '#A4D2DC',
      停车场: '#A4D2DC',
      orange: '#ffd79a',
      grey: '#d9ecf0',
      white: '#ffffff'
    }
  ],
  ['water', '#75CFFF'],
  ['road', '#989999'],
  ['whiteline', 'white'],
  ['YQpolyline', 'red'],
  [
    'GLpolyline',
    {
      钢厂路两侧支廊管架: '#ffff00',
      钢厂路管廊架: '#16468d',
      化工管廊架: '#ff9800',
      金能管廊架: '#000',
      规划七八路管廊架: '#d45333'
    },
    {
      钢厂路两侧支廊管架: 5,
      钢厂路管廊架: 8,
      化工管廊架: 5,
      金能管廊架: 5,
      规划七八路管廊架: 2
    }
  ],
  ['wyh', 'red']
]

const geoJsonLayer = L.geoJSON(undefined, {
  style(feature) {
    const { properties } = feature
    const { type, name, color, width } = properties

    const generateStyle = ({ color, width, name }) => ({
      color: color ?? '#F7CEBA',
      fillColor: color ?? '#F7CEBA'
    })

    return generateStyle({
      color: typeof color === 'string' ? color : color[type] ?? color[name],
      width: width?.[name],
      name
    })
  }
})

async function addGeoJson(geoJson, index) {
  const [url, color, width] = geoJson

  const response = await fetch(`/geojson/${url}.json`)
  const res = await response.json()

  geoJsonLayer.addData({
    ...res,
    features: res.features.map(item => ({
      ...item,
      properties: {
        ...item.properties,
        color,
        width
      }
    }))
  })
}

geoJsonFileArray.forEach(item => {
  addGeoJson(item)
})
</script>

<template>
  <div id="mapContainer" h-full w-full></div>
</template>
