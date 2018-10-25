var menuButton = document.querySelector(".page-header__toggle");
var menuUser = document.querySelector(".page-header__item--user");
var menuNav = document.querySelector(".page-header__item--nav");

menuButton.classList.remove("visually-hidden");
menuUser.classList.add("page-header__item--hidden");
menuNav.classList.add("page-header__item--hidden");

menuButton.addEventListener("click", function () {
  menuUser.classList.toggle("page-header__item--hidden");
  menuNav.classList.toggle("page-header__item--hidden");
  menuButton.classList.toggle("page-header__toggle--open");
  menuButton.classList.toggle("page-header__toggle--close");
});


if (document.querySelector(".contacts__map")) {
  var maps = document.querySelectorAll(".contacts__map-frame")
  maps[0].classList.toggle("contacts__map-frame--hidden");
  maps[1].classList.toggle("contacts__map-frame--hidden");
}

var openModal = function (oEvent) {
  oEvent.preventDefault();
  document.querySelector(".modal-add-cart").classList.remove("visually-hidden");
}

var closeModal = function (oEvent) {
  oEvent.preventDefault();
  document.querySelector(".modal-add-cart").classList.add("visually-hidden");
}

var catalogItems = document.querySelectorAll(".catalog__item-price");
if (catalogItems) {
  for (var i = 0; i < catalogItems.length; i++) {
    catalogItems[i].addEventListener("click", openModal);
  }
}

if (document.querySelector(".featured__book-button"))
  document.querySelector(".featured__book-button")
    .addEventListener("click", openModal);

document.querySelector(".modal-add-cart__add-cart-button")
  .addEventListener("click", closeModal);
