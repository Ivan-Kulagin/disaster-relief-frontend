<template>
  <v-toolbar height="60">
    <v-icon color="success" class="mr-2">mdi-map-marker</v-icon>
    <div class="d-flex flex-column">
      <span class="text-caption">Lat: {{ $store.getters.coords.lat }}</span>
      <span class="text-caption">Lon: {{ $store.getters.coords.lon }}</span>
    </div>
    <v-spacer />
    <v-toolbar-title class="text-body-1">{{ roleName }}</v-toolbar-title>
    <v-btn icon @click="handleClick"
      ><v-icon
        :color="$store.getters.isVolunteer ? 'success' : 'primary'"
        class="mr-2"
        v-text="$store.getters.isVolunteer ? 'mdi-exit-to-app' : 'mdi-account'"
    /></v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "BottomNavigation",
  props: {},
  data() {
    return {
      tabs: [
        { title: "Обращение", icon: "mdi-fire", link: "/main" },
        { title: "Справочники", icon: "mdi-book", link: "/instructions" },
        {
          title: "Уведомления",
          icon: "mdi-bell",
          link: "/notifications",
          badge: true,
        },
      ],
    };
  },
  methods: {
    handleClick() {
      if (this.$store.getters.isVolunteer) {
        this.$store.dispatch("logout");
      } else {
        this.$router.push("/volunteer");
      }
    },
  },
  computed: {
    roleName() {
      return this.$store.getters.isVolunteer
        ? `${this.$store.getters.role.display} #${this.$store.getters.role.id}`
        : `${this.$store.getters.role.display}`;
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
