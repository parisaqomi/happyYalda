<template>
  <div class="row text-center">
    <div class="col-12">
      <h3 class="my-3">یلداتون مبارک</h3>
      <p class="my-3">برای گرفتن فال امشبتون فقط کافیه دکمه زیر رو فشار بدی</p>
      <b-button class="my-3" @click="randomFaal" variant="danger" v-b-modal="'my-modal'">نمایش فال</b-button>
    </div>
    <div class="footer-image w-100"></div>
    <div class="col-12">
      <b-modal id="my-modal" scrollable centered>
        <p>{{randomOmen.omen}}</p>
        <p>{{randomOmen.meaning}}</p>
        <template #modal-footer>
          <div class="w-100 d-none"> 
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<style>
.footer-image {
   
}

.footer-image:after {
    content: url(/pubilc/img/1x/yalda-bg.png);
    top: 0;
}
</style>
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
      const idx = Math.floor(Math.random() * this.omens.length);
      this.randomOmen = this.omens[idx];
      return this.randomOmen;
    }
  }
};
</script>
 