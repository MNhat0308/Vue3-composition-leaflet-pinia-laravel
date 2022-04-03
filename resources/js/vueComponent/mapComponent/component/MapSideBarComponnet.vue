<template>
  <div>
    <div id="sidebar" class="leaflet-sidebar collapsed">
      <!-- nav tabs -->
      <div class="leaflet-sidebar-tabs">
        <!-- top aligned tabs -->
        <ul role="tablist">
          
        </ul>
      </div>

      <!-- panel content -->
      <div class="leaflet-sidebar-content">
        
      </div>
    </div>
  </div>
</template>

<script setup>
import "leaflet-sidebar-v2/css/leaflet-sidebar.css";
import "leaflet-sidebar-v2/js/leaflet-sidebar.js";
import { InformationCircleIcon } from "@heroicons/vue/solid";
import { ref, onMounted, onBeforeUpdate,onUpdated, customRef } from "vue";
const props = defineProps({
  map: Object,
  updateData:Object,
});
let sidebar = ref();
//map
onMounted(() => {
   sidebar.value = L.control
    .sidebar({ container: "sidebar" ,position:'left'})
    .addTo(props.map);
const parse=JSON.parse(props.updateData.ThongTinChung);
console.log(parse);
const dsttdoan=JSON.parse(parse.dsttdoan[0].qhpkranh_geom).coordinates
let geojsonFeature = {
    "type": "Feature",
    "properties": {
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": dsttdoan
    }
};
L.geoJSON(geojsonFeature).addTo(props.map);
sidebar.value.addPanel({
    id: 'home',                    
    tab: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>`, 
    pane: customData(parse),        
    position: 'top',
    autopan:false
});
  sidebar.value.open('home');
});
// onBeforeUpdate(()=>{
//   console.log(props.updateData);
// });
onUpdated(()=>{
  console.log(sidebar.value);
  sidebar.value.close();
  sidebar.value.open('home');
  sidebar.value.on('opening', function(e) {
    
    console.log("🚀 Log Here Bro:", e.target._panes[0].innerHTML=customData(JSON.parse(props.updateData.ThongTinChung)))
  })
});
//side bar

function customData(data){
  return `
  Quận: ${data.tenquanhuyen}
  Phường xã: ${data.tenphuongxa}
  Mã thửa đất: ${data.mathuadat}
  Số tờ: ${data.soto} 
  Số Thửa: ${data.sothua}
  Diện tích : ${data.dientich}
  Tên đồ án: ${data.dsttdoan[0].tendoan}
  Cơ quan phê duyệt:${data.dsttdoan[0].coquanpd}
  Số quyết định:${data.dsttdoan[0].soqd}
  Ngày quyết định:${data.dsttdoan[0].ngayduyet}
  `
}
</script>

<style>
</style>