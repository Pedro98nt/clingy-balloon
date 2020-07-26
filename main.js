//Icon vector created by rawpixel.com - www.freepik.com

var el = document.querySelector(".element");
var elX = el.getBoundingClientRect().x + el.offsetWidth / 2;
var elY = el.getBoundingClientRect().y + el.offsetHeight / 2;

function followMouse(e) {
  var moveX = e.clientX - elX;
  var moveY = e.clientY - elY;
  var radians = Math.atan2(moveY, moveX);
  var degrees = (radians * (180 / Math.PI));
  requestAnimationFrame(update.bind(update,moveX, moveY, degrees));
}

function update(moveX, moveY, deg) {
  el.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${deg}deg)`;
}

document.addEventListener("mousemove", function(e) {
  followMouse(e);
});
