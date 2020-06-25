<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Công cụ quản trị mục tiêu OKR</span>
              <el-button style="float: right; padding: 3px 0" type="text">Cài đặt</el-button>
            </div>
            <div class="d-flex">
              <img
                src="https://i0.wp.com/ooc.vn/wp-content/uploads/2019/09/OKR.png?fit=720%2C480&ssl=1"
                class="image"
              />
              <p
                class="description"
              >Tiện tích công cụ quản trị mục tiêu giúp doanh nghiệp của bạn thống nhất theo một hướng đi chung,...</p>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Đặt KPI</span>
              <el-button style="float: right; padding: 3px 0" type="text">Cài đặt</el-button>
            </div>
            <div class="d-flex">
              <img
                src="https://giaiphaptinhhoa.com/wp-content/uploads/2019/12/the-diem-can-bang-kpi-1.jpg"
                class="image"
              />
              <p
                class="description"
              >Giúp cho doanh nghiệp của bạn dễ dang đặt KPI cho từng cá nhân, từng phòng ban</p>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Hệ thống Check-in</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                class="installed"
              >Đã cài đặt</el-button>
            </div>
            <div class="d-flex">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbUfQTR8kKQ4eMwHu9G99yeulwX12AzYwgkA&usqp=CAU"
                class="image"
              />
              <p
                class="description"
              >Dễ dàng, an toàn, ... giúp doanh nghiệp yên tâm khi cho nhân viên làm việc từ xa</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.d-flex {
  display: flex;
  .image {
    width: 200px;
  }
  .description {
    color: gray;
  }
}
.installed {
  color: #67c23a;
}
</style>

<script>
export default {};
</script>