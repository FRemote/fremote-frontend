<template>
  <div class="user-activity">
    <div class="post">
      <el-row :gutter="20">
        <el-col :span="3" style="padding-top: 3px">
          <span class="label">Request Date:</span>
        </el-col>
        <el-col :span="21">
          <el-date-picker disabled v-model="value" type="date" placeholder="Pick a day"></el-date-picker>
          <span class="create-date">Create Date: Apr 24, 2020</span>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3" style="padding-top: 13px">
          <span class="label">Reason:</span>
        </el-col>
        <el-col :span="21">
          <p>Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans.</p>
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
        <Kanban :key="2" :list="[]" :group="group" class="kanban working" header-text="Working" />
        <Kanban :key="3" :list="[]" :group="group" class="kanban done" header-text="Done" />
      </div>
    </div>
    <div class="post">
      <h3 style="text-align: center;">Result</h3>
      <div style="text-align: center;">
        <el-button type="success" icon="el-icon-check" @click="accept">Accept</el-button>
        <el-button type="danger" icon="el-icon-delete">Reject</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import baseUrl from "@/utils/config";
import Kanban from "@/components/Kanban";
import { getRequestDetail } from "@/api/request";

export default {
  data() {
    return {
      baseUrl,
      requestDetail: {},
      value: new Date() + 1,
      group: "mission",
      list1: [
        { name: "Mission", id: 1 },
        { name: "Mission", id: 2 },
        { name: "Mission", id: 3 },
        { name: "Mission", id: 4 }
      ],
      list2: [
        { name: "Mission", id: 5 },
        { name: "Mission", id: 6 },
        { name: "Mission", id: 7 }
      ],
      list3: [
        { name: "Mission", id: 8 },
        { name: "Mission", id: 9 },
        { name: "Mission", id: 10 }
      ]
    };
  },
  components: {
    Kanban
  },
  async created() {
    const id = this.$route.params.id;
    await fetch(`${baseUrl}/getRequestById?id=${id}`)
      .then(res => res.json())
      .then(data => {
        this.requestDetail = data.data;
      });
  },
  methods: {
    accept() {
      this.$message({
        message: "You accept Phạm Ngọc Hòa working remote.",
        type: "success"
      });
    }
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
