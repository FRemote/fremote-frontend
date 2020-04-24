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
            v-model="value"
            type="date"
            placeholder="Pick a day">
          </el-date-picker>
          <span class="create-date">Create Date: 2017-05-28T07:43:32 -07:00</span>
        </el-col>
      </el-row>
    </div>
    <div class="post">
      <div class="components-container board">
        <Kanban :key="1" :list="list1" :group="group" class="kanban todo" header-text="Todo" />
        <Kanban :key="2" :list="list2" :group="group" class="kanban working" header-text="Working" />
        <Kanban :key="3" :list="list3" :group="group" class="kanban done" header-text="Done" />
      </div>
    </div>
  </div>
</template>

<script>
import Kanban from '@/components/Kanban'

export default {
  data() {
    return {
      value: new Date(),
      group: 'mission',
      list1: [
        { name: 'Mission', id: 1 },
        { name: 'Mission', id: 2 },
        { name: 'Mission', id: 3 },
        { name: 'Mission', id: 4 }
      ],
      list2: [
        { name: 'Mission', id: 5 },
        { name: 'Mission', id: 6 },
        { name: 'Mission', id: 7 }
      ],
      list3: [
        { name: 'Mission', id: 8 },
        { name: 'Mission', id: 9 },
        { name: 'Mission', id: 10 }
      ]
    }
  },
  components: {
    Kanban
  }
}
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
      background: #4A9FF9;
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
