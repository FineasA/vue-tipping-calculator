<template>
  <div class="tipping-slider">
    <p
      style="margin-right: 0.8rem; margin-top: -0.5rem; font-size: 1.3rem; font-family: 'Open Sans', sans-serif;"
    >Tip:</p>
    <vue-slider width="400px" v-model="tipPercentage"></vue-slider>
    <p
      class="tipping-percent-disp"
      style="margin-left: 0.5rem; margin-top: -0.5rem; font-size: 0.95rem; font-family: 'Open Sans', sans-serif;"
    >{{tipPercentage}}%</p>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import { EventBus } from "../main.js";

export default {
  components: {
    VueSlider
  },
  data() {
    return {
      tipPercentage: 0
    };
  },
  updated() {
    EventBus.$emit("tip-percentage", this.tipPercentage);
  }
};
</script>

<style>
.tipping-percent-disp {
  background-color: #e9ecef;
  border: #ced4da 1px solid;
  border-radius: 4px;
  padding: 0.4rem;
}
.tipping-slider {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-bottom: 4.2rem;
}
</style>