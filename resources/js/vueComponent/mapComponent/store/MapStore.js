
import {reactive} from 'vue'
import { defineStore } from 'pinia'

export const mapStore = defineStore('map_leaflet', {
  state: () => {
    return {
      mapCoordinates: reactive({Lat: null, Lon: null}),
      planningData:reactive(null)

    }
  },

  getters: {
    getQHPKData: function(state) {
      return state.planningData;
    }
  },

  actions: {
    // async fetchNewArrivals() {
    //   this.fetching = true;
    //   const response = await fetch('/data/new-arrivals.json');
    //   try {
    //     const result = await response.json();
    //     this.newArrivals = result.books;
    //   } catch (err) {
    //     this.newArrivals = [];
    //     console.error('Error loading new arrivals:', err);
    //     return err;
    //   }

    //   this.fetching = false;
    // }
  }
})
