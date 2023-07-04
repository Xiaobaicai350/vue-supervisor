<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="预估AQI">
        <el-input v-model="form.vAQILevel"></el-input>
      </el-form-item>
      <el-form-item label="网格地址">
        <el-select v-model="form.address" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="即时反馈">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>

      <el-form-item label="异常描述">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { insertSuperviseInfo } from "@/apis/supervisor.js";
export default {
  data() {
    return {
      form: {
        supervisorId: 1,
        vAQILevel: 0,
        address: "",
        // 这个没用
        delivery: true,
        description: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      const data = await insertSuperviseInfo(this.form);
      console.log(data);
      console.log("submit!");
      this.openMessage();
      this.form = {};
    },
    openMessage() {
      this.$message({
        message: "恭喜你，提交成功啦",
        type: "success",
      });
    },
  },
};
</script>

<style></style>
