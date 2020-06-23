<template>
  <div class="wrap-work-time">
    <p class="time" :class="type === 'warning' ? 'warning' : ''">{{time}}</p>
    <p class="date">{{content}}</p>
  </div>
</template>

<style lang="scss" scoped>
.wrap-work-time {
  text-align: center;
  .time {
    color: #67c23a;
    font-size: 2.5rem;
    margin: 0;
    font-weight: bold;
  }
  .date {
    color: #bebebe;
    margin-top: 8px;
    font-weight: 300;
    font-size: 0.9rem;
    margin-bottom: 25px;
  }
  .warning {
    color: #e6a23c;
  }
}
</style>

<script>
export default {
  props: {
    time: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "success"
    }
  }
};
</script>