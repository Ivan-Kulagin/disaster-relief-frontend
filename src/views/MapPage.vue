<template>
  <div>
    <v-card height="60">
      <v-card-title>Карта бедствий</v-card-title>
    </v-card>
    <iframe :srcdoc="map"></iframe>
    <bottom-navigation :tab="1" />
  </div>
</template>

<script>
import htmlImport from "../assets/map.html";
import BottomNavigation from "@/modules/Navigation/BottomNavigation.vue";
import VolunteerService from "@/services/VolunteerService";

export default {
  name: "MapPage",
  components: { BottomNavigation },
  data() {
    return {
      map: null,
    };
  },
  methods: {
    getMap() {
      VolunteerService.getMap().then((res) => (this.map = res.data));
    },
  },
  mounted() {
    this.$store.getters.isMock ? (this.map = htmlImport) : this.getMap();
  },
};
</script>

<style scoped>
div {
  height: 100%;
  width: 100%;
}
iframe {
  display: block; /* iframes are inline by default */
  height: 100vh; /* Set height to 100% of the viewport height */
  width: 100vw; /* Set width to 100% of the viewport width */
  border: none; /* Remove default border */
  background: lightyellow; /* Just for styling */
}
</style>
