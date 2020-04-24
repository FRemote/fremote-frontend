<template>
  <div class="user-activity">
    <div class="post">
      <el-row :gutter="20">
        <el-col :span="3" style="padding-top: 3px">
          <span class="label">Request Date:</span>
        </el-col>
        <el-col :span="21">
          <el-date-picker
            disabled
            v-model="requestDetail.requestAt"
            type="date"
            placeholder="Pick a day"
          >
          </el-date-picker>
          <span class="create-date"
            >Create Date: {{ requestDetail.createAt }}</span
          >
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3" style="padding-top: 13px">
          <span class="label">Reason:</span>
        </el-col>
        <el-col :span="21">
          <p>
            {{ requestDetail.reason }}
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="post">
      <h3 style="text-align: center;">Todo List</h3>
      <div class="components-container board">
        <Kanban
          :key="1"
          :list="requestDetail.tasks"
          :group="group"
          class="kanban todo"
          header-text="Todo"
        />
        <Kanban
          :key="2"
          :list="requestDetail.tasks"
          :group="group"
          class="kanban working"
          header-text="Working"
        />
        <Kanban
          :key="3"
          :list="requestDetail.tasks"
          :group="group"
          class="kanban done"
          header-text="Done"
        />
      </div>
    </div>
    <div class="post">
      <h3 style="text-align: center;">Result</h3>
      <div style="text-align: center;">
        <el-button type="success" icon="el-icon-check">Accept</el-button>
        <el-button type="danger" icon="el-icon-delete">Reject</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Kanban from "@/components/Kanban";
import { getRequestDetail } from "@/api/request";

export default {
  data() {
    return {
      requestDetail: {},
      value: new Date(),
      group: "mission"
    };
  },
  components: {
    Kanban
  },
  async created() {
    const id = this.$route.params.id;
    await fetch(`http://a3e162c5.ngrok.io/back-end/getRequestById?id=${id}`)
      .then(res => res.json())
      .then(data => {
        this.requestDetail = data.data;
      });
  }
};
</script>

<style lang="scss" scoped>
.board {
  width: 900px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 0 25px 0;
}
.kanban {
  &.todo {
    .board-column-header {
      background: #4a9ff9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
.create-date {
  float: right;
}
.label {
  color: #000;
}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}
</style>
