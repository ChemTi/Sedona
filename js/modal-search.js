const modal = document.querySelector(".modal-search");
const buttonSearch = document.querySelector(".search__button-search");
const buttonFind = modal.querySelector(".modal-search__button-find");
const dateIn = modal.querySelector("[name=date-in]");
const dateOut = modal.querySelector("[name=date-out]");

// open/close modal by button
buttonSearch.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.toggle("show");
  e.stopPropagation();
  // dateIn.focus();
});

// close modal by click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest(".modal-search"))
    modal.classList.add("display-none")
});

// close modal by Escape
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && !modal.classList.contains("display-none")) {
    e.preventDefault();
    modal.classList.add("display-none");
  }
})

// ease validation
buttonFind.addEventListener("click", (e) => {
  if (!dateIn.value || !dateOut.value) {
    e.preventDefault();
    alert("Вы не ввели дату ЗАЕЗДА или дату ВЫЕЗДА");
  } else localStorage.setItem(dateIn, dateIn.value);
});
