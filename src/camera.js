//dom
const cameraButton = document.querySelector(".camera-button")
const previewPlayer = document.querySelector("#preview")


//functions
function cameraStart() {
  console.log(navigator)
}

//event
cameraButton.addEventListener("click", cameraStart)


function videoStart() {
  navigator.mediaDevices.getUserMedia({ video: true, autio: true})
  .then(stream => previewPlayer.srcObject = stream)
}