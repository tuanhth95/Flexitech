// Get the quantity element
var quantityElement01 = document.getElementById("quantity01");
var priceElement01 = document.getElementById("price01");

var quantity01 = 0;
var price01 = 1300000;

var costShip = parseInt(document.getElementById("costShip"));
// Function to increase the quantity
function increaseQuantity01() {
  quantity01++;
  updateQuantityAndPrice01();
  updateTotalPrice();
  updateTotalCost();
}

// Function to decrease the quantity
function decreaseQuantity01() {
  if (quantity01 > 0) {
    quantity01--;
    updateQuantityAndPrice01();
    updateTotalPrice();
    updateTotalCost();
  }
}

function updateQuantityAndPrice01() {
  quantityElement01.innerText = quantity01;
  priceElement01.innerText = formatCurrency(quantity01 * price01);
}

// Get the quantity element
// Get the quantity element
var quantityElement02 = document.getElementById("quantity02");
var priceElement02 = document.getElementById("price02");

var quantity02 = 0;
var price02 = 1300000;

// Function to increase the quantity
function increaseQuantity02() {
  quantity02++;
  updateQuantityAndPrice02();
  updateTotalPrice();
  updateTotalCost();
}

// Function to decrease the quantity
function decreaseQuantity02() {
  if (quantity02 > 0) {
    quantity02--;
    updateQuantityAndPrice02();
    updateTotalPrice();
    updateTotalCost();
  }
}

function updateQuantityAndPrice02() {
  quantityElement02.innerText = quantity02;
  priceElement02.innerText = formatCurrency(quantity02 * price02);
}

function formatCurrency(value) {
  return value.toLocaleString("en-US");
}

// Function to update totalPrice
function updateTotalPrice() {
  var totalPrice = quantity01 * price01 + quantity02 * price02;
  document.getElementById("totalPrice").innerText = formatCurrency(totalPrice);
}

// Function to update totalCost

var shippingFee = parseInt(document.getElementById("shippingFee")); // Initialize shipping fee, you can set this value based on your logic

function updateTotalCost() {
  // Calculate the total price
  var totalPrice = quantity01 * price01 + quantity02 * price02;

  // Calculate the total cost
  var totalCost = totalPrice + 20000;

  // Update the displayed total cost on the page
  document.getElementById("totalCost").innerText = formatCurrency(totalCost);
}
// Trong cart.js
function redirectToCheckout() {
  // Đường dẫn tương đối từ thư mục cart đến thư mục checkout
  var relativePath = "../checkout/check_out.html";

  // Tạo đường dẫn tuyệt đối bằng cách kết hợp đường dẫn tương đối với vị trí hiện tại của trang cart
  var absolutePath = new URL(relativePath, window.location.href).href;

  // Chuyển hướng đến trang checkout
  window.location.href = absolutePath;
}