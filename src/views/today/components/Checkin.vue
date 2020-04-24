<template>
  <div class="block">
    <checkin-screenshot />
    <!-- <el-timeline>
      <el-timeline-item
        v-for="(item, index) of timeline"
        :key="index"
        :timestamp="item.timestamp"
        placement="top"
      >
        <el-card>
          <h4><el-button type="text" @click="showDetail(index)">View detail</el-button></h4>
          <p>Check-in at {{ item.timeNeed }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-dialog
      title="Detail check-in"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <img :src="image" style="width: 100%;">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog> -->
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
          timestamp: "8:00AM",
          image: 'https://i.imgur.com/h2beBX4.png',
          timeNeed: '2019/4/20 20:46',
          createAt: "2019/4/20 20:46 "
        },
        {
          id: 2,
          timestamp: "12:00AM",
          image: 'https://i.imgur.com/h2beBX4.png',
          timeNeed: "2019/4/21 20:46",
          createAt: "2019/4/21 20:46"
        },
        {
          id: 3,
          timestamp: "14:00PM",
          image: 'https://i.imgur.com/h2beBX4.png',
          timeNeed: "2019/4/22 20:46",
          createAt: "2019/4/21 20:46"
        },
        {
          id: 4,
          timestamp: "16:00PM",
          image: 'https://i.imgur.com/h2beBX4.png',
          content: "2019/4/23 20:46",
          createAt: "fsdfsdf"
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
