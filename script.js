let container = document.getElementsByClassName("container")[0];
let balls = document.getElementsByClassName("ball");
container.addEventListener("mousemove", function (event) {
  console.log(event);
  // this.style.background = "red";
  // target.innerText = "X :"+event.screenX+" Y : "+event.screenY;
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = event.clientX + (i + i * Math.random() * 100) + "px";

    balls[i].style.transform = "scale(" + 2 * Math.random() + ")";

    balls[i].style.background =
      "rgb(" +
      parseInt(Math.random() * 256) +
      "," +
      parseInt(Math.random() * 256) +
      "," +
      parseInt(Math.random() * 256) +
      ")";

    balls[i].style.borderRadius = parseInt(Math.random() * 30) + "px";

    balls[i].style.top = event.clientY + (i + i * Math.random() * 30) + "px";
  }
});
