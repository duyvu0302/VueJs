<template>
  <div id="app">
    <!-- <HelloWorld test="hehehe" msg="Welcome to Your Vue.js App" /> -->
    <!-- <Home test="hehehe" msg="Welcome to Your Vue.js App" /> -->
    <Todo :data="listTask" test="hehehe" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Home from "./components/home.vue";
import Todo from "./components/todo.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // Home,
    Todo,
  },
  data() {
    return {
      listTask: [
        {
          title: "Thu hai",
          id: 1,
        },
        {
          title: "Thu ba",
          id: 2,
        },
        {
          title: "Thu 4",
          id: 3,
        },
        {
          title: "Thu 5",
          id: 4,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
