<template>
  <div>
    <mt-swipe>
        <mt-swipe-item v-for="item in bannerlist" :key="item.url">
<img :src="item.img" alt="">
        </mt-swipe-item>
  
    </mt-swipe>
        <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/images/menu1.png" alt />
            <div class="mui-media-body">新闻资讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/images/menu2.png" alt />
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/images/menu3.png" alt />
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/images/menu4.png" alt />
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/images/menu6.png" alt />
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="less">
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:first-child {
      background-color: rgb(255, 134, 154);
    }
    &:nth-child(2) {
      background-color:yellow;
    }
    &:last-child {
      background-color:greenyellow;
    }
    img{
      width:100%;
      height:100%;  
      background-size:cover;
    }
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
     background-color: #fff;
    //  border: none;
   img{
       width:60px;
       height:60px;
   } 
   .mui-media-body{
        font-size: 13px;
    }
}
// .mui-grid-view.mui-grid-9 .mui-table-view-cell {
//     // border: none;
// }
</style>

<script>
import axios from 'axios'
export default {
    data:function(){
        return{
            bannerlist:[]
        }
    },
    methods:{

    },
    //用axios发送请求
    created(){
axios.get("/api/getlunbo")
.then(({data})=>{
    if(data.status == 0){
        this.bannerlist = data.message;
    }
})
    }
}
</script>