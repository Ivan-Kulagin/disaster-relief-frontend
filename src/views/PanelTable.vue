<template>
  <v-container>
    <h2 class="my-4">Поступившие обращения</h2>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Поиск обращений"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :items="map"
        :headers="mapHeaders"
        @click:row="handleRowClick"
      />
    </v-card>
    <bottom-navigation :tab="2" />
  </v-container>
</template>

<script>
import { getMapData, getMapHeaders } from "@/mock/MapMock";
import BottomNavigation from "@/modules/Navigation/BottomNavigation.vue";
import VolunteerService from "@/services/VolunteerService";
export default {
  name: "TableView",
  components: { BottomNavigation },
  data() {
    return {
      search: "",
      map: [],
      mapHeaders: [],
      report: [
        { disaster: "Пожар", victims: 80, injuries: "Ушибы, ожоги" },
        { disaster: "Пожар", victims: 120, injuries: "Переломы" },
        { disaster: "Пожар", victims: 100, injuries: "Переломы, сотрясения" },
        { disaster: "Пожар", victims: 120, injuries: "Отравления, ожоги" },
        { disaster: "Пожар", victims: 100, injuries: "Ожоги, ушибы, переломы" },
        { disaster: "Пожар", victims: 85, injuries: "Отравления, сотрясения" },
      ],
      reportHeaders: [
        { text: "Тип происшествия", value: "disaster" },
        { text: "Оценочное количество жертв", value: "victims" },
        { text: "Травмы", value: "injuries" },
      ],
    };
  },
  methods: {
    getData() {
      this.map = getMapData();
      this.mapHeaders = getMapHeaders();
    },
    handleRowClick() {
      this.$router.push("/panel/report");
    },
  },
  computed: {
    isMock() {
      return this.$store.getters.isMock;
    },
  },
  mounted() {
    if (this.isMock) {
      this.getData();
    } else {
      VolunteerService.getMapData().then(
        (res) => (this.map = res.data.emergencies)
      );
      this.mapHeaders = [
        { text: "Номер", value: "Number" },
        { text: "Имя", value: "Name" },
        { text: "Адрес", value: "Address" },
        { text: "Долгота", value: "Latitude" },
        { text: "Широта", value: "Longitude" },
        { text: "Радиус", value: "Dr_number" },
      ];
    }
  },
};
</script>

<style scoped></style>
