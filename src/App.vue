
<template>
  <div id="app" class="container">
    <mt-header fixed title="CMS"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <router-link to="/" tag="span">
          <i class="mui-icon mui-icon-home"></i>
          <br />主页
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="member">
        <router-link to="/member" tag="span">
          <i class="mui-icon mui-icon-contact"></i>
          <br />会员
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="cart">
        <router-link to="/cart" tag="span">
          <i class="mui-icon iconfont icongouwuche">
            <i class="mui-badge">0</i>
          </i>
          <br />购物车
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="search">
        <router-link to="/search" tag="span">
          <i class="mui-icon mui-icon-search"></i>
          <br />搜索
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selected: ""
    };
  }
};
</script>


<style lang="less" scoped>
.container {
  padding-top: 40px;
  padding-bottom: 40px;
  /*避免PC端网页在页面切换的时候出现的水平滚动条*/
  overflow: hidden;
 
}
//.mint-tab-item默认的文字颜色
.mint-tab-item {
  color: gray;
}
.mui-icon {
  margin-bottom: 3px;
}
.icongouwuche {
  position: relative;
  bottom: -2px;
}
.mui-badge {
  position: absolute;
  top: -4px;
  right: -5px;
}
</style>