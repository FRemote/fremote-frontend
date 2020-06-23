<template>
  <div class="app-container">
    <el-steps :active="active" finish-status="success" style="margin: 10px 50px 50px 50px">
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
    </el-steps>
    <el-form ref="form" :model="form" label-width="120px" v-if="active === 0">
      <el-form-item label="Fullname">
        <el-input v-model="fullName" value="Phạm Ngọc Hòa" disabled></el-input>
      </el-form-item>
      <el-form-item label="Department">
        <el-input v-model="department" value="IT Department" disabled></el-input>
      </el-form-item>
      <el-form-item label="Position">
        <el-input v-model="position" value="IT Helpdesk Assistance" disabled></el-input>
      </el-form-item>
      <el-form-item label="Request Date">
        <el-date-picker type="date" placeholder="Pick a date" v-model="date" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="Reason">
        <el-input v-model="reason" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <create-task v-if="active === 1" />
    <el-container>
      <el-button
        v-if="active === 0"
        style="margin: 12px auto;"
        @click="next"
        type="primary"
        plain
        :disabled="date === '' || reason === ''"
      >Next step</el-button>
      <el-button
        v-if="active === 1"
        style="margin: 12px auto;"
        @click="submit"
        type="success"
        plain
        :icon="!loading ? 'el-icon-check' : 'el-icon-loading'"
      >Submit</el-button>
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
      fullName: "Phạm Ngọc Hòa",
      department: "IT Department",
      date: "",
      position: "Frontend Developer",
      reason: "",
      loading: false
    };
  },
  methods: {
    submit() {
      const a = setInterval(() => {
        this.loading = false;
        this.$message({
          message: "Create request successful!!!",
          type: "success"
        });
        this.$router.push("/");
        clearInterval(a);
      }, 1000);
    },
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
