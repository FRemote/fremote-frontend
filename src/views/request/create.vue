<template>
  <div class="app-container">
    <el-steps
      :active="active"
      finish-status="success"
      style="margin: 10px 50px 50px 50px"
    >
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>
    <el-form ref="form" :model="form" label-width="120px" v-if="active === 0">
      <el-form-item label="Fullname">
        <el-input
          v-model="fullName"
          value="Phạm Ngọc Hòa"
          disabled=""
        ></el-input>
      </el-form-item>
      <el-form-item label="Department">
        <el-input
          v-model="department"
          value="IT Department"
          disabled=""
        ></el-input>
      </el-form-item>
      <el-form-item label="Position">
        <el-input
          v-model="position"
          value="IT Helpdesk Assistance"
          disabled=""
        ></el-input>
      </el-form-item>
      <el-form-item label="Request Date">
        <el-date-picker
          type="date"
          placeholder="Pick a date"
          v-model="date"
          style="width: 100%;"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="Reason">
        <el-input v-model="reason" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <create-task v-if="active === 1" />
    <el-container>
      <el-button style="margin: 12px auto;" @click="next" type="primary" plain>
        Next step
      </el-button>
    </el-container>
  </div>
</template>

<script>
import CreateTask from "./components/CreateTask";
import { postRequest } from "@/api/request";
export default {
  components: {
    CreateTask
  },
  data() {
    return {
      active: 0,
      fullName: "Truong Jackie",
      department: "IT Department",
      date: "",
      position: "Frontend Developer",
      reason: "Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans."
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
      const newRequest = Object.assign(
        newRequest,
        this.fullName,
        this.department,
        this.date,
        this.position,
        this.reason
      );
      postRequest(newRequest);
    }
  }
};
</script>
