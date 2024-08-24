const image = document.getElementById("draggableImage");

let offsetX, offsetY;
const staticSrc = "images/cat.jpg";
const gifSrc = "images/happy_cat.gif";

let timeout;

//document.addEventListener("mousemove", handleMouseMove);

image.addEventListener("mousedown", function (event) {
  offsetX = event.clientX - image.getBoundingClientRect().left;
  offsetY = event.clientY - image.getBoundingClientRect().top;
  image.src = gifSrc;
  document.addEventListener("mousemove", moveImage);
  document.addEventListener("mouseup", stopDragging);
});

function moveImage(event) {
  image.style.position = "absolute";
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    image.src = staticSrc;
  }, 1000);
  image.style.left = event.clientX - offsetX + "px";
  image.style.top = event.clientY - offsetY + "px";
}

function stopDragging() {
  document.removeEventListener("mousemove", moveImage);
  document.removeEventListener("mouseup", stopDragging);
}