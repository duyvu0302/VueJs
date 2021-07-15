<template>
  <div>
    <h1>Layout user</h1>

    <Header />
    <main>
      <!-- <slot /> -->
      <ListToDo />
    </main>
    <Foorer />
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Foorer from "../components/footer.vue";
import ListToDo from "../components/listToDoVuex.vue";
export default {
  components: {
    Header,
    Foorer,
    ListToDo,
  },
  watch: {},
};
</script>

<style></style>
