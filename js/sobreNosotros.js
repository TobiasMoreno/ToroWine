document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  let timer;

  const items = document.querySelectorAll(".itemCarrusel");
  const totalItems = items.length;

  const nextButton = document.querySelector("#next");
  const prevButton = document.querySelector("#prev");

  function showItem(index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block"; // Mostrar el elemento actual
      } else {
        item.style.display = "none"; // Ocultar los demás elementos
      }
    });
  }

  // Methods
  function prevItem() {
    currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    showItem(currentIndex);

    resetInterval();
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);

    resetInterval();
  }

  // Mostrar el primer elemento al cargar la página
  showItem(currentIndex);

  // Interval
  function runInterval() {
    timer = setInterval(nextItem, 4000);
  }

  function resetInterval() {
    clearInterval(timer);
    runInterval();
  }

  runInterval();

  // Botones
  nextButton.addEventListener("click", nextItem);
  prevButton.addEventListener("click", prevItem);
});
