<!-- 这个页面主要用来列出已提交的异常信息 -->
<template>
  <div>
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="id" label="id" width="40"> </el-table-column>
      <el-table-column prop="address" label="地址" width="100">
      </el-table-column>
      <el-table-column prop="description" label="描述信息"> </el-table-column>
      <el-table-column prop="vAQILevel" label="预估AQI等级" width="110">
      </el-table-column>
      <el-table-column prop="status" label="是否已委派">
        <template slot-scope="scope">
          <span v-if="scope.row.status === 1">已委派</span>
          <span v-else-if="scope.row.status === 0">未委派</span>
        </template>
      </el-table-column>
      <el-table-column prop="supervisorId" label="AQI检测员id">
      </el-table-column>
      <el-table-column prop="updateTime" label="异常信息提交时间">
      </el-table-column>
      <el-table-column label="异常信息提交时间" width="100">
        <el-button @click="dialogVisible = true" type="primary"
          >details</el-button
        >
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="2023/7/4" placement="top">
            <el-card>
              <h4>进行实地AQI测试</h4>
              <p>胥天昊 提交于 2023/7/4 20:46:31</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2023/7/4" placement="top">
            <el-card>
              <h4>进行委派操作</h4>
              <p>李子衿 提交于 2023/7/4 20:45:23</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2023/4/4" placement="top">
            <el-card>
              <h4>提交异常申请</h4>
              <p>王弈超 提交于 2023/7/4 20:43:32</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { ListExInformation } from "@/apis/supervisor.js";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
    };
  },
  async mounted() {
    const data = await ListExInformation();
    console.log(data);
    for (let i = 0; i < data.data.length; i++) {
      data.data[i].updateTime = data.data[i].updateTime.substring(0, 19);
    }
    this.tableData = data.data;
  },
  methods: {
    showDetails() {
      console.log("细节");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style></style>
