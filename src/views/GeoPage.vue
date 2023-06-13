<template>
  <div class="ma-4">
    <h2 v-if="loading">Разрешите доступ к вашему местоположению</h2>
    <h2 v-else>Получен доступ к вашему местоположению</h2>
    <v-icon
      x-large
      :color="loading ? 'error' : 'success'"
      v-text="'mdi-map-marker'"
    />
    <br />
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
      class="mt-10"
    />
    <div v-else>
      <p>Ваши координаты:</p>
      <v-text-field label="Широта" disabled :value="coordinates.latitude" />
      <v-text-field label="Долгота" disabled :value="coordinates.longitude" />
      <v-text-field label="Адрес" disabled :value="address" />
    </div>
  </div>
</template>

<script>
import { Geolocation } from "@capacitor/geolocation";
import axios from "axios";

export default {
  name: "GeoPage",
  data() {
    return {
      loading: true,
      coordinates: null,
      address: null,
    };
  },
  watch: {
    loading() {
      this.redirect();
    },
  },
  methods: {
    redirect() {
      setTimeout(() => this.$router.push("/main"), 500);
    },
  },
  async mounted() {
    const { coords } = await Geolocation.getCurrentPosition();
    const { latitude, longitude } = coords;
    this.coordinates = { latitude, longitude };
    const { data } = await axios.get(
      `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`
    );
    this.address = data.display_name;
    this.$store.commit("setCoords", {
      lat: latitude,
      lon: longitude,
      addr: data.display_name,
    });
    this.loading = false;
  },
};
</script>

<style scoped></style>
