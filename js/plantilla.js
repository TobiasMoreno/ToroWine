document.addEventListener("DOMContentLoaded", () => {
  const plantillaAcordeon = document.querySelector(".plantilla--acordeon");

  const plantilla = [
    {
      nombre: "Luciano Ugarte",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Arquero",
      pie_habil: "Ninguno",
      apodo: "El Maquina",
      mano_habil: "Carece",
      img: "/img/Jugadores/Lucho.jpg",
    },
    {
      nombre: "Fabrizio Marengo",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Arquero",
      pie_habil: "Ninguno",
      apodo: "El Maquina",
      mano_habil: "Carece",
      img: "/img/Jugadores/Fobri.jpg",
    },
    {
      nombre: "Mateo Funes",
      fecha_nac: " 23 / 10 / 1997",
      posicion: "Arquero",
      pie_habil: "Ninguno",
      apodo: "El Maquina",
      mano_habil: "Carece",
      img: "/img/Jugadores/Tetu.jpg",
    },
    {
      nombre: "Tomas Trepatt",
      fecha_nac: " 07 / 04 / 1999",
      posicion: "Arquero",
      pie_habil: "Ninguno",
      apodo: "El Maquina",
      mano_habil: "Carece",
      img: "/img/Jugadores/Trippier.jpg",
    },
    {
      nombre: "Tobias Moreno",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/Toba.jpg",
    },
    {
      nombre: "Lautaro Moreno",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/Laucha.jpg",
    },
    {
      nombre: "Tomas Onofri",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/Capi.jpg",
    },
    {
      nombre: "Nicolas Herrera",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/Mudo.jpg",
    },
    {
      nombre: "Nicolas Colombo",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/Nicolombo.jpg",
    },
    {
      nombre: "Juan Cruz Onofri",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/Biche.jpg",
    },
    {
      nombre: "Joaquin Herrera",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/Joaco.jpg",
    },
    {
      nombre: "Federico Dobla",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/FD7.jpg",
    },
    {
      nombre: "Santiago Salicas",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/Salocas.jpg",
    },
    {
      nombre: "Facundo Torres",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/FacuInsta.jpeg",
    },
    {
      nombre: "Lucas Brachetto",
      fecha_nac: " 25 / 10 / 2000",
      posicion: "Defensor",
      pie_habil: "Derecho",
      apodo: "El Tractor",
      mano_habil: "Carece",
      img: "/img/Jugadores/Brachetto.jpg",
    },
  ];

  plantilla.map((jugador) => {
    const detail = document.createElement("details");
    detail.classList.add("acordeon--details");

    const summary = document.createElement("summary");
    summary.classList.add("acordeon--summary");
    summary.textContent = jugador.nombre;

    const summaryDiv = document.createElement("div");
    const ul = document.createElement("ul");
    summaryDiv.classList.add("summary--div");

    const liFecNac = document.createElement("li");
    liFecNac.textContent = "Fecha de Nacimiento: " + jugador.fecha_nac;

    const liPosicion = document.createElement("li");
    liPosicion.textContent = "Posición: " + jugador.posicion;
    
    const liApodo = document.createElement("li");
    liApodo.textContent = "Apodo: " + jugador.apodo;
    
    const liPieHabil = document.createElement("li");
    liPieHabil.textContent = "Pierna Habil: " + jugador.pie_habil;

    const detailImg = document.createElement("img");
    detailImg.src = jugador.img;

    plantillaAcordeon.appendChild(detail);
    detail.appendChild(summary);
    detail.appendChild(summaryDiv);
    summaryDiv.appendChild(detailImg);
    summaryDiv.appendChild(ul);
    ul.appendChild(liFecNac);
    ul.appendChild(liPosicion);
    ul.appendChild(liApodo);
    ul.appendChild(liPieHabil);
  });

  // --------------------------------------
  // Obtener todos los elementos details
  const detalles = document.querySelectorAll(".acordeon--details");

  function toggleOpen() {}

  function closeAll() {
    detalles.forEach((detalle) => detalle.removeAttribute("open"));
  }

  detalles.forEach((detalle) => {
    const resumen = detalle.querySelector(".acordeon--summary");

    resumen.addEventListener("click", toggleOpen);
  });
});
