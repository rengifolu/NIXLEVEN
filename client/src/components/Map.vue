<template>
  <mdb-google-map ref="map"
    name="reg"
    class="col-md-12"
    :markerCoordinates="coordinates"
    style=" height: 500px"
    :zoom="14"
    v-if="mapLoaded"
  ></mdb-google-map>
</template>

<script>
import { mdbGoogleMap } from 'mdbvue'
export default {
  name: 'GoogleMapsPage',
  components: {
    mdbGoogleMap
  },
  data () {
    return {
      coordinates: [
        {
          latitude: 40.725118,
          longitude: -73.997699,
          title: 'New York'
        }
      ],
      mapLoaded: false
    }
  },
  mounted: function () {
    this.map = this.$refs.map.$mapObject
    this.$refs.map.$mapCreated.then(() => {
      this.mapLoaded = true
    })
  }
}
</script>
