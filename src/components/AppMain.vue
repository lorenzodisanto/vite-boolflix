<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard },
};
</script>

<template>
  <div class="container"><app-card></app-card></div>
</template>

<style lang="scss" scoped></style>
