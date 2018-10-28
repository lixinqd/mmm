//国内折扣

//入口函数
$(function(){
//1 发送请求获取国内折扣商品列表数据 渲染页面
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getinlanddiscount',
    dataType: 'json',
    success: function (info) {
        console.log(info);
        //将获取到的数据和模板进行绑定渲染到页面
        var htmlStr = template('list-tpl', info);
        $('.product_list').html(htmlStr);

    }

})













})