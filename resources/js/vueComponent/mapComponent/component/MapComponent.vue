
<script setup>
//  import  block code
import MapSideBarComponnet from "./MapSideBarComponnet.vue";
import {
  ref, onMounted,onUpdated ,defineAsyncComponent, reactive, toRefs, toRef, computed
} from "vue";
import { useAxios } from '@vueuse/integrations/useAxios'
import {mapStore} from "../store/MapStore";
import {config} from "../../../../config/MapConfig"

// const { data, isLoading, isFinished,   error} = useAxios('https://nhabe-hcm.thongtinquyhoach.vn/api/cong-trinh', { method: 'get' });
// Map block code
const map = ref();
let dataApi = ref(null);
const mapStores = mapStore()


onMounted(() => {
  map.value = L.map("mapContainer",config.mapOptions).setView(config.center, config.boundMap);
  L.tileLayer(config.layerTileGGMap).addTo(map.value);
  L.tileLayer(config.layerTileQHPK).addTo(map.value);
  map.value.on("click", click.bind());
});

function click(e) {
  mapStores.$state.mapCoordinates.Lat = e.latlng.lat;
  mapStores.$state.mapCoordinates.Lon = e.latlng.lng;
  fetchData();
}

async function fetchData() {
  console.log(mapStores.$state);
  return (mapStores.$state.planningData = await axios.post(
    "https://sqhkt-qlqh.tphcm.gov.vn/computing/930/api/v3.5/a-z/maqh/762",
    qs.stringify(mapStores.$state.mapCoordinates)
  ));
}

onUpdated(()=>{
  console.log("🚀 Log Here Bro:  mapStores.$state.value", mapStores.$state.planningData)

})

</script>

<template>
  <div>
    <map-side-bar-componnet
      v-if="map && dataApi"
      :map="map"
      :update-data="dataApi.data"
    ></map-side-bar-componnet>
    <div id="mapContainer"></div>
  </div>
</template>

<style >
#mapContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>