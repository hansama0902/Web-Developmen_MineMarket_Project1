export function setupQuantityControl(
  decreaseButtonId,
  increaseButtonId,
  quantityInputId,
) {
  const decreaseButton = document.getElementById(decreaseButtonId);
  const increaseButton = document.getElementById(increaseButtonId);
  const quantityInput = document.getElementById(quantityInputId);

  decreaseButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > parseInt(quantityInput.min)) {
      quantityInput.value = currentValue - 1;
    }
  });

  increaseButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  });
}
setupQuantityControl("decrease", "increase", "quantity");
