<template>
  <div class="board-column">
    <div class="board-column-header">
      {{ headerText }}
    </div>
    <draggable
      :list="list"
      v-bind="$attrs"
      class="board-column-content"
      :set-data="setData"
    >
      <!-- <transition-group> -->
      <div v-for="(element, idx) in list" :key="element.id" class="board-item">
        <div class="board-item-wrap">
          <span class="board-item-title"
            >{{ element.title }} {{ element.id }}</span
          >
          <div class="board-item-icon">
            <i class="el-icon-edit" @click="editTask(idx)"></i>
            <i class="el-icon-delete" @click="removeTask(idx)"></i>
            <form-dialog :dialog-form-visible="dialogFormVisible" />
          </div>
        </div>
      </div>
      <el-button v-if="headerText === 'Todo'" icon="el-icon-edit" style="margin-top: 7px; width: 100%;">Add new task</el-button>
      
      <!-- </transition-group> -->
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import FormDialog from "./FormDialog";

export default {
  name: "DragKanbanDemo",
  components: {
    draggable,
    FormDialog
  },
  data: () => ({
    dialogFormVisible: false
  }),
  props: {
    headerText: {
      type: String,
      default: "Header"
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    list: {
      type: Array,
      default() {
        return [];
      }
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
.board-column {
  min-width: 280px;
  min-height: 100px;
  height: auto;
  overflow: hidden;
  background: #f0f0f0;
  border-radius: 3px;

  .board-column-header {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    background: #333;
    color: #fff;
    border-radius: 3px 3px 0 0;
  }

  .board-column-content {
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    min-height: 60px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    .board-item {
      cursor: pointer;
      width: 100%;
      height: 64px;
      margin: 5px 0;
      background-color: #fff;
      text-align: left;
      line-height: 54px;
      padding: 5px 10px;
      box-sizing: border-box;
      box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
      .board-item-wrap {
        display: flex;
        justify-content: space-between;
        .el-icon-edit {
          padding-right: 5px;
        }
      }
    }
  }
}
</style>
