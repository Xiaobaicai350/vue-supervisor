<script>
export default {
  data() {
    return {
      imgwrap: [
        { url: require("@/assets/imgs/wuran1.png") },
        { url: require("@/assets/imgs/wuran2.png") },
      ],
    };
  },
};
</script>

<template>
  <div>
    <h1>可以根据下方的图片进行预估AQI等级</h1>
    <div class="block">
      <el-carousel trigger="click" height="600px">
        <el-carousel-item v-for="item in imgwrap" :key="item.url">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
