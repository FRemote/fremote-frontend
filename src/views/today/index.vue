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
              <el-tab-pane label="Activities" name="activity">
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

import taskData from "../table/wt-data-detail";

export default {
  name: "Item details",
  components: { UserCard, RequestDetail, Checkin },
  data() {
    return {
      user: {},
      activeTab: "activity",
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
        name: "Hoa Pham",
        role: "IT Department",
        email: "thaycacac@gmail.com",
        avatar:
          "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/p960x960/92497429_1240585112803862_5104665409794080768_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=x54zD0gzShwAX89BkIY&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=7235ad8ae6bd2c1c913b539bb2685739&oe=5EC7A585"
      };
    }
  }
};
</script>
