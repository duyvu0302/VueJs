<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Foorer />
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Foorer from "../components/footer.vue";
export default {
  components: {
    Header,
    Foorer,
  },
};
</script>

<style></style>
