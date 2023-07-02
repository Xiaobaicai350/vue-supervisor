<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 740px"
        >
          <el-menu-item index="1" @click="toHome">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>反馈异常信息</span>
            </template>
            <el-menu-item-group>
              <template slot="title">提交异常信息</template>
              <el-menu-item index="1-1" @click="toEstimated"
                >预估AQI等级
              </el-menu-item>
              <el-menu-item index="1-2" @click="toSubmitExInformation"
                >提交异常信息</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group title="提交过的异常信息">
              <el-menu-item index="1-3" @click="toListExInformation"
                >已提交的异常信息</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 16px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>公众监督员名字</span>
        </el-header>
        <!-- 一个分割线 -->
        <el-divider></el-divider>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toEstimated() {
      this.$router.push("/Estimated").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toSubmitExInformation() {
      this.$router.push("/SubmitExInformation").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toListExInformation() {
      this.$router.push("/ListExInformation").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.el-header {
  background-color: #ffffff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
