document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".imagen");
  const popUp = document.querySelector(".popup--img");
  const popupImg = document.getElementById("popupImage");
  const closeBtn = document.querySelector(".popup--img span");

  imagenes.forEach((image) => {
    image.addEventListener("click", () => {
      popUp.style.display = "flex";
      popupImg.src = image.getAttribute("src");
    });
  });

  closeBtn.addEventListener("click", () => {
    popUp.style.display = "none";
  });

  const video = document.querySelector("video");

  video.addEventListener("canplay", () => {
    video.volume = 0.2;

    video.play();
  });

  // JUGADORES
  // DESCOMENTAR imgContenedor PARA VER POR QUE NO FUNCIONA
  //const imgContenedor = document.querySelector("img--contenedor");
  const jugadores = [
    {
      nombre: "TOW Toas",
      img: "img/Jugadores/Toba.jpg",
    },
    {
      nombre: "TOW Cundo",
      img: "img/Jugadores/FacuInsta.jpeg",
    },
    {
      nombre: "TOW Treep",
      img: "img/Jugadores/Trippier.jpg",
    },
    {
      nombre: "TOW Lauta",
      img: "img/Jugadores/Laucha.jpg",
    },
    {
      nombre: "TOW Luketo",
      img: "img/Jugadores/Brachetto.jpg",
    },
    {
      nombre: "TOW El Tetu",
      img: "img/Jugadores/Tetu.jpg",
    },
  ];

  function create(elementType) {
    return document.createElement(elementType);
  }

  jugadores.map((jugador) => {
    const divEsports = create("div");
    divEsports.classList.add("img--esports");

    const section = create("section");

    const h6 = create("h6");
    h6.textContent = jugador.nombre;

    const imgEsports = create("img");
    imgEsports.classList.add("imagen");
    imgEsports.src = jugador.img;

    imgContenedor.appendChild(divEsports);
    divEsports.appendChild(section);
    section.appendChild(h6);
    section.appendChild(imgEsports);
  });

  const divUp = create("div");
  divUp.classList.add("popup--img");
  divUp.setAttribute("id", "popupImgContainer");

  const span = create("span");
  span.setAttribute("id", "closeBtn");
  span.textContent = "&times;";

  const imgPopUp = create("img");
  imgPopUp.setAttribute("id", "popupImage");

  imgContenedor.appendChild(divUp);
  divUp.appendChild(span);
  divUp.appendChild(imgPopUp);
});
