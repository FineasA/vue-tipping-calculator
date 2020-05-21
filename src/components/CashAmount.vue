<template>
  <b-input-group prepend="$">
    <b-form-input v-model="cashAmount"></b-form-input>
  </b-input-group>
</template>

<script>
import { EventBus } from "../main.js";

export default {
  data() {
    return {
      cashAmount: 0
    };
  },
  updated() {
    //send cash amount
    EventBus.$emit("valid-cash-amount", this.cashAmount);
  }
};
</script>

<style>
.cash-amount-container {
  margin-top: 4.2rem;
  display: flex;
  justify-content: center;
}
</style>