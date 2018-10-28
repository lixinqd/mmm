//商品详情
$(function(){
//发送请求获取商品详情数据 渲染页面
//1 获取分类页标题的id
var categoryid = getSearch('categoryid');
// console.log(categoryid);

//2 发送请求获取商品列表标题数据并渲染
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcategorybyid',
    data: {
        categoryid: categoryid
    },
    dataType: 'json',
    success: function(info){
        // console.log(info);
        //将商品列表标题数据和模板绑定渲染到页面
        var htmlStr = template("title-tpl",info);
        $('.product_title_left').html(htmlStr);
    }
})


//3 获取商品详情的数据 动态渲染到页面

//获取商品id用于请求传值
var productid = getSearch('productid');
console.log(productid);
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproduct',
    data: {
        productid: productid
    },
    dataType: 'json',
    success: function(info){
        console.log(info);
        //将数据和模板绑定 渲染
        var htmlStr = template("top-tpl",info);
        $('.product_top').html(htmlStr);
    }
})

//4 获取商品评论的数据 动态渲染
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproductcom',
    data: {
        productid: productid
    },
    dataType: 'json',
    success: function(info){
        console.log(info);
        //将数据和模板绑定 渲染
        var htmlStr = template("p-tpl",info);
        $('.product_content').html(htmlStr);
    }
})







})