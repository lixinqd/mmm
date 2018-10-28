//比价搜索

//入口函数
$(function () {
    //向服务器请求比价搜索的数据 通过模板引擎渲染页面
    //1 (1)请求标题数据 并渲染
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorytitle',
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            //将获取到的数据和模板进行绑定渲染到页面
            var htmlStr = template('t-tpl', info);
            $('.main').html(htmlStr);



            //获取每个标题下面内容的ul 添加隐藏的类
            // $('.category-content').addClass('current');

            //获取每个标题的li 循环遍历 注册点击事件 点击切换 li下面的内容显示与隐藏 排他
        }

    })


        //ajax是异步的

    //2.....通过事件委托给每个标题注册点击事件
    $('.main').on('click','.title1',function(){
        //  $('.category-content').removeClass('hide')
        // alert('niaho')
        $(this).addClass('current').siblings().removeClass('current')
        // $(this).siblings().children().addClass('hide');

        //点击时获取当前li的titleid 用于传递给每个li下面的ul发送请求获取数据
        var titleid = $(this).find('a').attr('titleid');
        // console.log(titleid);
        //(2) 请求标题下面内容的展示数据
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getcategory',
            data: { titleid: titleid }||0,
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr = template('c-tpl',info);
                $('.category-content').html(htmlStr);
            }
        })

    })
        

})




























