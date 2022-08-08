KEY = "asdfg"

function checkPassword() {

  var a = document.getElementById("password-input").value;

  if (a === KEY){
    alert("成功")
  } else {
    alert("失败")
  }

}  