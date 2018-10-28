//商品列表部分
//入口函数
$(function(){
//1 获取分类页标题的id
var categoryid = getSearch('categoryid')||0;
console.log(categoryid);

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


//3 发送请求获取商品内容数据并渲染商品列表
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproductlist',
    data:{
        categoryid: categoryid
        //pageid 不传默认第一页
    },
    dataType: 'json',
    success: function(info){
        // console.log(info);
        //将商品内容数据和模板绑定 渲染到页面
        var htmlStr = template('content-tpl',info);
        $('.procuct_list').html(htmlStr);
    }


})


//4 发送请求获取分页数据 实现分页功能
var pageid = getSearch('categoryid');
// console.log(pageid);
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproductlist',
    data:{
        categoryid: categoryid,
        pageid: pageid
    },
    dataType: 'json',
    success: function(info){
        // console.log(info);// "pagesize": "每页大小", "totalCount": "总条数"
       
        //将商品内容数据和模板绑定 渲染到页面
        // var htmlStr = template('page-tpl',info);
        // $('.page').html(htmlStr);
        
        // tools.fenye({
        //     pageNum : Math.ceil( info['totalCount'] / info['pagesize'] ),   // 总计几页
        //     extraStr: '&categoryid=' + obj['categoryid']   // 额外传参
        // });
    }


})











})