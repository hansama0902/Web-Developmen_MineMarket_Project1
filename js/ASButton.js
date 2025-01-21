// 获取 DOM 元素
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");

// 减少数量
decreaseButton.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > parseInt(quantityInput.min)) {
    quantityInput.value = currentValue - 1;
  }
});

// 增加数量
increaseButton.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});
