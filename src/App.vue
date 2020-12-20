<template>
  <div id="app">
    <div class="container justify-content-center align-items-center h-90">
      <img id="logo" src="./assets/images/pomegranate-icon.png" alt="">
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

#logo{
  width:100%;
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
.footer-image {
   
}

.footer-image:after {
    content: url(/pubilc/img/1x/yalda-bg.png);
    top: 0;
}

</style>
