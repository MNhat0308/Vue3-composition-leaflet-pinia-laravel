require('./bootstrap');

import "leaflet/dist/leaflet.css"
import L from "leaflet";
import map from './vueComponent/mapComponent/render/MapRenderView.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
createApp(map).use(createPinia()).mount("#app")