//省钱控
//入口函数
$(function(){
//发送请求获取省钱控的数据 渲染页面
//pageid : 页数id   (Number) 不传默认返回第一页数据
console.log(getSearch());
$.ajax({
    type: 'get',
    data: getSearch(),
    url: 'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType: 'json',
    success: function(info){
        console.log(info);
         //将获取到的数据和模板进行绑定 渲染到页面
     
         //创建一个空数组 用于存储pageid
         var arr = [];
        //计算总页数
        var pages = Math.ceil(info.totalCount/info.pagesize);
    
        for ( var i = 0 ; i < pages ; i++) {
         arr.push({pageid: i+1,pages: pages});
        }
       
        info.pageList = arr;
        console.log(info);

info.pageid = getSearch('pageid');

           var htmlStr = template('tpl',info);
         $('.m_product').html(htmlStr);

         $('#select').change(function(){
             var value = $(this).val();
             location.href = "moneyctrl.html?pageid="+value;
         })
    }

})























})







