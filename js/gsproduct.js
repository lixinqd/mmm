//凑单品

//入口函数
$(function(){
//1 发送请求获取凑单品标题数据 渲染
$.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getgsshoparea',
    dataType: 'json',
    success: function(info){
        console.log(info);
        //将数据和模板绑定渲染
        // var htmlStr = template('title-tpl',info);
        // $('.gs_title ul').html(htmlStr);
    }
})


})





