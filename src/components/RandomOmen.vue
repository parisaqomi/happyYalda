<template>
  <div class="row text-center">
    <div class="col-12">
      <h3 class="my-3">یلداتون مبارک</h3>
      <p class="my-3">برای گرفتن فال امشبتون فقط کافیه دکمه زیر رو فشار بدی</p>
      <b-button class="my-3" @click="randomFaal" variant="danger" v-b-modal="'my-modal'">نمایش فال</b-button>
    </div>
    <div class="col-12">
      <b-modal id="my-modal" scrollable centered>
        <b-card bg-variant="danger" text-variant="white" title="فال شما">
  <b-card-text>
    <p v-html="randomOmen.omen"></p>
  </b-card-text>
</b-card>
        <b-card border-variant="danger" text-variant="dark" title="تفسیر فال شما">
  <b-card-text>
        <p>{{randomOmen.meaning}}</p>

  </b-card-text>
</b-card>
        
        <template #modal-footer>
          <div class="w-100 d-none"> 
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<script>
import omensData from "../../faal.json";
import generateRandomIntegerWithin from "../helpers/randomGenerator"

export default {
  name: "RandomOmen",
  props: {
    msg: String
  },
  data() {
    return {
      omens: omensData,
      randomOmen: ""
    };
  },
  methods: {
    randomFaal: function() {
      let upperBound = this.omens.length;
      let lowerBound = 0;
      let randomIndex = generateRandomIntegerWithin(lowerBound,upperBound);
      let randomOmen = this.omens[randomIndex];
      this.randomOmen = randomOmen;
      return;
    }
  }
};
</script>
 