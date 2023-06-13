<template>
  <v-container>
    <div class="mt-10">
      <v-icon size="64" color="primary">mdi-cellphone</v-icon>
      <h1 class="heading-text" style="line-height: 1.15">
        Ввод номера телефона
      </h1>
      <p class="py-4">Выберите ваш код страны и введите номер телефона</p>
    </div>

    <div class="otp-wrapper">
      <v-phone-input
        v-model="phone"
        clearable
        no-example
        :valid-color="'#468200'"
        :preferred-countries="['RU', 'UA', 'BY']"
        size="lg"
      />
      <v-btn elevation="0" color="primary" to="/code">Отправить СМС</v-btn>
      <v-btn elevation="0" color="orange darken-2" dark to="/code"
        >Перейти к приложению</v-btn
      >
      <router-link to="/volunteer">Войти как волонтёр</router-link>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.otp-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  max-width: 320px;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: "OTPPhone",
  data() {
    return {
      phone: null,
    };
  },
};
</script>
