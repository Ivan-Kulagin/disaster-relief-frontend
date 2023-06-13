<template>
  <div>
    <v-stepper :value="step" alt-labels elevation="0">
      <v-stepper-header>
        <div v-for="item in steps" :key="item.step">
          <v-stepper-step :complete="step > item.step" :step="item.step">
            {{ item.title }}
          </v-stepper-step>
        </div>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="item in steps"
          :key="item.step"
          :step="item.step"
        >
          <v-card elevation="0">
            <v-card-title class="justify-center">
              {{ item.title }}
            </v-card-title>
            <v-img
              class="mx-auto"
              max-width="156"
              max-height="156"
              :src="
                item.imgFolder === 'victims'
                  ? require(`@/assets/${item.imgFolder}/${victimIcon}.png`)
                  : require(`@/assets/${item.imgFolder}/${
                      form[item.formItem]?.value
                    }.png`)
              "
            />
            <v-slider
              v-if="item.type === 'victims'"
              v-model="form[item.formItem]"
              thumb-label="always"
              :label="item.title"
              min="0"
              max="100"
              step="10"
              required
              class="mt-8"
            />
            <v-select
              v-else
              v-model="form[item.formItem]"
              :items="
                item.type === 'disasters'
                  ? disasterTypes
                  : injuriesByDisasterType
              "
              return-object
              item-text="text"
              item-value="value"
              :label="item.title"
              required
              outlined
              class="mt-4"
            />

            <v-card-actions>
              <v-btn v-if="step !== 1" text @click="step--">Назад</v-btn>
              <v-spacer />
              <v-btn v-if="step !== 3" color="primary" @click="step++"
                >Далее</v-btn
              >
              <v-btn v-else color="primary" @click="handleSubmit"
                >Отправить</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <bottom-navigation :tab="tab" />
  </div>
</template>

<script>
import { getDisasterTypes, getInjuriesByDisasterType } from "@/mock/ReportMock";
import BottomNavigation from "@/modules/Navigation/BottomNavigation.vue";

export default {
  name: "ReportPage",
  components: { BottomNavigation },
  data() {
    return {
      tab: 0,
      step: 1,
      steps: [
        {
          title: "Выберите тип бедствия",
          step: 1,
          formItem: "disasterType",
          imgFolder: "disasters",
          type: "disasters",
          itemsName: "injuriesByDisasterType",
        },
        {
          title: "Оцените количество жертв",
          step: 2,
          formItem: "numberOfVictims",
          imgFolder: "victims",
          type: "victims",
        },
        {
          title: "Выберите травмы",
          step: 3,
          formItem: "injuryTypes",
          imgFolder: "injuries",
          type: "injuries",
        },
      ],
      form: {
        disasterType: { value: "other" },
        numberOfVictims: 0,
        injuryType: { value: "default" },
      },
      disasterTypes: [],
      injuriesByDisasterType: [],
    };
  },
  watch: {
    "form.disasterType.value": function (newVal) {
      this.getInjuriesByDisasterType(newVal);
    },
  },
  methods: {
    getDisasterTypes() {
      this.disasterTypes = getDisasterTypes();
    },

    getInjuriesByDisasterType(value) {
      this.injuriesByDisasterType = getInjuriesByDisasterType(value);
    },

    handleSubmit() {
      let form = { ...this.form };
      console.log(form);
      this.$router.push({
        name: "report-confirm",
        params: { form },
      });
    },
  },
  computed: {
    victimIcon() {
      if (this.form.numberOfVictims >= 0 && this.form.numberOfVictims <= 25) {
        return "victims-less";
      } else if (
        this.form.numberOfVictims >= 26 &&
        this.form.numberOfVictims <= 50
      ) {
        return "victims-multiple";
      } else if (
        this.form.numberOfVictims >= 51 &&
        this.form.numberOfVictims <= 75
      ) {
        return "victims-group";
      } else {
        return "victims-crowd";
      }
    },
  },
  mounted() {
    console.log("mounted");
    this.getDisasterTypes();
    console.log("got types");
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
