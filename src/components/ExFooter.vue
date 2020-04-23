<template>
  <div>
    <footer>
      <Center>
        COPYRIGHT 2020 © Eximia Studios ALL RIGHTS RESERVED.
      </Center>
    </footer>
  </div>
</template>

<script>
import Center from "@/components/Center.vue";

export default {
  components: {
    Center
  }
};
</script>

<style>
footer {
  position: relative;
  text-align: center;
  height: 100px;
  margin-top: -100px;
}
</style>
