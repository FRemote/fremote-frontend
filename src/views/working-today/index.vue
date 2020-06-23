<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">
        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>
        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Work Time" name="work-time">
                <work-time />
              </el-tab-pane>
              <el-tab-pane label="Trello" name="trello">
                <request-detail />
              </el-tab-pane>
              <el-tab-pane label="Check-in" name="timeline">
                <checkin />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserCard from "./components/UserCard";
import RequestDetail from "./components/RequestDetail";
import Checkin from "./components/Checkin";
import WorkTime from "./components/WorkTime";
import TimeAnalytic from "./components/TimeHour";

import taskData from "../table/wt-data-detail";

export default {
  name: "Item details",
  components: { UserCard, RequestDetail, Checkin, WorkTime, TimeAnalytic },
  data() {
    return {
      user: {},
      activeTab: "work-time",
      taskData: null,
      taskDataLoading: false
    };
  },
  created() {
    this.getTaskDetail();
    this.getUser();
  },
  computed: {
    ...mapGetters(["name", "avatar", "roles"])
  },
  methods: {
    async getTaskDetail() {
      this.taskDataLoading = true;
      const data = taskData;
      console.log(data);

      this.taskData = data;
      this.taskDataLoading = false;
    },
    getUser() {
      this.user = {
        name: "Phạm Ngọc Hòa",
        role: "IT Department",
        email: "thaycacac@gmail.com",
        avatar:
          "https://avatars3.githubusercontent.com/u/29374426?s=460&u=94e43b7bb559b7c1ccae04de24374d105ed1ca6b&v=4"
      };
    }
  }
};
</script>
