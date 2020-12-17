<template>
  <div class="row text-center">
    <div class="col-12">
      <h3 class="my-3">یلداتون مبارک</h3>
      <p class="my-3">برای گرفتن فال امشبتون فقط کافیه دکمه زیر رو فشار بدی</p>
      <b-button class="my-3" @click="randomFaal" variant="danger" v-b-modal="'my-modal'">نمایش فال</b-button>
    </div>
    <div class="col-12">
      <b-modal id="my-modal" scrollable centered>
        <p v-html="randomOmen.omen"></p>
        <p>{{randomOmen.meaning}}</p>
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
      let rand = Math.random();
      const idx = Math.floor(rand * this.omens.length);
      this.randomOmen = this.omens[idx];
      return this.randomOmen;
    }
  }
};
</script>
 