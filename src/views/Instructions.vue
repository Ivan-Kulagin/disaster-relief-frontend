<template>
  <div>
    <v-card elevation="0">
      <v-card-title>Справочная информация</v-card-title>
      <v-divider />
      <v-list>
        <div
          v-for="instruction in instructionsList"
          :key="isMock ? instruction.title : instruction.id"
        >
          <v-list-item
            :key="isMock ? instruction.title : instruction.id"
            align="left"
            link
            :to="{ path: `/instruction/${instruction.id}`, props: true }"
          >
            <v-list-item-avatar>
              <v-icon color="primary">{{
                isMock ? instruction.icon : "mdi-fire"
              }}</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                v-text="isMock ? instruction.title : instruction.emergency"
              ></v-list-item-title>

              <v-list-item-subtitle
                v-text="isMock ? instruction.subtitle : instruction.tip"
              ></v-list-item-subtitle>
              <v-divider />
            </v-list-item-content>
          </v-list-item>
          <v-divider />
        </div>
      </v-list>
    </v-card>
    <bottom-navigation :tab="1" />
  </div>
</template>

<script>
import BottomNavigation from "@/modules/Navigation/BottomNavigation.vue";
import InstructionsService from "@/services/InstructionsService";
import { instructionsList } from "@/mock/InstructionMock";

export default {
  name: "InstructionsView",
  components: { BottomNavigation },
  data() {
    return {
      instructionsList: [],
    };
  },
  methods: {
    getInstructions() {
      InstructionsService.getInstructions().then(
        (res) => (this.instructionsList = [res.data.tips])
      );
    },
  },
  computed: {
    isMock() {
      return this.$store.getters.isMock;
    },
  },
  mounted() {
    if (this.isMock) {
      this.instructionsList = instructionsList;
    } else {
      this.getInstructions();
    }
  },
};
</script>

<style scoped></style>
