<template>
  <div class="app-container">
    <el-steps :active="active" finish-status="success" style="margin: 10px 50px 50px 50px">
      <el-step title="Step 1" description="Request detail">></el-step>
      <el-step title="Step 2" description="Todo list"></el-step>
      <el-step title="Step 3" description="Confirm and submit"></el-step>
    </el-steps>
    <el-form ref="form" :model="form" label-width="120px" v-if="active === 0">
      <el-form-item label="Fullname">
        <el-input value="Hoa Pham" disabled=""></el-input>
      </el-form-item>
      <el-form-item label="Department">
        <el-input value="IT Department" disabled=""></el-input>
      </el-form-item>
      <el-form-item label="Position">
        <el-input value="IT Helpdesk Assistance" disabled=""></el-input>
      </el-form-item>
      <el-form-item label="Request Date">
        <el-date-picker type="date" placeholder="Pick a date" v-model="form.date" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="Reason">
        <el-input type="textarea" v-model="form.reason"></el-input>
      </el-form-item>
    </el-form>
    <create-task v-if="active === 1"/>
    <div v-if="active === 2">
      <el-alert
        style="width: 50%; margin: 0 auto;"
        title="Attention"
        type="info"
        description="You need to wait for your boss to approve it so you can work online that day!!!"
        show-icon>
      </el-alert>
      <el-container>
        <el-button type="success" style="margin: 15px auto 0 auto;">Submit</el-button>
      </el-container>
    </div>
    <el-container v-if="active !== 2">
      <el-button type="info" @click="next" style="margin: 0 auto;">Next step</el-button>
    </el-container>
  </div>
</template>

<script>
import CreateTask from './components/CreateTask'
  export default {
    components: {
      CreateTask
    },
    data() {
      return {
        active: 0,
        form: {
          date: '',
          reason: ''
        }
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>