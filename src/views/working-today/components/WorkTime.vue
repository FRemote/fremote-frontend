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
      <el-table-column prop="date" label="Date" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
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
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  }
};
</script>