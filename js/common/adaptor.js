/**
 * Created by Jepson on 2018/9/22.
 */
//通过js动态监测屏幕宽度的变化来计算html根字体的大小  来实现rem布局

// js中给 html 设置 font-size
// 公式: 当前屏幕宽度 / 设计图 = fontSize / 基准值
//       fontSize = 当前屏幕宽度 / 设计图 * 基准值
var design = 640;//设计图尺寸
var base = 100;//基准值

function responsive() {
  var pageWidth = window.innerWidth; // 拿到屏幕宽度

  if (pageWidth < 320) {
    pageWidth = 320;
  }
  if (pageWidth > 640) {
    pageWidth = 640;
  }

  //  fontSize = 当前屏幕宽度 / 设计图 * 基准值
  var size = pageWidth / design * base;

  // 设置给 html 根字体大小
  document.documentElement.style.fontSize = size + "px";
}

// 一进入页面, 调用一次
responsive();
// 监测屏幕宽度变化
window.addEventListener("resize", responsive);
