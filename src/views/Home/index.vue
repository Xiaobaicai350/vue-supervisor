<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script>
import VChart from "vue-echarts";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },

  mounted() {
    const h = this.$createElement;

    this.$notify({
      title: "欢迎来到监督员端",
      message: h(
        "i",
        { style: "color: teal" },
        "近年来，为了促进生态环境保护行业的发展，我国陆续发布了一系列相关政策。并且鼓励公众参与，强化社会监督，依法监测各类生态环境超标行为，持续改善环境质量。基于此背景，建设环保公众监督系统。本系统致力于建立环保公众监督平台，拓宽监督渠道，增加环保工作透明度，不断完善公众监督机制，切实增强环境保护实效。"
      ),
    });
  },
  setup() {
    const option = ref({
      title: {
        text: "您最近的提交工程量",
        // subtext: "Fake Data",
        left: "center",
      },

      legend: {
        left: "center",
        top: "bottom",
        data: ["12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      series: [
        // 第一个图片
        {
          name: "Radius Mode",
          type: "pie",
          radius: [20, 140],
          center: ["25%", "50%"],
          roseType: "radius",
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { value: 40, name: "12月" },
            { value: 33, name: "1月" },
            { value: 28, name: "2月" },
            { value: 22, name: "3月" },
            { value: 20, name: "4月" },
            { value: 15, name: "5月" },
            { value: 12, name: "6月" },
            { value: 10, name: "7月" },
          ],
        },
        // 第二个
        {
          name: "Area Mode",
          type: "pie",
          radius: [20, 140],
          center: ["75%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 5,
          },
          data: [
            { value: 30, name: "12月" },
            { value: 28, name: "1月" },
            { value: 26, name: "2月" },
            { value: 24, name: "3月" },
            { value: 22, name: "4月" },
            { value: 20, name: "5月" },
            { value: 18, name: "6月" },
            { value: 16, name: "7月" },
          ],
        },
      ],
    });

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
