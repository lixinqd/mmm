//封装一个方法 用于获取地址栏传递的参数

function getSearch(k){
 //获取地址栏的参数
 var search = location.search;
 //得到这类数据 "?key=2&name=%E9%B9%8F%E9%B9%8F&age=18"
 //%E9%B9%8F%E9%B9%代表有中文

if(search.length == 0){
    return false;
}

 //如果参数中含有中文 需要转码成中文
 search = decodeURI(search);// "?key=2&name=鹏鹏&age=18"

 //去掉问号 获取问号后面的数据
 search = search.slice(1); // key=2&name=鹏鹏&age=18

 //得到键值对字符串数组
 var arr = search.split("&");// ["key=2", "name=鹏鹏", "age=18"]

 //创建一个空对象
 var obj = {};
 //遍历数组 取出键和值 存储到对象中
 arr.forEach(function(v,i){ // v 表示每一项   "age=18"
    var key = v.split("=")[0];// 键 age ...
    var value = v.split("=")[1];// 值 18...
    // 点语法和中括号语法的区别在于, 中括号语法会解析变量
    obj[key] = value;

 })
// return obj//这里是返回出数据对象
return obj[k] || obj;//这里是返回出每个键对应的值 比如传入id 可以获得id对应的值 
}


//接收打印
// 解析地址栏参数的函数
//   var age = getSearch("desc");
//   console.log( age );
