<template>
  <div class="app-container">
    <el-steps
      :active="active"
      finish-status="success"
      style="margin: 10px 50px 50px 50px"
    >
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
    </el-steps>
    <el-form ref="form" :model="form" label-width="120px" v-if="active === 0">
      <el-form-item label="Reason">
        <el-input v-model="form.reason" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <div v-if="active === 1" class="user-activity">
      <div class="post">
        <div class="components-container board">
          <Kanban
            :key="1"
            :list="listTodoTask"
            group="mission"
            class="kanban todo"
            header-text="Todo"
          />
          <Kanban
            :key="2"
            :list="listWorkingTask"
            group="mission"
            class="kanban working"
            header-text="Working"
          />
          <Kanban
            :key="3"
            :list="listDoneTask"
            group="mission"
            class="kanban done"
            header-text="Done"
          />
        </div>
      </div>
    </div>

    <el-container>
      <form-dialog @clicked="createTaskClick" v-if="active === 1" />
      <el-button
        v-if="active < 2"
        style="margin: 12px auto;"
        @click="next"
        type="primary"
        plain
      >
        Next step
      </el-button>
    </el-container>
  </div>
</template>

<script>
import Kanban from "@/components/Kanban";
import CreateTask from "./components/CreateTask";
import FormDialog from "./components/FormDialog";
import { postRequest } from "@/api/request";
import requestAxios from "@/utils/fhack";
import axios from 'axios'
export default {
  components: {
    FormDialog,
    Kanban
  },
  data() {
    return {
      active: 0,
      form: {
        fullName: "",
        department: "",
        position: "",
        date: "",
        reason: ""
      },
      requestID: null,
      listTodoTask: [],
      listWorkingTask: [],
      listDoneTask: [],
      newTaks: {},
      dialogVisible: false
    };
  },
  methods: {
    next() {
      axios.get('https://4fe5cc24.ngrok.io/back-end/requests?currPage=1&pageSize=10')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
      // if (this.active === 0) {
      //   const newRequest = {
      //     employeeId: 100001,
      //     reason: this.form.reason,
      //     requestAt: "2019-10-05T09:36:30 -07:00",
      //     timeRemind: 2,
      //     tasks: [
      //       {
      //         title: "Init task",
      //         description: "init task"
      //       }
      //     ]
      //   };
      //   // await requestAxios({
      //   //   url: "https://db5362ae.ngrok.io/back-end/createRequest",
      //   //   method: "POST",
      //   //   newRequest
      //   // }).then(res => res);
      //   await fetch("https://db5362ae.ngrok.io/back-end/createRequest", {
      //     method: "POST",
      //     // mode: "cors",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify(newRequest)
      //   })
      //     .then(res => res.json())
      //     .then(data => {
      //       this.requestID = data.data.id;
      //     })
      //     .catch(err => console.log(err));
      // }
      // if (this.active++ > 2) this.active = 0;
    },

    async createTaskClick(value) {
      this.newTaks.tasks = [];
      this.listTodoTask.push(value);
      this.newTaks.tasks.push(value);
      value.requestId = this.requestID;
      value.status = "todo";
      await fetch("https://db5362ae.ngrok.io/back-end/addTask", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
      })
        .then(res => res.json())
        .then(data => {
          this.requestID = data.data.id;
        })
        .catch(err => console.log(err));
    },
    createRequest() {}
  }
};
</script>

<style lang="scss" scoped>
.board {
  width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 auto;
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
