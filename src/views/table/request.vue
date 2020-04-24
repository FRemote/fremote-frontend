<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.employee" placeholder="Employee" style="width: 200px;" class="filter-item" />
      <el-select v-model="listQuery.status" placeholder="Filter by status" clearable class="filter-item" style="width: 150px">
        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
      </el-select>
      <el-date-picker
        v-model="date1"
        type="datetime"
        placeholder="Start date"
        class="filter-item"
      />
      <el-date-picker
        v-model="date2"
        type="datetime"
        placeholder="From date"
        class="filter-item"
      >
      </el-date-picker>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" >
        Search
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        Export
      </el-button>
      <el-checkbox v-model="showAll" class="filter-item" style="margin-left:15px;" @change="showAllData">
        All
      </el-checkbox>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

       <el-table-column label="Employee" min-width="150px">
        <template slot-scope="{row}">
          <router-link class="link-type" :to="`requests/${row.id}`">{{ row.name }}</router-link>
        </template>
      </el-table-column>

      <el-table-column label="Department" width="160px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.department }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Position" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.position }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Created at" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.createdAt }}</span> <!-- | parseTime('{y}-{m}-{d} {h}:{i}') -->
        </template>
      </el-table-column>

      <el-table-column label="Request at" width="200px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.requestAt }}</span> <!-- | parseTime('{y}-{m}-{d} {h}:{i}') -->
        </template>
      </el-table-column>
     
      <el-table-column label="Status" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.isAccept === true ? 'success' : 'danger'">
            {{ row.isAccept | statusFilter}}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="Actions" align="center" width="100" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <router-link :to="`requests/${row.id}`">
            <el-button type="primary" size="mini">
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
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'
import thaycacac from './data'

const calendarTypeOptions = [
  { key: 'IT', display_name: 'IT Department' },
  { key: 'HR', display_name: 'HR Department' },
  { key: 'OP', display_name: 'OP Department' },
  { key: 'MKT', display_name: 'MKT Department' }
]

const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      return status === true ? 'allow' : 'not allow'
    }
  },
  data() {
    return {
      date1: '',
      date2: '',
      showAll: false,
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      calendarTypeOptions,
      downloadLoading: false
    }
  },
  created() {
    // this.getList()
    this.total = 20
    console.log(thaycacac)
    this.list = thaycacac // .filter(item => item.isAccept === false)
    this.listLoading = false
  },
  methods: {
    showAllData() {
      this.list = thaycacac
    },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'employees'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
