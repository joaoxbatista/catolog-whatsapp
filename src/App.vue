<template>
  <div id="app" class="overflow-y-scroll h-screen py-10">
    <Catalog />
  </div>
</template>

<script>
import Catalog from "./components/Catalog.vue";
export default {
  name: "App",
  components: {
    Catalog
  },
  beforeMount() {
    document.title = "Cantinho da Mi";
  }
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  background: linear-gradient(#fff, rgb(255, 193, 227));
}
</style>
