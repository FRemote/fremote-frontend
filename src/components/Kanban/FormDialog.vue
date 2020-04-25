<template>
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
      <el-button type="primary" @click.prevent="updateTask">Update</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        description: ""
      },
      formLabelWidth: "120px"
    };
  },
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateTask() {
      this.dialogFormVisible = false;
      // const newTask = {
      //   title: this.form.title,
      //   description: this.form.description
      // };
      // this.$emit("clicked", newTask);
      this.form.title = "";
      this.form.description = "";
    }
  }
};
</script>
