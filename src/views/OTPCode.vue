<template>
  <v-container>
    <div class="mt-10">
      <v-icon size="64" color="primary">mdi-cellphone-key</v-icon>
      <h1 class="heading-text">Введите OTP код</h1>
      <p class="py-4">
        Мы отправили СМС с кодом активации на ваш телефон<br />
        <strong>+7 999 333-22-11</strong>
      </p>
    </div>
    <div class="otp-wrapper">
      <v-otp-input type="number" :length="4" />
      <v-btn elevation="0" color="primary" to="/">Подтвердить</v-btn>
      <v-btn elevation="0" color="orange darken-2" dark to="/code"
        >Перейти к приложению</v-btn
      >
      <router-link to="/">Изменить номер</router-link>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.otp-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  max-width: 320px;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: "OTPPhone",
  props: {
    phone: {
      type: String,
      required: true,
    },
  },
};
</script>
