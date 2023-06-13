<template>
  <div>
    <top-navigation />

    <v-container>
      <img class="mx-auto img" src="../assets/report_disaster.png" alt="" />
      <p class="mt-3 body-1">
        Если вы столкнулись с бедствием, используйте кнопку "Сообщить о
        происшествии" для создания обращения и предоставления какой-либо
        известной вам важной информации. Мы зарегистрируем обращение и
        предоставим помощь в ближайшее время.
        <!--        If you have encountered a disaster, please use the "Report a disaster"-->
        <!--        button to create an appeal and provide any important information you may-->
        <!--        have. We will register the incident and provide assistance to you as-->
        <!--        soon as possible.-->
      </p>
      <v-btn block x-large class="mt-3" color="primary" to="/report">
        Сообщить о происшествии
        <!--        Report a Disaster-->
      </v-btn>
    </v-container>

    <bottom-navigation :tab="tab" />
  </div>
</template>

<script>
import BottomNavigation from "@/modules/Navigation/BottomNavigation.vue";
import TopNavigation from "@/modules/Navigation/TopNavigation.vue";

export default {
  name: "MainPage",
  components: { BottomNavigation, TopNavigation },
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style scoped lang="scss">
html {
  background-image: url("../assets/report_disaster.png");
  background-size: 0;
}

p {
  max-width: 600px;
  margin: 0 auto;
}

.img {
  width: 100%;
  max-width: 256px;
}
::v-deep {
  .v-btn__content {
    .v-icon {
      margin-right: 0 !important;
    }
  }
}
</style>
