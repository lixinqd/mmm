
//入口函数
$(function(){
//1 向后台发送请求获取导航的菜单数据  通过模板引擎渲染页面
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getindexmenu',
    dataType: 'json',
    success: function(info){
        console.log(info);
        // console.log('.m_nav');
        //将获取到的数据和模板进行绑定渲染到页面
        var htmlStr = template('nav-tpl',info);
        $('.m_nav').html(htmlStr);

        //将后面4个菜单隐藏
        $lastFour = $('.m_nav ul li:nth-last-child(-n+4)');
        // console.log($lastFour);
        $lastFour.addClass('hide');

        //获取更多按钮
        $more = $('.m_nav ul li:nth-child(8)');
        // console.log($more);
        //控制后面4个菜单的显示和隐藏的切换   
        //给更多按钮注册点击事件
        $more.on('click',function(){
            // console.log(111);
            $lastFour.toggleClass('hide');
        })
    }
})


//2 向后台发送请求 获取商品列表的数据渲染页面
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType: 'json',
    success: function(info){
        // console.log(info);
        //将获取到的数据和模板进行绑定 渲染到页面
        var htmlStr = template('tpl',info);
        $('.m_product').html(htmlStr);
    }
})














//      $.ajax({
//         type: "get",
//         url: "/product/queryProduct",
//         data: params,
//         dataType: "json",
//         success: function( info ) {
//           console.log( info )
//           var htmlStr = template( "tpl" , info );
//           $('.lt_product').html( htmlStr );
//         }
//       })
//     }, 1000);
// //   }












})