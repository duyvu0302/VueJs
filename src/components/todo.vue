<template>
  <div class="todo">
    <b-container>
      <b-row>
        <b-col cols="10">
          <b-form>
            <b-form-input v-model="contentTask" placeholder="Enter your task">
            </b-form-input>
            <b-form-invalid-feedback :state="validation">
              Khong duoc de qua 20 ki tu !
            </b-form-invalid-feedback>
          </b-form>
        </b-col>
        <b-col align="start">
          <b-button @click="addTask()" variant="success">
            Add
          </b-button>
        </b-col>
      </b-row>
      <b-row class="pt-5" v-for="(item, index) in listTask" :key="index">
        <b-col align="start" class="mr-2 my-auto" cols="10">
          {{ item.title }}
        </b-col>
        <b-col align="start">
          <b-button
            id="show-btn"
            @click="$bvModal.show(`bv-modal-example-${index}`)"
            >Open Modal</b-button
          >

          <b-modal :id="`bv-modal-example-${index}`" hide-footer>
            <div class="d-block text-center">
              <h3>Hello From This Modal!</h3>
              <b-form-input v-model="editContent"></b-form-input>
            </div>
            <b-button
              class="mt-3"
              block
              @click="
                $bvModal.hide(`bv-modal-example-${index}`), updateTask(index)
              "
              >Close Me</b-button
            >
            <b-button @click="editContent(index)">
              OK
            </b-button>
          </b-modal>
          <b-button class="ml-5" @click="deleteTask(index)" variant="danger"
            >Xoa</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import Modify from "./modify.vue";
export default {
  name: "todo",
  props: {
    smg: String,
    data: Array,
  },
  data() {
    return {
      contentTask: "",
      editContent: "",
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
  computed: {
    validation() {
      return this.contentTask.length < 20;
    },
  },
  methods: {
    getTaskk(data) {
      return data;
    },
    addTask() {
      return this.listTask.push({
        id: this.listTask.length + 1,
        title: this.contentTask,
      });
    },
    deleteTask(id) {
      return this.listTask.splice(id, 1);
    },
    updateTask(id) {
      console.log(this.editContent);
      let arr = this.listTask.splice(id, 1, {
        id: id,
        title: this.editContent,
      });
      this.editContent = "";
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
$color: red;
.todo {
  color: $color;
}
</style>
