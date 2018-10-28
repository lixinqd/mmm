//优惠券
//1 发送请求获取优惠券商品列表数据 渲染页面
//获取titleid用于传参
// var titleid = getSearch('titleid');
// console.log(titleid);

$.ajax({

    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcoupon',
    dataType: 'json',
    success: function (info) {
        console.log(info);
        //将优惠券商品列表数据和模板绑定渲染到页面
        var htmlStr = template("title-tpl", info);
        $('.coupon_list').html(htmlStr);
    }
})