<template>
  <div class="row text-center">
    <div class="col-12">
      <h3 class="my-3">یلداتون مبارک</h3>
      <p class="my-3">
        یکی از آئین‌های ایرانیان در شب یلدا خواندن شعرهای حافظ و تفاّل بر دیوان
        لسان الغیب است. نیت کنید و فال حافظتون رو ببینید
      </p>
      <b-button
        class="my-3"
        @click="openHandle"
        v-b-modal="'my-modal'"
        variant="danger"
        >نمایش فال</b-button
      >
    </div>
    <div class="col-12">
      <b-modal id="my-modal" scrollable centered>
        <div id="loadingMessage" v-show="isLoading"></div>
        <div v-show="!isLoading">

        <b-card
          bg-variant="danger"
          text-variant="white"
          title="فال شما"
          class="mb-2"
        >
          <b-card-text>
            <p v-html="randomOmen.omen"></p>
          </b-card-text>
        </b-card>
        <b-card border-variant="danger" text-variant="dark" title="تفسیر  ">
          <b-card-text>
            <p>{{ randomOmen.meaning }}</p>
          </b-card-text>
        </b-card>

        </div>
        <template #modal-footer>
          <div class="w-100 d-none"></div>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<script>
import omensData from "../../faal.json";
import generateRandomIntegerWithin from "../helpers/randomGenerator";
import Typed from "typed.js";
// Import component

export default {
  name: "RandomOmen",
  props: {
    msg: String,
  },
  data() {
    return {
      omens: omensData,
      randomOmen: "",
      isLoading: false,
      message:
        "ای حافظ شیرازی! تو محرم هر رازی! تو را به خدا و به شاخ نباتت قسم می‌دهم که هر چه صلاح و مصلحت می‌بینی برایم آشکار و آرزوی مرا برآورده سازی.",

      typeOptions: {
        strings: [this.message],
      },
    };
  },
  methods: {
    randomFaal: function() {
      this.randomOmen = "";

      let upperBound = this.omens.length;
      let lowerBound = 0;
      let randomIndex = generateRandomIntegerWithin(lowerBound, upperBound);
      let randomOmen = this.omens[randomIndex];
      this.randomOmen = randomOmen;

      return;
    },
    openHandle() {
      this.isLoading = true;
      let typed = new Typed('#loadingMessage', this.typeOptions);
      setTimeout(() => {
        this.randomFaal();
        this.isLoading = false;
      }, 5000);
      console.log(typed);
    },
    onClosed() {
      this.opened = false;
      this.visible = false;
    },
  },
};
</script>
