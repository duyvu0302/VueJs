<template>
  <div class="model-action">
    <b-modal
      :id="`modal-prevent-closing-${id}`"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      v-if="type === 'modify'"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            :value="title"
            @change="$emit('updata', $event)"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <b-modal
      :id="`modal-prevent-closing-${id}`"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleDelete(id)"
      v-else
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :label="`do you want delete ${title} ?`"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    type: String,
    id: Number,
    title: String,
  },
  data() {
    return {
      value: this.title,
      nameState: null,
      submittedNames: [],
      textEdit: this.title,
    };
  },

  methods: {
    ...mapActions(["deleteTask", "editTask"]),
    handleDelete(id) {
      this.deleteTask({ id: id });
    },
    change(e) {
      console.log(e);
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();

      // Trigger submit handler
      this.handleSubmit();
    },

    handleSubmit() {
      this.editTask({
        id: this.id,
        title: this.title,
      });
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide(`modal-prevent-closing-${this.id}`);
      });
    },
  },
};
</script>

<style lang="scss">
.modal-action {
}
</style>
