function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

pintar(ele);

ele.addEventListener("click", function (event) {
  pintar(event.currentTarget, "yellow");
});