<template>
  <v-container>
    <div class="mt-10">
      <v-icon size="64" color="success">mdi-hand-heart</v-icon>
      <h1 class="heading-text">Вход для добровольческих организаций</h1>
      <p class="py-4">Введите Volunteer ID и пароль для входа.</p>
    </div>

    <div class="login-wrapper">
      <form id="volunteer_auth">
        <v-text-field
          name="volunteer_id"
          v-model="formData.volunteer_id"
          label="Volunteer ID"
          type="text"
          color="success"
          :disabled="loading"
          outlined
        />
        <v-text-field
          name="volunteer_pass"
          v-model="formData.volunteer_pass"
          label="Password"
          type="password"
          color="success"
          :disabled="loading"
          outlined
        />
      </form>
      <v-btn
        elevation="0"
        color="success"
        to="#"
        @click="submitHandler"
        :loading="loading"
        >Вход</v-btn
      >
      <a class="success--text text--darken-2" to="/">Как стать волонтёром?</a>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "VolunteerAuth",
  data() {
    return {
      formData: {
        volunteer_id: null,
        volunteer_pass: "",
      },
      loading: false,
    };
  },
  methods: {
    submitHandler() {
      this.$store.dispatch("signIn", {
        login: this.formData.volunteer_id,
        password: this.formData.volunteer_pass,
      });
      // this.$store.commit("setRole", {
      //   name: "volunteer",
      //   id: this.formData.volunteer_id,
      // });
      setTimeout(() => {
        this.$router.push("/main");
        this.loading = true;
      }, 500);
    },
  },
};
</script>

<style scoped lang="scss">
.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  max-width: 320px;
  margin: 0 auto;
}
</style>
