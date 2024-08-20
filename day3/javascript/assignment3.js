const image = document.getElementById("img");

let offsetX, offsetY;
const staticSrc = "images/cat.jpg";
const gifSrc = "images/happy_cat.gif";

let timeout;

// Event listener for mouse movement
//document.addEventListener("mousemove", handleMouseMove);

// Mouse down event to start dragging
image.addEventListener("mousedown", function (event) {
  offsetX = event.clientX - image.getBoundingClientRect().left;
  offsetY = event.clientY - image.getBoundingClientRect().top;
  document.addEventListener("mousemove", moveImage);
  document.addEventListener("mouseup", stopDragging);
});

// Function to move the image with the mouse
function moveImage(event) {
  image.style.position = "absolute";
  image.src = gifSrc;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    image.src = staticSrc;
  }, 10);
  image.style.left = event.clientX - offsetX + "px";
  image.style.top = event.clientY - offsetY + "px";
}

// Stop dragging when the mouse is released
function stopDragging() {
  document.removeEventListener("mousemove", moveImage);
  document.removeEventListener("mouseup", stopDragging);
}