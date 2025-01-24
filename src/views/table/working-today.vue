<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="200px" align="center" label="Employee">
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column width="300px" align="center" label="Department">
        <template slot-scope="{ row }">
          <span>{{ row.department }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="150">
        <template slot-scope="{ row }">
          <el-tag :type="row.status ? 'success': 'danger'">
            {{ row.status === true ? 'Working' : 'Not working' }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Processing" min-width="400">
        <template slot-scope="{ row }">
          <el-progress :text-inside="true" :stroke-width="20" :percentage="parseFloat((row.done / row.total * 100).toFixed(2))" :status="status(row)" />
          <span>{{ row.done + "/" + row.total }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="{ row }">
          <router-link :to="`working-today/${row.id}`">
            <el-button
              type="primary"
              size="small"
              @click="row.edit = !row.edit"
            >
              View
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <el-container>
      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" style="margin: 0 auto;" />
    </el-container>
  </div>
</template>

<script>
import { fetchList } from "@/api/article"
import Pagination from '@/components/Pagination'
import wtData from "./wt-data";

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    };
  },
  components: {
    Pagination
  },
  created() {
    setInterval(() => {
      this.getList();
      this.listLoading = false
    }, 500)
  },
  methods: {
    async getList() {
      this.listLoading = true;
      // const { data } = await fetchList(this.listQuery);
      // console.log(data);
      // const items = data.items;

      const items = wtData;
      this.list = items.map(v => {
        this.$set(v, "edit", false); // https://vuejs.org/v2/guide/reactivity.html
        v.originalTitle = v.name; //  will be used when user click the cancel botton
        return v;
      });
      this.listLoading = false;
    },
    status(row) {
      const percent = (row.done / row.total * 100).toFixed(2)
      if(percent < 25) {
        return 'exception'
      } else if (percent>=25 && percent < 50) {
        return 'warning'
      } else if (percent >= 50 && percent < 80) {
        return ''
      } else {
        return 'success'
      }
    },
    cancelEdit(row) {
      row.title = row.originalTitle;
      row.edit = false;
      this.$message({
        message: "The title has been restored to the original value",
        type: "warning"
      });
    },
    confirmEdit(row) {
      row.edit = false;
      row.originalTitle = row.title;
      this.$message({
        message: "The title has been edited",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
