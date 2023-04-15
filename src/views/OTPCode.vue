<template>
  <div>
    <h1>Enter code</h1>
    <p>
      We've sent an SMS with an activation code to your phone
      <strong>{{ phone }}</strong>
    </p>
    <div class="otp-wrapper"><v-otp-input /></div>
  </div>
</template>

<style scoped lang="scss">
.otp-wrapper {
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
