//白菜价
if(location.href.indexOf('#') < 0 ) {
    localStorage.removeItem('page');
}
//1.渲染当前页面的数据
 render(0);
    //1 发送请求获取导航栏数据 渲染页面
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            //将商品列表标题数据和模板绑定渲染到页面
            var htmlStr = template("title-tpl", info);
            $('.title-content').html(htmlStr);

            var index = localStorage.getItem('page') || 0;
            // console.log(index)
            $('.title-content li').eq(index).addClass('current').siblings().removeClass('current')

            // * 功能: 动态设置 ul 的宽度  (根据子元素的宽度和个数)
            // * 思路分析:
            // *    1. 获取 ul
            // *    2. 计算ul的宽度 (li的个数 * li的宽度)
            // *    3. 设置给 ul
            //  导航栏实现区域滚动
            // 获取 ul 
            var ul = $('.title-content');
            // console.log(ul);
            // 获取所有的li
            var lis = $('.title-content li');
            // console.log(lis);

            var liWidth = 0;
            lis.each(function (i, v) {
                //3 循环计算所有li的宽度
                liWidth += lis.eq(i).width();
                // console.log( lis.eq(i).width());
                //注意lis[0]获取的Dom元素 lis.eq(0)获取的是jQuery元素
            })

            // console.log(liWidth);
            // 将li的总宽度赋值给ul
            ul.width(liWidth);
            // console.log(ul.width());757

            // 3  实现区域滚动
            //为了避免ul的宽度不统一 区域滚动代码需要放在ajax请求成功的里面 每次获取的都是计算后的ul的宽度
            window.addEventListener("load", function () {
                new IScroll(".title-list", {
                    scrollX: true
                });
            });
        }
    })
    // var titleid = getSearch('titleid') || 0;
    // console.log(titleid);

 
    
//2 点击a的时候高亮（添加底部边框）
//因为是动态渲染 所以需要通过事件委托注册点击事件
$('.title-content').on('click', 'a', function (e) {
    //   e.preventDefault();//阻止默认行为  // return false;
    // console.log(111);
    $(this).parent().addClass('current');
    $(this).parent().siblings().removeClass('current')
  
    var titleid =$(this).data("id");
    console.log(titleid);
    
    //点击时渲染对应页面  需要传入titleid  （点击时的渲染和a标签href的跳转不一样）
    render(titleid);

    localStorage.setItem('page',titleid);
    
})







//3 发送请求获取白菜价商品详情数据 渲染页面
//获取titleid用于传参
// var titleid = getSearch('titleid') || 0;
// console.log(titleid);

// $.ajax({

//     type: 'get',
//     data: { titleid: titleid },
//     url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
//     dataType: 'json',
//     success: function (info) {
//         info.titleid = titleid;
//         console.log(info);
//         //将商品列表标题数据和模板绑定渲染到页面
//         var htmlStr = template("product-tpl", info);
//         $('.product_list ul').html(htmlStr);
//     }
// })

function render(set){
    $.ajax({

    type: 'get',
    data: { titleid: set},
    url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
    dataType: 'json',
    success: function (info) {
        // info.titleid = titleid;
        // console.log(info);
        //将商品列表标题数据和模板绑定渲染到页面
        var htmlStr = template("product-tpl", info);
        $('.product_list ul').html(htmlStr);
    }
})
}

//从别的页面跳转过来，要渲染第一页；

//本页面刷新，页面渲染当前页面




















