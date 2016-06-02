console.info("1.js");
// 参数，最大高度
var MAX_HEIGHT = 100;
// 渲染
function render(src){
  // 创建一个 Image 对象
  var image = new Image();
  // 绑定 load 事件处理器，加载完成后执行
  image.onload = function(){
    // 获取 canvas DOM 对象
    var canvas = document.getElementById("j_canvasbox");
    // 如果高度超标
    if(image.height > MAX_HEIGHT) {
    // 宽度等比例缩放 *=
    image.width *= MAX_HEIGHT / image.height;
    image.height = MAX_HEIGHT;
    }
    // 获取 canvas的 2d 环境对象,
    // 可以理解Context是管理员，canvas是房子
    var ctx = canvas.getContext("2d");
    // canvas清屏
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 重置canvas宽高
    canvas.width = image.width;
    canvas.height = image.height;
    // 将图像绘制到canvas上
    ctx.drawImage(image, 0, 0, image.width, image.height);
    // !!! 注意，image 没有加入到 dom之中
  };
  // 设置src属性，浏览器会自动加载。
  // 记住必须先绑定事件，才能设置src属性，否则会出同步问题。
  image.src = src;

  return image;
};

var dom1 = render("a.png");
// document.body.appendChild(dom1);
