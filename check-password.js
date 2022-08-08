KEY = "74356"
CURKEY = ""

function checkPassword() {
  if (CURKEY === KEY) {
    // Change image src to success box
    document.getElementById("box-img").src = "placeholder-success.png";
    // hide number input keyboards
    document.getElementById("number-keyboard").style="display: none;";
  } 

  // Reset current key
  CURKEY = "";
  document.getElementById("password-input").innerHTML = CURKEY;
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
  document.getElementById("password-input").innerHTML = CURKEY;

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

