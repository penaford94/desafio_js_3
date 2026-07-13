const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");

azul.addEventListener("click", function (event) {
  event.currentTarget.style.backgroundColor = "black";
});

rojo.addEventListener("click", function (event) {
  event.currentTarget.style.backgroundColor = "black";
});

verde.addEventListener("click", function (event) {
  event.currentTarget.style.backgroundColor = "black";
});

amarillo.addEventListener("click", function (event) {
  event.currentTarget.style.backgroundColor = "black";
});

let color = "";

const key = document.getElementById("key");
const nuevosDivs = document.getElementById("nuevos-divs");

function crearDiv(colorFondo) {
  const nuevoDiv = document.createElement("div");

  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.backgroundColor = colorFondo;

  nuevosDivs.appendChild(nuevoDiv);
}

document.addEventListener("keydown", function (event) {
  const tecla = event.key.toLowerCase();

  if (tecla === "a") {
    color = "pink";
    key.style.backgroundColor = color;
  } else if (tecla === "s") {
    color = "orange";
    key.style.backgroundColor = color;
  } else if (tecla === "d") {
    color = "lightblue";
    key.style.backgroundColor = color;
  } else if (tecla === "q") {
    crearDiv("purple");
  } else if (tecla === "w") {
    crearDiv("gray");
  } else if (tecla === "e") {
    crearDiv("brown");
  }
});