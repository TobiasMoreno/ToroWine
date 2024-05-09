document.addEventListener("DOMContentLoaded", () => {
  //   Años con JS
  
  let selectAnio = document.querySelector("#anio");
  
  // Obtén el año actual
  let year = new Date().getFullYear();
  
  // Crea las opciones del año desde 1930 hasta el año actual
  for (let i = 1930; i <= year; i++) {
    let optionAnio = document.createElement("option");
    optionAnio.value = i;
    optionAnio.text = i;
    selectAnio.add(optionAnio);
  };
  //   Meses con JS
  const selectMes = document.querySelector('select[name="mes"]');
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Agregar opciones al menú desplegable
  meses.forEach((mes, index) => {
    const option = document.createElement("option");
    option.value = index.toString();
    option.textContent = mes;
    selectMes.appendChild(option);
  });

  // Dias con JS

  let selectDia = document.querySelector("#dia");

  for (let i = 1; i <= 31; i++) {
    let optionDia = document.createElement("option");
    optionDia.value = i;
    optionDia.text = i;
    selectDia.add(optionDia);
  }

  // Pisos con JS

  let selectPiso = document.querySelector("#pisos");

  for (let i = 1; i <= 49; i++) {
    let optionPiso = document.createElement("option");
    optionPiso.value = i;
    optionPiso.text = i;
    selectPiso.add(optionPiso);
  }

  //Barrios
  const urlBarrios = 'https://datosestadistica.cba.gov.ar/api/action/datastore_search?resource_id=9c791550-f340-4cdf-900b-c1bb7b781b34&q=jones';

fetch(urlBarrios)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Verifica si hay registros
    if (data.result.records.length > 0) {
      // Obtén la referencia del elemento select y del elemento input
      const selectBarrio = document.querySelector('barrioSelect');

      // Itera sobre los resultados y agrega nuevas opciones al select
      data.result.map(result => {
        const option = document.createElement('option');
        // Crea una nueva opción y asigna el valor y el texto
        option.value = result.id;
        option.textContent = result.barrio;
        // Agrega la opción al select
        selectBarrio.appendChild(option);
      });
    } else {
      console.log('No se encontraron resultados para la búsqueda.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });



  // Constantes para el fetch
  const urlLocalidad =
    "https://apis.datos.gob.ar/georef/api/localidades?provincia=cordoba&campos=nombre&max=600";
  const localidadSelect = document.getElementById("localidadSelect");

  // Realizar la solicitud fetch
  fetch(urlLocalidad)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Poblar el select con los datos de la API
      data.localidades.map((localidades) => {
        const option = document.createElement("option");
        option.value = localidades.id;
        option.textContent = localidades.nombre;
        localidadSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error al obtener datos:", error);
    });


});
