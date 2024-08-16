document.querySelectorAll(".increase").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    input.value = parseInt(input.value) + 1;
    updateTotal();
  });
});

document.querySelectorAll(".decrease").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.nextElementSibling;
    if (input.value > 1) {
      input.value = parseInt(input.value) - 1;
      updateTotal();
    }
  });
});

function updateTotal() {
  const price = 33000;
  const quantity = document.querySelector(".quantity-input").value;
  document.querySelector(".total-price").textContent = `${price * quantity}₽`;
}
