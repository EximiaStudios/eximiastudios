<template>
  <div>
    <div class="rev"></div>
    <ExFooter>© 2020 Eximia Studios.</ExFooter>
  </div>
</template>

<script>
import ExFooter from "@/components/ExFooter.vue";

export default {
  components: {
    ExFooter
  }
};
</script>

<style>
html {
  background: #312b2b;
}

.rev {
  background-image: url("../assets/Renvmn.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
  z-index: 2;
}
</style>
