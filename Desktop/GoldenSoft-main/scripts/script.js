$(document).ready(function () {
  $(".owl-carousel-1").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["", " "],
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".owl-carousel-2").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["", " "],
    responsive: {
      0: {
        items: 1.2,
      },
      1000: {
        items: 4,
      },
    },
  });

  document.getElementById("minPrice").addEventListener("input", filterProducts);
  document.getElementById("maxPrice").addEventListener("input", filterProducts);

  function filterProducts() {
    const minPrice =
      parseInt(document.getElementById("minPrice").value.replace(/\D/g, "")) ||
      0;
    const maxPrice =
      parseInt(document.getElementById("maxPrice").value.replace(/\D/g, "")) ||
      Infinity;

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const priceText = card.querySelector(".card-info p").textContent;
      const price = parseInt(priceText.replace(/\D/g, "")) || 0;

      if (price >= minPrice && price <= maxPrice) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});

document.getElementById("minPrice").addEventListener("input", filterProducts);
document.getElementById("maxPrice").addEventListener("input", filterProducts);

function filterProducts() {
  const minPrice = parseInt(document.getElementById("minPrice").value) || 0;
  const maxPrice =
    parseInt(document.getElementById("maxPrice").value) || Infinity;
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const priceText = card.querySelector(".card-info p").textContent;
    const price = parseInt(priceText.match(/\d+/)[0]);

    if (price >= minPrice && price <= maxPrice) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

const findElement = () => {};

const elWrapperProducts = document.querySelector(".cards");
const elProductsTemplate = document.querySelector("#template");

const products = [
  {
    id: 1,
    categories: ["single-door"],
    img: "/img/топ.png",
    title: "Вариативный замок Golden Soft для отеля",
    realPrice: "7 000₽",
    discountPrice: "8 000₽",
  },
];
products.forEach((products) => {
  const newTemplate = elProductsTemplate.Content.cloneNONE(true);

  console.log(newTemplate);

  elWrapperProducts.appendChild(newTemplate);
});
