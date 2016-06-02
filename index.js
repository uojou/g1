var el_file = document.getElementById("j_file");
el_file.onchange=function(e){
  console.log(e);
  console.log(el_file.files);
  loadImage(el_file.files[0])

}
