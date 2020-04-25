<template>
  <div>
    <el-button
      style="margin: 12px auto; margin-left: 28rem;"
      @click="dialogFormVisible = true"
      type="success"
      plain
    >
      Add a new Task
    </el-button>

    <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Title" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click.prevent="createTask">Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        title: "",
        description: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    createTask() {
      this.dialogFormVisible = false;
      const newTask = {
        title: this.form.title,
        description: this.form.description
      };
      this.$emit("clicked", newTask);
      this.form.title = "";
      this.form.description = "";
    }
  }
};
</script>
