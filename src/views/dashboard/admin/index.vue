<template>
  <div>
    <div class="dashboard-editor-container">
      <el-row class="time-work">
        <el-col :span="5">
          <time-work title="Worked Today" time="5h 46m" date="June 24, 2020" />
        </el-col>
        <el-col :span="5">
          <time-work title="Worked This Week" time="33h 40m" date="June 22, 2020 - June 28, 2020" />
        </el-col>
        <el-col :span="4">
          <time-work title="Worked Last Week" time="33h 55m" date="June 15, 2020 - June 21, 2020" />
        </el-col>
        <el-col :span="5">
          <time-work title="Edited Work Time" time="0h 32m" date="Total 2 Edit" type="warning" />
        </el-col>
        <el-col :span="5">
          <time-work title="Worked Last Week" time="139h 27m" date="June 2020" />
        </el-col>
      </el-row>

      <el-row class="time-work">
        <el-col :span="4">
          <time-week date="MON, June 24, 2020" :process="35" time="3h 30m" type="warning" />
        </el-col>
        <el-col :span="4">
          <time-week date="FRI, June 24, 2020" :process="75" time="7h 34m" />
        </el-col>
        <el-col :span="4">
          <time-week date="WED, June 24, 2020" :process="20" time="1h 50m" type="exception" />
        </el-col>
        <el-col :span="4">
          <time-week date="THU, June 24, 2020" :process="95" time="9h 45m" />
        </el-col>
        <el-col :span="4">
          <time-week date="TUE, June 24, 2020" :process="52" time="5h 10m" type="warning" />
        </el-col>
        <el-col :span="4">
          <time-week date="SAT, June 24, 2020" :process="84" time="8h 13m" />
        </el-col>
      </el-row>

      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="chart-wrapper">
            <pie-chart />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="chart-wrapper">
            <pie-chart />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import PanelGroup from "./components/PanelGroup";
import LineChart from "./components/LineChart";
import RaddarChart from "./components/RaddarChart";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import TimeWork from "./components/TimeWork";
import TimeWeek from "./components/TimeWeek";
import Push from "push.js";

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
};

export default {
  name: "DashboardAdmin",
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TimeWork,
    TimeWeek
  },
  methods: {
    push() {
      Push.create("FWork", {
        body: "You need checkin at 14:00PM",
        icon: "/icon.png",
        timeout: 4000,
        onClick: function() {
          window.focus();
          this.close();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.time-work {
  background: white;
  margin-bottom: 30px;
}

.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
