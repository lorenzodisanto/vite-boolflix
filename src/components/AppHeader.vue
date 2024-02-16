<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      searchTitle: "",
    };
  },

  methods: {
    upSearchTitle() {
      store.searchTitle = this.searchTitle;
    },
  },

  emits: ["click-contents"],
};
</script>

<template>
  <header>
    <div class="container header-section">
      <div>
        <h1 class="text-danger">{{ store.title }}</h1>
      </div>

      <!-- search bar -->
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Inizia Ricerca"
          aria-label="Inizia Ricerca"
          aria-describedby="button"
          @keyup="upSearchTitle()"
          @keyup.enter="$emit('click-contents')"
          v-model="searchTitle"
        />
        <button
          @click="$emit('click-contents')"
          class="btn btn-danger"
          type="button"
          id="button"
        >
          Search
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  height: 120px;
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
