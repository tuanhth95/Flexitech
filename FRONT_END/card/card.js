// Get the quantity element
var quantityElement01 = document.getElementById("quantity01");
var priceElement01 = document.getElementById("price01");

var quantity01 = 0;
var price01 = 1300000;

// Function to increase the quantity
function increaseQuantity01() {
  quantity01++;
  updateQuantityAndPrice01();
}

// Function to decrease the quantity
function decreaseQuantity01() {
  if (quantity01 > 0) {
    quantity01--;
    updateQuantityAndPrice01();
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
}

// Function to decrease the quantity
function decreaseQuantity02() {
  if (quantity02 > 0) {
    quantity02--;
    updateQuantityAndPrice02();
  }
}

function updateQuantityAndPrice02() {
  quantityElement02.innerText = quantity02;
  priceElement02.innerText = formatCurrency(quantity02 * price02);
}

function formatCurrency(value) {
  return value.toLocaleString("en-US");
}
