const modal = document.querySelector(".modal-search");
const buttonSearch = document.querySelector(".search__button-search");

// buttonSearch.onclick = (evt) => {
//   evt.preventDefault();
//   modal.classList.toggle("display-none");
// };

// buttonSearch.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   if (modal.classList.contains("display-none")) {
//     modal.classList.remove("display-none");
//   } else {
//     modal.classList.add("display-none");
//   }
// });


buttonSearch.addEventListener("click", (evt) => {
  evt.preventDefault();
  modal.classList.toggle("display-none");
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    modal.classList.add("display-none");
  }
})
