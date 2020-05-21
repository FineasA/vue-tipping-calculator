<template>
  <div class="alert-container">
    <b-alert
      :show="regexFailed"
      variant="danger"
      class="alert-disp"
    >Format should be in 123 or 123.00</b-alert>
  </div>
</template>

<script>
import { EventBus } from "../main.js";

export default {
  data() {
    return {
      regexFailed: false,
      error: ""
    };
  },
  created() {
    EventBus.$on("not-valid-cash-amount", cashAmount => {
      this.error = cashAmount;
      this.regexFailed = true;
    });
    EventBus.$on("valid-cash-amount", () => {
      this.regexFailed = false;
    });
  }
};
</script>

<style>
.alert-container {
  display: flex;
  justify-content: center;
  padding: 50px;
}
.alert-disp {
  max-width: 550px;
  width: 550px;
  text-align: center;
}
</style>