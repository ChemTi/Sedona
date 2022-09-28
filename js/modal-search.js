const modal = document.querySelector(".modal-search");
const buttonSearch = document.querySelector(".search__button-search");
const buttonFind = modal.querySelector(".modal-search__button-find");
const dateIn = modal.querySelector(".modal-search__date-in");
const dateOut = modal.querySelector(".modal-search__date-out");
const adults = modal.querySelector(".modal-search__adults-count");
const kids = modal.querySelector(".modal-search__kids-count");
const form = modal.querySelector(".modal-search__form");

/*
// open/close modal by button
buttonSearch.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.toggle("modal-show");
  e.stopPropagation();
  // adults.focus();
});

// close modal by click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest(".modal-search"))
    modal.classList.remove("modal-sh");
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
  if (!adults.value || !kids.value) {
    e.preventDefault();
    alert("Вы не ввели дату ЗАЕЗДА или дату ВЫЕЗДА");
  } else localStorage.setItem(adults, adults.value);
});
*/
/* --------------------------- other way & form validation -----------------------*/


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.setItem(adults.value);
} catch (err) {
  isStorageSupport = false;
}

buttonSearch.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.toggle("modal-show");
  e.stopPropagation();

  if (storage) {
    adults.value = storage;
    kids.focus();
  } else {
    adults.focus();
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest(".modal-search"))
    modal.classList.remove("modal-show");
    modal.classList.remove("modal-error");
});

form.addEventListener('submit', (e) => {
  if (!adults.value || !kids.value || !dateIn.value || !dateOut.value) {
    e.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem(adults, adults.value);
    }
  }
});

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      e.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});

