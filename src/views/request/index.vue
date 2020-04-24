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
              <el-tab-pane label="Request detail" name="activity">
                <request-detail />
              </el-tab-pane>
              <el-tab-pane label="Check-in" name="timeline">
                <checkin />
              </el-tab-pane>
              <el-tab-pane label="Comment" name="account">
                <comment />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import RequestDetail from './components/RequestDetail'
import Checkin from './components/Checkin'
import Comment from './components/Comment'

export default {
  name: 'Profile',
  components: { UserCard, RequestDetail, Checkin, Comment },
  data() {
    return {
      user: {},
      activeTab: 'activity'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: 'Phạm Ngọc Hòa',
        role: 'IT Department',
        email: 'thaycacac@gmail.com',
        avatar: 'https://lh3.googleusercontent.com/proxy/cHWXvZbjjtJbcQzDl_hOIbIABgc5AALO0IGrXlJpsUJZKhVw2Tq2CYOoo6jNyuejtAJHGqaQkV8-nkydOCfovy8Lcg5oUrB17R7_fa-xFVrYtGE'
      }
    }
  }
}
</script>
