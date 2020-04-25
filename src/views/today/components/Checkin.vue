<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) of timeline"
        :key="index"
        :timestamp="item.timestamp"
        placement="top"
      >
        <el-card>
          <p v-if="item.createAt" style="color: #909399">Checked at {{ item.createAt }}</p>
          <el-button type="success" icon="el-icon-check" v-else-if="item.timeNeed" @click="dialogVisible = true">Check-in</el-button>
          <p v-else style="color: #909399">Waiting...</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-dialog
      top="3vh"
      title="Check-in"
      :visible.sync="dialogVisible"
      width="70%"
    >
      <checkin-screenshot />
    </el-dialog>
  </div>
</template>

<script>
import CheckinScreenshot from "./CheckinScreenshot";
export default {
  components: { CheckinScreenshot },
  data() {
    return {
      dialogVisible: false,
      image: '',
      timeline: [
        {
          id: 1,
          timestamp: '8:00AM',
          image: 'https://i.imgur.com/h2beBX4.png',
          timeNeed: '2020/4/25 08:00',
          createAt: '2020/4/25 08:11'
        },
        {
          id: 2,
          timestamp: '12:00AM',
          image: 'https://i.imgur.com/h2beBX4.png',
          timeNeed: '2020/4/25 12:00',
          createAt: '2020/4/25 11:50'
        },
        {
          id: 3,
          timestamp: '14:00PM',
          image: '',
          timeNeed: '2020/4/25 20:46',
          createAt: ''
        },
        {
          id: 4,
          timestamp: '16:00PM',
          image: '',
          timeNeed: '',
          createAt: ''
        }
      ]
    };
  },
  methods: {
    showDetail(index) {
      this.dialogVisible = true
      this.image = this.timeline[index].image
    }
  }
};
</script>

<style>
.el-dialog__body {
  padding: 0 20px;
}
</style>
