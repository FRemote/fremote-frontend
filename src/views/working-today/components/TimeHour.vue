<template>
  <div>
    <el-progress
      :class="working ? 'hours' : ''"
      :stroke-width="20"
      :percentage="minute / 60 * 100"
      :status="minute / 60 * 100 | statusFilter"
      :show-text="false"
    ></el-progress>
    <p class="time-hour">{{ time }}</p>
  </div>
</template>

<script>
export default {
  filters: {
    statusFilter(percent) {
      if (percent < 20) {
        return "warning";
      }
      return "success";
    }
  },
  props: {
    working: {
      type: Boolean,
      default: true
    },
    minute: {
      type: Number,
      default: 0
    },
    from: {
      type: Number,
      default: 0
    },
    time: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.el-progress-bar__outer {
  border-radius: 0 !important;
}
.el-progress-bar__inner {
  border-radius: 0;
}
.time-hour {
  font-size: 12px;
  color: gray;
  text-align: center;
}
.hours {
  .el-progress-bar__outer {
    background: #ffba00;
  }
}
</style>