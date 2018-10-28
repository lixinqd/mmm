//省钱控商品详情
//入口函数
$(function(){
//获取商品id 用于传参
var productid = getSearch('productid')||20;
console.log(productid);


//发送请求 获取省钱控商品详情数据渲染页面
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    data:{
        productid: productid 
    },
    dataType: 'json',
    success: function(info){
        console.log(info);
         //将获取到的数据和模板进行绑定 渲染到页面
         var htmlStr = template('tmp',info);
         $('.product_container').html(htmlStr);


    }

})



})










