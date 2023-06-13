<template>
  <div>
    <v-card elevation="0">
      <v-card-title
        ><v-btn icon @click="goBack"
          ><v-icon v-text="'mdi-arrow-right'" /></v-btn
      ></v-card-title>
      <v-divider />
      <v-card-title
        ><v-icon v-text="'mdi-fire'" color="orange" /><span class="ml-2">{{
          this.isMock ? "Первая помощь при ожогах" : instruction?.emergency
        }}</span></v-card-title
      >
      <v-divider />
      <v-card-text
        align="left"
        v-html="this.isMock ? instruction : instruction?.tip"
      >
      </v-card-text>
    </v-card>
    <bottom-navigation :tab="1" />
  </div>
</template>

<script>
import BottomNavigation from "@/modules/Navigation/BottomNavigation.vue";
import { instruction } from "@/mock/InstructionMock";
import InstructionsService from "@/services/InstructionsService";

export default {
  name: "InstructionView",
  components: { BottomNavigation },
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      instruction: null,
    };
  },
  methods: {
    goBack() {
      this.$store.commit("setPageTransition", "back");
      this.$router.go(-1);
    },
    getInstructions() {
      InstructionsService.getInstructions().then((res) => {
        this.instruction = res.data.tips;
      });
    },
  },
  computed: {
    isMock() {
      return this.$store.getters.isMock;
    },
  },

  async mounted() {
    if (this.isMock) {
      this.instruction = instruction;
    } else {
      await this.getInstructions();
    }
  },
};
</script>

<style scoped></style>
