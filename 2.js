// 加载 图像文件(url路径)
function loadImage(src){
  // 过滤掉 非 image 类型的文件
  if(!src.type.match(/image.*/)){
    if(window.console){
      console.log("选择的文件类型不是图片: ", src.type);
    } else {
      window.confirm("只能选择图片文件");
    }
    return;
  }

  // 创建 FileReader 对象 并调用 render 函数来完成渲染.
  var reader = new FileReader();
  // 绑定load事件自动回调函数
  reader.onload = function(e){
    console.log("fileReader.onload",e);
    // 调用前面的 render 函数
    render(e.target.result);
  };
  // 读取文件内容
  reader.readAsDataURL(src);
};
