//优惠券商品详情

//1 发送请求获取优惠券商品详情数据 渲染页面
//获取titleid用于传参
var couponid= getSearch('couponid')||0;
console.log(couponid);

$.ajax({

    type: 'get',
    data: { couponid: couponid},
    url: 'http://127.0.0.1:9090/api/getcouponproduct',
    dataType: 'json',
    success: function (info) {
        console.log(info);
        //将优惠券商品详情数据和模板绑定渲染到页面
        var htmlStr = template("info-tpl", info);
        $('.coupon_info').html(htmlStr);
    }
})









