<template>
  <v-container>
    <v-stepper elevation="0">
      <v-stepper-header>
        <v-stepper-step complete :color="success ? 'success' : 'primary'" />
        <v-divider />
        <v-stepper-step complete :color="success ? 'success' : 'primary'" />
        <v-divider />
        <v-stepper-step complete :color="success ? 'success' : 'primary'" />
      </v-stepper-header>
    </v-stepper>
    <div class="mt-1">
      <v-icon size="64" :color="success ? 'success' : 'primary'"
        >mdi-text-box-outline</v-icon
      >
      <v-card-title class="justify-center">{{
        success ? `Ваше обращение отправлено` : "Подтвердите ваше обращение"
      }}</v-card-title>
      <v-btn v-if="success" block color="primary" @click="$router.push('/main')"
        >На главную</v-btn
      >
    </div>
    <v-form v-if="!success">
      <v-text-field
        label="Широта"
        disabled
        readonly
        :value="$store.getters.coords.lat"
      />
      <v-text-field
        label="Долгота"
        disabled
        readonly
        :value="$store.getters.coords.lon"
      />
      <v-text-field
        label="Тип бедствия"
        readonly
        :value="form.disasterType.text"
      />
      <v-text-field
        label="Количество жертв"
        readonly
        :value="form.numberOfVictims"
      />
      <v-text-field label="Травмы" readonly :value="form.injuryTypes.text" />
      <v-btn block color="primary" @click="confirm" :loading="loading"
        >Подтвердить</v-btn
      >
    </v-form>
    <v-bottom-navigation
      shift
      :value="tab"
      color="primary"
      horizontal
      fixed
      grow
    >
      <v-btn>
        <span>Report</span>

        <v-icon>mdi-fire</v-icon>
      </v-btn>

      <v-btn>
        <span>Instructions</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Notifications</span>

        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
import * as ReportService from "@/services/ReportService";

export default {
  name: "ReportConfirm",
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tab: 0,
      success: false,
      loading: false,
    };
  },
  methods: {
    confirm() {
      this.loading = true;
      const reportData = {
        lat: this.$store.getters.coords.lat,
        lon: this.$store.getters.coords.lon,
        addr: this.$store.getters.coords.addr,
      };
      // const reportData = {
      //   lat: 55.752717090205586,
      //   lon: 37.62925802387109,
      //   addr: "ул. Варварка, 10, Москва, 109012",
      // };
      ReportService.report(reportData)
        .then((res) => {
          console.log(res);
          this.loading = false;
          this.success = true;
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .v-btn__content {
    .v-icon {
      margin-right: 0 !important;
    }
  }
}
</style>
