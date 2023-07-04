<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="预估AQI">
        <el-input v-model="form.vAQILevel"></el-input>
      </el-form-item>
      <el-form-item label="网格地址">
        <el-select
          v-model="form.address"
          filterable
          placeholder="请选择活动区域"
        >
          <el-option
            v-for="city in citys"
            :key="city"
            :label="city"
            :value="city"
          ></el-option>
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
      citys: [
        "上海",
        "北京",
        "深圳",
        "重庆",
        "广州",
        "成都",
        "天津",
        "武汉",
        "东莞",
        "西安",
        "杭州",
        "佛山",
        "南京",
        "沈阳",
        "青岛",
        "济南",
        "长沙",
        "哈尔滨",
        "郑州",
        "昆明",
        "大连",
        "南宁",
        "石家庄",
        "厦门",
        "太原",
        "苏州",
        "贵阳",
        "合肥",
        "乌鲁木齐",
        "宁波",
        "无锡",
        "福州",
        "长春",
        "南昌",
        "常州",
        "兰州",
        "中山",
        "惠州",
        "汕头",
        "临沂",
        "淄博",
        "温州",
        "呼和浩特",
        "绍兴",
        "唐山",
        "海口",
        "柳州",
        "徐州",
        "烟台",
        "洛阳",
        "邯郸",
        "珠海",
        "包头",
        "保定",
        "廊坊",
        "大同",
        "江门",
        "赣州",
        "西宁",
        "南通",
        "银川",
        "扬州",
        "遵义",
        "襄阳",
        "鞍山",
        "昆山",
        "莆田",
        "绵阳",
        "盐城",
        "泉州",
        "咸阳",
        "台州",
        "芜湖",
        "株洲",
        "淮安",
        "济宁",
        "吉林",
        "大庆",
        "桂林",
        "秦皇岛",
        "湛江",
        "宜昌",
        "齐齐哈尔",
        "抚顺",
        "上饶",
        "南充",
        "义乌",
        "邢台",
        "泰安",
        "开封",
        "张家口",
        "新乡",
        "聊城",
        "淮南",
        "十堰",
        "宜宾",
        "枣庄",
        "岳阳",
        "慈溪",
        "衡阳",
        "长治",
        "连云港",
        "赤峰",
        "晋江",
        "泸州",
      ],
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
        message: "恭喜你,提交成功啦",
        type: "success",
      });
    },
  },
};
</script>

<style></style>
