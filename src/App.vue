
<template>
  <div class="container custom-container">
    <h2 class="title" style="padding: 3.2rem;">Tip Calculator</h2>

    <hr />

    <div class="cash-amount-container container">
      <cash-amount style="width: 250px"></cash-amount>
    </div>

    <danger-alert></danger-alert>

    <div class="container">
      <tip-calculator></tip-calculator>
    </div>

    <results></results>
  </div>
</template>

<script>
import TipCalculator from "./components/TipCalculator.vue";
import CashAmount from "./components/CashAmount.vue";
import Results from "./components/Results.vue";
import DangerAlert from "./components/DangerAlert.vue";

export default {
  data() {
    return {};
  },
  components: {
    TipCalculator,
    CashAmount,
    Results,
    DangerAlert
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Heebo&family=Open+Sans&display=swap");

.title {
  font-family: "Heebo", sans-serif;
  font-size: 4rem;
  text-align: center;
}
.custom-container {
  margin-top: 5%;
  background-color: #e9ecef;
  border-radius: 15px;
}
</style>