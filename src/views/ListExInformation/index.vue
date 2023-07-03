<!-- 这个页面主要用来列出已提交的异常信息 -->
<template>
  <el-table :data="tableData" border stripe style="width: 100%">
    <el-table-column prop="id" label="id"> </el-table-column>
    <el-table-column prop="address" label="address"> </el-table-column>
    <el-table-column prop="description" label="description"> </el-table-column>
    <el-table-column prop="status" label="status"> </el-table-column>
    <el-table-column prop="supervisorId" label="supervisorId">
    </el-table-column>
    <el-table-column prop="updateTime" label="updateTime"> </el-table-column>
    <el-table-column prop="vAQILevel" label="vAQILevel"> </el-table-column>
  </el-table>
</template>

<script>
import { ListExInformation } from "@/apis/supervisor.js";
export default {
  data() {
    return {
      tableData: [],
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
};
</script>
<style></style>
