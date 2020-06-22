<template>
  <el-dialog
    title="Shipping address"
    class="dialog-task"
    :visible.sync="dialogFormVisible"
  >
    <div class="dialog-task">
      <div class="dialog-task--name">
        <i class="el-icon-takeaway-box dialog-icon"></i>
        <h3 class="dialog-task--name-text">
          #19 Xây dựng layout cho phần edit
        </h3>
      </div>
      <div class="dialog-task--content">
        <div class="content-left">
          <div class="content-left--detail">
            <div class="content-left--member-detail">
              <p>MEMBER</p>
              <div class="content-left--member-detail-img">
                <el-image
                  :src="url"
                  :fit="cover"
                  class="content-left--member-detail-img__image"
                ></el-image>
                <el-button icon="el-icon-plus" circle></el-button>
                <!-- <img
                  src="https://trello-members.s3.amazonaws.com/59c49453bd91e4722980ee74/639a781f19207d23fc22a37380cedaa2/30.png"
                  alt=""
                  class="content-left--member-detail-img__image"
                /> -->
              </div>
            </div>
            <div class="content-left--label-detail">
              <p>LABELS</p>
            </div>
            <div class="content-left--due-detail">
              <p>DUE DATE</p>
            </div>
          </div>
          <div class="content-left--discription"></div>
          <div class="content-left--activity"></div>
        </div>
        <div class="content-right">
          right
        </div>
      </div>
    </div>
    <!-- <el-form :model="form">
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
    </span> -->
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
      formLabelWidth: "120px",
      url:
        "https://trello-members.s3.amazonaws.com/59c49453bd91e4722980ee74/639a781f19207d23fc22a37380cedaa2/30.png"
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
      // this.dialogFormVisible = false;
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

<style lang="scss" scoped>
.dialog-task {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 30px;

  .dialog-task--name {
    display: flex;

    .dialog-task--name-text {
      margin: 0px;
    }
  }

  .dialog-task--content {
    display: flex;
    flex: 1;
    flex-direction: row;

    .content-left {
      flex: 7;

      .content-left--detail {
        flex-direction: row;

        .content-left--member-detail-img {
          display: flex;
          flex-direction: row;
          .content-left--member-detail-img__image {
            width: 40px;
            height: 40px;
            border-radius: 90px;
          }
        }
      }

      .content-left--discription {
        display: flex;
      }

      .content-left--activity {
        display: flex;
      }
    }

    .content-right {
      flex: 3;
    }
  }
}
.dialog-icon {
  width: 25px;
  height: 25px;
  font-size: 20px;
}
</style>
