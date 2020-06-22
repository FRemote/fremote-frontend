<template>
  <div class="wrap-time-week">
    <p class="date">{{date}}</p>
    <el-progress :stroke-width="20" :percentage="process" :status="type" :show-text="false"></el-progress>
    <p class="time">{{time}}</p>
  </div>
</template>

<style lang="scss" scoped>
.wrap-time-week {
  text-align: center;
  padding: 15px;
  .date {
    color: #283593;
    font-weight: bold;
  }
  .time {
    color: gray;
    font-weight: 300;
    font-size: 0.9rem;
  }
  .warning {
    color: #e6a23c;
  }
}
</style>

<script>
export default {
  props: {
    date: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    },
    process: {
      type: Number,
      default: 50
    },
    type: {
      type: String,
      default: "success"
    }
  }
};
</script>