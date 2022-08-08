var KEY = "74356"
var CURKEY = ""

function checkPassword() {
  if (CURKEY === KEY) {
    // Change image src to success box
    document.getElementById("box-img").src = "placeholder-success.png";
    // hide number input keyboards and displayed password
    document.getElementById("number-keyboard").style = "display: none;";
    document.getElementById("password-input").style = "display: none;";
  } else {
    // Reset current key
    CURKEY = "";
    setShownPassword();
  }
}

// Change the password shown in webpage
function setShownPassword() {
  var inputTexts = document.getElementsByClassName("password-digit");
  var curKeyLen = CURKEY.length
  for (let i = 0; i < 5; i++) {
    if (i < curKeyLen && CURKEY[i]) {
      inputTexts[i].value = CURKEY[i];
    } else {
      inputTexts[i].value = "";
    }
  }
}

// Number input listener
async function updateCurrentKey(input) {
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
    // Use settimeout to show 5 digits before updating
    setTimeout("checkPassword()", "100");
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

// Show empty password at first
setShownPassword();

// // Disable scaling, work in safari
// // From https://www.yisu.com/zixun/353123.html
// window.addEventListener(
//   "touchmove",
//   function (event) {
//     if (event.scale !== 1) {
//       event.preventDefault();
//     }
//   }, {
//   passive: false
// }
// );

// Show keyboard when click input box
document.getElementById("password-input").addEventListener("click", (event) => {
  console.log("clicked");
  document.getElementById("number-keyboard").style = "display:block";
});
