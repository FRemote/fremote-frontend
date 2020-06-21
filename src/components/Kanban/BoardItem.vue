<template>
  <div class="board-item-wrap" v-on:click="editTask(idx)">
    <div class="board-item-wrap__label">
      <span
        class="card-label board-item-wrap__label--green mod-card-front"
        title="Front-end"
      >
        <!-- <p class="label-text">Front-end</p> -->
      </span>
    </div>
    <span class="board-item-title"
      >#{{ idx }} {{ item.id }} {{ item.title }}</span
    >
    <!-- <div class="board-item-icon">
      <i class="el-icon-edit" @click="editTask(idx)"></i>
      <i class="el-icon-delete" @click="removeTask(idx)"></i>
      <form-dialog :dialog-form-visible="dialogFormVisible" />
    </div> -->
    <div class="board-item-wrap__sub">
      <div
        class="badge js-due-date-badge is-due-past"
        title="This card is past due."
      >
        <i class="el-icon-timer"></i>
        <input class="mod-due-complete-checkbox" type="checkbox" />
        <p class="badge-text js-due-date-text">
          Mar 29
        </p>
      </div>
      <div class="board-item-wrap__sub-member">
        <img
          src="https://trello-members.s3.amazonaws.com/59c49453bd91e4722980ee74/639a781f19207d23fc22a37380cedaa2/30.png"
          alt=""
          class="sub-member--img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FormDialog from "./FormDialog";

export default {
  components: {
    FormDialog
  },
  data: () => ({
    dialogFormVisible: false
  }),
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    },
    idx: {
      type: Number,
      default: 0
    }
  },
  methods: {
    setData(dataTransfer) {
      dataTransfer.setData("Text", "");
    },
    editTask(id) {
      this.dialogFormVisible = !this.dialogFormVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
.board-item-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .el-icon-edit {
    padding-right: 5px;
  }

  .board-item-wrap__label {
    overflow: auto;
    position: relative;

    .card-label {
      float: left;
      font-size: 12px;
      font-weight: 700;
      // height: 8px;
      line-height: 0px;
      margin: 0 4px 4px 0;
      max-width: 40px;
      min-width: 40px;
      padding: 0;
      text-shadow: none;
      width: auto;
      background-color: #b3bac5;
      border-radius: 4px;
      color: #fff;
      display: block;
      margin-right: 4px;
      max-width: 100%;
      overflow: hidden;
      padding: 4px 6px;
      position: relative;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .board-item-wrap__label--green {
      background-color: #13ce66;
    }
  }

  .board-item-title {
    clear: both;
    display: block;
    margin: 0 0 4px;
    overflow: hidden;
    text-decoration: none;
    word-wrap: break-word;
    color: #172b4d;
    line-height: initial;
    font-size: 15px;
  }

  .board-item-wrap__sub {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .badge {
      color: #5e6c84;
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: 100%;
      min-height: 20px;
      overflow: hidden;
      position: relative;
      padding: 2px;
      text-decoration: none;
      text-overflow: ellipsis;
      vertical-align: top;
      float: left;
      max-width: 100%;
    }
    .is-due-past {
      background-color: #ec9488;
      border-radius: 3px;
      color: #fff;
    }

    .mod-due-complete-checkbox {
      display: none;
      margin: 0 4px;
      cursor: pointer;
    }

    .badge-text {
      margin: 2px 0px;
      font-size: 12px;
      padding: 4px;
      vertical-align: top;
      white-space: nowrap;
    }

    .board-item-wrap__sub-member {
      height: 28px;
      width: 28px;
      float: right;
      margin: 0 0 4px 4px;

      .sub-member--img {
        height: 28px;
        width: 28px;
        border-radius: 25em;
        object-fit: cover;
      }
    }
  }
}
</style>
