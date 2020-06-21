<template>
  <div class="board-column">
    <div class="board-column-header">
      <div class="board-column-header__title">
        {{ headerText }}
      </div>
      <i
        class="el-icon-more board-column-header__more"
        @click="editTask(idx)"
      ></i>
    </div>
    <draggable
      :list="list"
      v-bind="$attrs"
      class="board-column-content"
      :set-data="setData"
    >
      <!-- <transition-group> -->
      <div v-for="(element, idx) in list" :key="element.id" class="board-item">
        <!-- <div class="board-item-wrap">
          <span class="board-item-title"
            >{{ element.title }} {{ element.id }}</span
          >
          <div class="board-item-icon">
            <i class="el-icon-edit" @click="editTask(idx)"></i>
            <i class="el-icon-delete" @click="removeTask(idx)"></i>
            <form-dialog :dialog-form-visible="dialogFormVisible" />
          </div>
        </div> -->
        <board-item :item="element" :idx="idx" />
      </div>
      <el-button
        v-if="headerText === 'Todo'"
        icon="el-icon-edit"
        style="margin-top: 7px; width: 100%;"
      >
        Add another card
      </el-button>

      <!-- </transition-group> -->
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import FormDialog from "./FormDialog";
import BoardItem from "./BoardItem";

export default {
  name: "DragKanbanDemo",
  components: {
    draggable,
    FormDialog,
    BoardItem
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;

    .board-column-header__title {
      // height: 50px;
      // line-height: 50px;
      overflow: hidden;
      // padding: 0 20px;
      // text-align: center;
      // background: #333;
      // color: #fff;
      border-radius: 3px 3px 0 0;
      font-weight: 600;
    }

    .board-column-header__more {
      color: #6b778c;
      padding: 5px;
    }
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
      height: auto;
      margin: 5px 0;
      background-color: #fff;
      text-align: left;
      // line-height: 54px;
      padding: 5px 10px;
      box-sizing: border-box;
      box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      // .board-item-wrap {
      //   display: flex;
      //   justify-content: space-between;
      //   .el-icon-edit {
      //     padding-right: 5px;
      //   }
      // }
    }
  }
}
</style>
