var hexotp = document.getElementById("hexotp")
var rgbotp = document.getElementById("rgbotp")
var blueval = 0
var blueotp = document.getElementById("blue_val")
var blue = document.getElementById("blue")
var greenval = 0
var greenotp = document.getElementById("green_val")
var green = document.getElementById("green")
var redval = 0
var redotp = document.getElementById("red_val")
var red = document.getElementById("red")
var canvas = document.getElementById('canv')
var ctx = canvas.getContext("2d")
var width = canvas.width
var height = canvas.height
ctx.fillStyle = "#000000"
ctx.fillRect(0, 0, width, height)
var fni

function testZero(hexa) {
	if (hexa.length == 1) {
    return "0" + hexa
	} else {
    return hexa.toString()
	}
}

function fixNums() {
     fni = setInterval(function (){
     redotp.innerHTML = "Red: " + red.value
     redval = testZero(parseInt(red.value).toString(16))
     greenotp.innerHTML = "Green: " + green.value
     greenval = testZero(parseInt(green.value).toString(16))
     blueotp.innerHTML = "Blue: " + blue.value
     blueval = testZero(parseInt(blue.value).toString(16))
     hexotp.innerHTML = "Hexamedical Color Code: #" + redval + greenval + blueval
     rgbotp.innerHTML = "RGB Output: rgb(" + red.value + "," + green.value + "," + blue.value + ")"
     draw()    
    }, 40)
}

function endNums() {
  clearInterval(fni)
}

function draw() {
   ctx.fillStyle = "#" + redval + greenval + blueval
   ctx.fillRect(0, 0, width, height)
}
