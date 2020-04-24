<template>
  <div class="block">
    <div style="margin-left: 10px; margin-right: 10px">
      <el-slider
        v-model="value"
        :step="1"
        :min="1"
        :max="4"
      >
      </el-slider>
    </div>
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item" placement="top" />
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
      timeMorningStart: 8,
      timeMorningEnd: 12,
      timeAfterNoonStart: 14,
      timeAfterNoonEnd: 18,
      timeline: []
    }
  },
  watch: {
    value(val) {
      const timeline = []
      for(let i = this.timeMorningStart; i < this.timeMorningEnd; i += this.value) {
        timeline.push(this.getTime(i))
      }
      timeline.push(this.getTime(this.timeMorningEnd))
      for(let i = this.timeAfterNoonStart; i < this.timeAfterNoonEnd; i += this.value) {
        timeline.push(this.getTime(i))
      }
      timeline.push(this.getTime(this.timeAfterNoonEnd))
      this.timeline = timeline
    }
  },
  mounted() {
    const timeline = []
    for(let i = this.timeMorningStart; i < this.timeMorningEnd; i += this.value) {
      timeline.push(this.getTime(i))
    }
    timeline.push(this.getTime(this.timeMorningEnd))
    for(let i = this.timeAfterNoonStart; i < this.timeAfterNoonEnd; i += this.value) {
      timeline.push(this.getTime(i))
    }
    timeline.push(this.getTime(this.timeAfterNoonEnd))
    this.timeline = timeline
  },
  methods: {
    getTime(val) {
      if(val <= 12) {
        return val + ':00AM'
      } else {
        return val + ':00PM'
      }
    }
  }
}
</script>
