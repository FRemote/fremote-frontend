<template>
  <div>
    <el-row class="time-work">
      <el-col :span="2">
        <time-hour :from="15" :minute="0" time="7h-8h" :working="false" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="56" time="8h-9h" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="50" time="9h-10h" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="45" time="10h-11h" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="30" time="11h-12h" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="0" time="12h-13h" :working="false" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="55" time="13h-14h" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="50" time="14h-15h" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="30" time="15h-16h" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="40" time="16h-17h" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="45" time="17h-18h" />
      </el-col>
      <el-col :span="2">
        <time-hour :from="15" :minute="0" time="18h-19h" :working="false" />
      </el-col>
    </el-row>
    <el-row style="margin-top: 1rem;">
      <el-col :span="12">
        <time-analytic time="7h 46m" content="Total Time Worked" />
      </el-col>
      <el-col :span="12">
        <time-analytic time="0h 52m" content="Total Inactive Time" type="warning" />
      </el-col>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="task" label="Công việc" width="180"></el-table-column>
      <el-table-column prop="project" label="Dự án" width="180">
        <template slot-scope="{row}">
          <el-tag :type="row.project === 'Fremote' ? 'danger' : 'warning'">{{ row.project }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="totaltime" label="Thời gian"></el-table-column>
      <el-table-column prop="scale" label="Đánh giá">
        <template slot-scope="{row}">
          <el-rate v-model="row.rate" disabled show-score text-color="#ff9900"></el-rate>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import TimeHour from "./TimeHour";
import TimeAnalytic from "./TimeAnalytic";
export default {
  components: {
    TimeHour,
    TimeAnalytic
  },
  data() {
    return {
      tableData: [
        {
          task: "Homepage Redesign",
          project: "Fremote",
          totaltime: "1:27:00",
          rate: "3.7"
        },
        {
          task: "Futures Icon",
          project: "EduKids",
          totaltime: "0:50:10",
          rate: "3.3"
        },
        {
          task: "Futures Icon",
          project: "Fremote",
          totaltime: "1:03:25",
          rate: "3.1"
        },
        {
          task: "Invision comments",
          project: "EduKids",
          totaltime: "2:15:10",
          rate: "4.8"
        }
      ]
    };
  }
};
</script>