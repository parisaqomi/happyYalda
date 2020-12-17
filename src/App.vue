<template>
  <div id="app">
    <div class="container d-flex justify-content-center align-items-center h-90">
      <RandomOmen />
    </div>
    <div class="footer-image">
 
    </div>
  </div>
</template>

<script>
import RandomOmen from "./components/RandomOmen.vue";

export default {
  name: "App",
  components: {
    RandomOmen
  }
};
</script>

<style>
@font-face {
  font-family: "iransans";
  src: url(assets/fonts/ttf/IRANSansWeb.ttf),
    url(assets/fonts/eot/IRANSansWeb.eot),
    url(assets/fonts/woff/IRANSansWeb.woff),
    url(assets/fonts/woff2/IRANSansWeb.woff2);
}

body {
  font-family: "iransans" !important;
  box-sizing: border-box !important;
  margin: 0 !important;
  font-size: 14px !important;
  direction: rtl !important;
  text-align: right !important;
}
.h-90 {
  height: 90vh;
}
</style>
