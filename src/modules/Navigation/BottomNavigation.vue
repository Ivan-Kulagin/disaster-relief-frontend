<template>
  <v-bottom-navigation
    shift
    :value="tab"
    color="primary"
    horizontal
    fixed
    grow
    class="mx-0"
  >
    <v-btn
      v-for="item in tabs"
      :key="item.title"
      @click="$router.push(item.link)"
    >
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNavigation",
  props: {
    tab: {
      type: Number,
      required: true,
    },
  },
  computed: {
    tabs() {
      if (this.$store.getters.isVolunteer) {
        return [
          { title: "Обращения", icon: "mdi-fire", link: "/main" },
          { title: "Карта", icon: "mdi-map", link: "/map" },
          {
            title: "Отчёты",
            icon: "mdi-chart-box-outline",
            link: "/panel/table",
          },
        ];
      } else {
        return [
          { title: "Обращения", icon: "mdi-fire", link: "/main" },
          { title: "Справочники", icon: "mdi-book", link: "/instructions" },
          {
            title: "Уведомления",
            icon: "mdi-bell",
            link: "/notifications",
            badge: true,
          },
        ];
      }
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
