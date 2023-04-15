<template>
  <v-container>
    <h1 class="heading-text">Enter a phone number</h1>
    <div class="otp-wrapper">
      <p class="p-text">
        Please confirm your country code and enter your phone number
      </p>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.otp-wrapper {
  max-width: 320px;
  margin: 0 auto;
}

.heading-text {
  margin-top: 48px;
}

.p-text {
  padding-top: 16px;
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
