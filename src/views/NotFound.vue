<template>
  <div class="notfound">
    <Center>
      <h1>The page you're looking for does not exist.</h1>
    </Center>
  </div>
</template>

<script>
import Center from "@/components/Center.vue";

export default {
  name: "NotFound",
  components: {
    Center
  }
};
</script>

<style scoped>
h1 {
  font-weight: 200;
}
</style>
