<script>
export default {
  data() {
    return {};
  },

  methods: {
    buttonClick() {
      alert("bottone cliccato");
    },
  },
};
</script>

<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Scegli film"
      aria-label="Scegli film"
      aria-describedby="button"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      id="button"
      @click="buttonClick()"
    >
      Search
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
