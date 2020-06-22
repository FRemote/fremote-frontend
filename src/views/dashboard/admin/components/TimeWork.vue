<template>
  <div class="wrap-work-time">
    <p class="title">{{title}}</p>
    <p class="time" :class="type === 'warning' ? 'warning' : '' ">{{time}}</p>
    <p class="date">{{date}}</p>
  </div>
</template>

<style lang="scss">
.wrap-work-time {
  text-align: center;
  .title {
    color: #283593;
    font-weight: bold;
    margin-top: 25px;
    margin-bottom: 10px;
  }
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
  }
  .warning {
    color: #e6a23c;
  }
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    },
    date: {
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