const modal = document.querySelector(".modal-search");
const buttonSearch = document.querySelector(".search__button-search");

// open/close modal by button
  buttonSearch.addEventListener("click", (evt) => {
    evt.preventDefault();
    modal.classList.toggle("display-none");
    evt.stopPropagation();
  });

  // close modal by click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest(".modal-search"))
    modal.classList.add("display-none")
  });

// close modal by Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      modal.classList.add("display-none");
    }
  })
