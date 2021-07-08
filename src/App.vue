<template>
  <div id="app">
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Home from "./components/home.vue";
// import ListTodo from "./components/listToDoVuex.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
  name: "App",

  components: {
    // HelloWorld,
    // Home,
    // ListTodo,
    DefaultLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a {
    text-decoration: none;
    color: #eee;
  }
}
</style>
