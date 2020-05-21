<template>
  <div>
    <b-row>
      <b-col
        class="results"
        style="border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;"
      >Total tip:</b-col>
      <b-col
        class="results"
        style="border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;"
        cols="8"
      >{{totalTip | numFormat('0,0.00')}}</b-col>
    </b-row>

    <b-row>
      <b-col
        class="results"
        style="border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;"
      >Total bill with tip:</b-col>
      <b-col
        class="results"
        style="border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;"
        cols="8"
      >{{total | numFormat('0,0.00')}}</b-col>
    </b-row>
  </div>
</template>

<script>
import { EventBus } from "../main.js";

export default {
  data() {
    return {
      total: 0,
      totalTip: 0,
      cashAmount: 0,
      tipPercentage: 0,
      cashRegex: /^[0-9]+(\.[0-9][0-9])?$/
    };
  },
  methods: {
    getTotalTip() {
      this.totalTip = this.cashAmount * (this.tipPercentage / 100);
      this.totalTip = Number(this.totalTip.toFixed(2));
      this.getTotal();
    },
    getTotal() {
      console.log("totalTip: ", this.totalTip, "cashAmount: ", this.cashAmount);
      this.total = this.totalTip + Number(this.cashAmount);
      this.total = this.total.toFixed(2);
    }
  },
  created() {
    EventBus.$on("valid-cash-amount", cashAmount => {
      console.log(cashAmount);
      if (this.cashRegex.test(cashAmount)) {
        this.cashAmount = cashAmount;
        console.log("cash amount: ", this.cashAmount);
        this.getTotalTip();
      } else if (!this.cashRegex.test(cashAmount)) {
        EventBus.$emit("not-valid-cash-amount", cashAmount);
      }
    });
    EventBus.$on("tip-percentage", tipPercentage => {
      this.tipPercentage = tipPercentage;
      console.log("Tip Percentage: ", this.tipPercentage + "%");
      this.getTotalTip();
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

.results {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border: 1px solid rgba(86, 61, 124, 0.2);
  background-color: rgba(86, 61, 124, 0.15);
  font-family: "Noto Sans KR", sans-serif;
}
.row {
  /* overwrite bootstraps margins */
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-right: 0.2rem;
  padding-left: 0.2rem;
  padding-bottom: 1.2rem;
}
</style>