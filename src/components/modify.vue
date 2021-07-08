<template>
  <b-modal :id="`bv-modal-example-${id}`" hide-footer>
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
      <b-form-input v-model="editContent"></b-form-input>
    </div>
    <b-button
      class="mt-3"
      block
      @click="$bvModal.hide('bv-modal-example'), updateTask(index)"
      >Close Me</b-button
    >
    <b-button @click="editContent(index)">
      OK
    </b-button>
  </b-modal>
</template>

<script>
export default {
  name: "modify",
  props: {
    id: String,
    editContent: String,
  },
};
</script>

<style></style>
