<template>
  <div class="user-activity">
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
        { name: 'Mission', id: 'Task 1' },
      ],
      list2: [
        { name: 'Mission', id: 'Task 2' },
        { name: 'Mission', id: 'Task 3' },
        { name: 'Mission', id: 'Task 4' }
      ],
      list3: [
        { name: 'Mission', id: 'Task 5' },
        { name: 'Mission', id: 'Task 6' },
        { name: 'Mission', id: 'Task 7' },
        { name: 'Mission', id: 'Task 8' },
        { name: 'Mission', id: 'Task 9' },
        { name: 'Mission', id: 'Task 10' }
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
