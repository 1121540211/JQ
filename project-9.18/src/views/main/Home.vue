<template>
  <el-container class="home-container">
    <!-- 侧边栏 -->
    <el-aside>
      <!-- 侧边栏区域 -->
      <el-menu background-color="#333744" text-color="#fff" router active-text-color="#ffd04b">
        <!-- 菜单区域 -->
        <el-menu-item v-for="(item,index) in arr" :key="index" :index="item.path">
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "Home",
          path: "/home/Welcome",
        },
        {
          name: "PageA",
          path: "/home/a",
        },
        {
          name: "PageB",
          path: "/home/b",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 撑满全屏 */
.home-container {
    width: 100%;
  height: 100%;
  position: absolute;
}
.home-container > .el-aside {
  background-color: #353e4f;
  color: #333;
  width: 200px;
  text-align: center;
  /* line-height: 200px; */
  height: 100%;
}
.el-menu {
  border-right: none;
}
.home-container .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 100%;
}
  
</style>
