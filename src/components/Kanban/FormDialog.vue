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
              <div class="content-left--label-detail-info">
                <el-button type="success">Font-end</el-button>
                <el-button icon="el-icon-plus"></el-button>
              </div>
            </div>
            <div class="content-left--due-detail">
              <p>DUE DATE</p>
              <el-dropdown>
                <el-button>
                  Mar 29 at 10:38 PM
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="content-left--discription">
            <p class="content-left--discription--title">
              Description
            </p>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="Add a more detail discription"
              v-model="textarea"
            >
            </el-input>
          </div>
          <div class="content-left--activity">
            <p class="title">
              Activity
            </p>
            <div class="">
              <el-image
                :src="url"
                :fit="cover"
                class="content-left--activity__img"
              ></el-image>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="Write a comment"
                v-model="textarea"
              >
              </el-input>
            </div>
          </div>
        </div>
        <div class="content-right">
          <p>ADD TO CARD</p>
          <el-button class="content-right__btn" icon="el-icon-user"
            >Member</el-button
          >
          <el-button class="content-right__btn" icon="el-icon-collection-tag"
            >Labels</el-button
          >
          <el-button class="content-right__btn" icon="el-icon-circle-check"
            >Checklist</el-button
          >
          <el-button class="content-right__btn" icon="el-icon-alarm-clock"
            >Due date</el-button
          >
          <el-button class="content-right__btn" icon="el-icon-folder-add"
            >Attackment</el-button
          >
          <el-button class="content-right__btn" icon="el-icon-postcard"
            >Cover</el-button
          >
          <p>ACTION</p>
          <el-button class="content-right__btn" icon="el-icon-right"
            >More</el-button
          >
          <el-button class="content-right__btn" icon="el-icon-document-copy"
            >Copy</el-button
          >
          <el-button class="content-right__btn" icon="el-icon-copy-document"
            >Make template</el-button
          >
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
        "https://trello-members.s3.amazonaws.com/59c49453bd91e4722980ee74/639a781f19207d23fc22a37380cedaa2/30.png",
      input: ""
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
      padding-right: 15px;

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
        flex-direction: column;

        .content-left--discription--title {
          font-size: 18px;
          font-weight: bold;
        }
      }

      .content-left--activity {
        display: flex;
        flex-direction: column;

        .content-left--activity {
          display: flex;
          flex-direction: row;
        }

        .content-left--activity__img {
          width: 40px;
          height: 40px;
          border-radius: 90px;
          margin-right: 5px;
        }
      }
    }

    .content-right {
      flex: 3;

      .content-right__btn {
        width: 100%;
        margin: 2px 0;
      }
    }
  }
}
.dialog-icon {
  width: 25px;
  height: 25px;
  font-size: 20px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
</style>
