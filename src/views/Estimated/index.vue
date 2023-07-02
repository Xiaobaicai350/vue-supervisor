<script>
export default {
  data() {
    return {
      imgwrap: [
        { url1: require("@/assets/imgs/wuran1.png") },
        { url2: require("@/assets/imgs/wuran2.png") },
      ],
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url1: require("@/assets/imgs/wuran1.png"),
      url2: require("@/assets/imgs/wuran2.png"),
    };
  },
};
</script>

<template>
  <div>
    <h1>可以根据下方的图片进行预估AQI等级</h1>
    <div class="demo-image">
      <div class="block">
        <el-image
          style="width: 1000px; height: 500px"
          :src="url1"
          fit="contain"
        ></el-image>
      </div>
      <div class="block">
        <el-image
          style="width: 1000px; height: 600px"
          :src="url2"
          fit="contain"
        ></el-image>
      </div>
    </div>
  </div>
</template>

<style></style>
