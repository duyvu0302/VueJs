<template>
  <footer class="pt-5" v-red="['red', 'blue', 'gray']">
    &copy; Copy right STORM
    <h2>
      {{ $t("FOOTER") }}
    </h2>
  </footer>
</template>
<script>
import { myMixin } from "../mixins/ex.js";

export default {
  data() {
    return {
      message: "mess components",
    };
  },
  created() {
    console.log("mixin components");
    console.log(this.message);
  },
  mixins: [myMixin],

  directives: {
    red: {
      inserted: function(el, binding) {
        const color = binding.value;
        let i = 0;
        setInterval(() => {
          el.style.color = color[i++];
          // if (i > color.length - 1) i = 0;
        }, 1000);
      },
    },
  },
};
</script>

<style></style>
