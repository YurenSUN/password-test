KEY = "74356"
CURKEY = ""

function checkPassword() {
  if (CURKEY === KEY) {
    // Change image src to success box
    document.getElementById("box-img").src = "placeholder-success.png";
    // hide number input keyboards
    document.getElementById("number-keyboard").style = "display: none;";
  } else {
    // Reset current key
    CURKEY = "";
    setShownPassword();
  }
}

// Change the password shown in webpage
function setShownPassword(){
  console.log(CURKEY)
  var inputTexts = document.getElementsByClassName("password-digit");
  var curKeyLen = CURKEY.length
  for (let i = 0; i < 5; i++) { 
    if (i < curKeyLen){
      inputTexts[i].value = CURKEY[i];
    }else{
      inputTexts[i].value = "";
    }
  }
}

// Number input listener
function updateCurrentKey(input) {
  // check whether delete last number
  if (input == "删除") {
    if (CURKEY) {
      CURKEY = CURKEY.substring(0, CURKEY.length - 1);
    }
  } else {
    CURKEY += input;
  }

  // Show current input
  setShownPassword();

  // Reached 5 digit, check correct or not
  if (CURKEY.length >= 5) {
    checkPassword();
  }
}

let numberInputs = document.getElementsByClassName("btn btn-light w-100 number-input");
numberInputs = Array.from(numberInputs);
// console.log(numberInputs[0].innerHTML)
numberInputs.forEach(btn => {
  btn.addEventListener("click", (event) => {
    updateCurrentKey(btn.innerHTML)
  });

});

updateCurrentKey();

