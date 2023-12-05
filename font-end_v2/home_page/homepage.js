let productIndex = 0;
let displayCount = 4;

function scrollProducts(n) {
    let products = document.getElementsByClassName('product-mainboard');
    productIndex += n;

    // Wrap around the products
    if (productIndex < 0) {
        productIndex = products.length - displayCount;
    } else if (productIndex > products.length - displayCount) {
        productIndex = 0;
    }

    // Hide all products
    for (let i = 0; i < products.length; i++) {
        products[i].style.display = 'none';
    }

    // Show the current products
    for (let i = productIndex; i < productIndex + displayCount; i++) {
        products[i].style.display = 'block';
    }
}
// Initialize the product display
scrollProducts(0);
var images = ["img/Rectangle 80.png", "img/tin tức2.png", "img/tin tức1.png","img/Rectangle 57.png"];
var index1 = 0;
var index2 = 1;

function changeImage() {
    var imgElements = document.querySelectorAll(".IMG img");
    imgElements[0].src = images[index1];
    imgElements[1].src = images[index2];
    index1 = (index1 + 1) % images.length;
    index2 = (index2 + 1) % images.length;
}

setInterval(changeImage, 3000); // Thay đổi hình ảnh mỗi 3 giây

// Cho phép người dùng chỉnh lại hình ảnh
document.querySelector(".IMG").addEventListener("click", function(event) {
    if (event.target.className === "dot") {
        var newImageIndex = Array.from(document.querySelectorAll(".IMG .dot")).indexOf(event.target);
        if (newImageIndex >= 0 && newImageIndex < images.length) {
            index1 = newImageIndex;
            index2 = (newImageIndex + 1) % images.length;
            changeImage();
        }
    }
});
let productIndex_1 = 0;
let displayCount_1 = 4;

function scrollProducts_1(n) {
    let products_1 = document.getElementsByClassName('product-CPU');
    productIndex_1 += n;

    // Wrap around the products
    if (productIndex_1 < 0) {
        productIndex_1 = products_1.length - displayCount_1;
    } else if (productIndex_1 > products_1.length - displayCount_1) {
        productIndex_1 = 0;
    }

    // Hide all products
    for (let i = 0; i < products_1.length; i++) {
        products_1[i].style.display = 'none';
    }

    // Show the current products
    for (let i = productIndex_1; i < productIndex_1 + displayCount_1; i++) {
        products_1[i].style.display = 'block';
    }
}
// Initialize the product display
scrollProducts_1(0);
let productIndex_2 = 0;
let displayCount_2 = 4;

function scrollProducts_2(n) {
    let products_2 = document.getElementsByClassName('product-hard');
    productIndex_2 += n;

    // Wrap around the products
    if (productIndex_2 < 0) {
        productIndex_2 = products_2.length - displayCount_2;
    } else if (productIndex_2 > products_2.length - displayCount_2) {
        productIndex_2 = 0;
    }

    // Hide all products
    for (let i = 0; i < products_2.length; i++) {
        products_2[i].style.display = 'none';
    }

    // Show the current products
    for (let i = productIndex_2; i < productIndex_2 + displayCount_2; i++) {
        products_2[i].style.display = 'block';
    }
}
// Initialize the product display
scrollProducts_2(0);


// Slider Container //
let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function showSlide(index) {
  if (index < 0) {
    slideIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    slideIndex = 0;
  }

  const offset = -slideIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(--slideIndex);
}

function nextSlide() {
  showSlide(++slideIndex);
}

// Automatic slide change
setInterval(() => {
  nextSlide();
}, 5000); // Change slide every 5 seconds

// Initial slide display
showSlide(slideIndex);


//sp hnay
let productIndex_3 = 0;
let displayCount_3 = 3;

function scrollProducts_3(n) {
    let products_3 = document.getElementsByClassName('product-card');
    productIndex_3 += n;

    // Wrap around the products
    if (productIndex_3 < 0) {
        productIndex_3 = products_3.length - displayCount_3;
    } else if (productIndex_3 > products_3.length - displayCount_3) {
        productIndex_3 = 0;
    }

    // Hide all products
    for (let i = 0; i < products_3.length; i++) {
        products_3[i].style.display = 'none';
    }

    // Show the current products
    for (let i = productIndex_3; i < productIndex_3 + displayCount_3; i++) {
        products_3[i].style.display = 'block';
    }
}

// Initialize the product display
scrollProducts_3(0);

// Automatic product change
setInterval(() => {
  scrollProducts_3(1);
}, 3000); // Change product every 3 seconds

// Navigation buttons
function prevSlide_3() {
  scrollProducts_3(-displayCount_3);
}

function nextSlide_3() {
  scrollProducts_3(displayCount_3);
}

// // Add event listeners to the buttons
// document.querySelector('.prev0').addEventListener('click', prevSlide_3);
// document.querySelector('.next0').addEventListener('click', nextSlide_3);



// Add product to the cart //
// Get the elements
// const cartCount = document.querySelector('.cart-count');
// const addToCartBtn = document.querySelector('.cart-btn');

// // Initialize cart count
// let count = 0;

// // Function to update cart count
// function updateCartCount() {
//   cartCount.textContent = count;
// }

// // Event listener for the "Add to Cart" button
// addToCartBtn.addEventListener('click', function() {
//   count++; // Increment the count by 1
//   updateCartCount(); // Update the cart count displayed
// });
const cartCount = document.querySelector('.cart-count');

// Initialize cart count
let count = 0;

// Function to update cart count
function updateCartCount() {
  cartCount.textContent = count;
}

// Function to handle "Add to Cart" button click
function addToCartBtn(button) {
  count++; // Increment the count by 1
  updateCartCount(); // Update the cart count displayed
}

// const cartIcon = document.querySelector('.cart-icon');
// const cartCount = document.querySelector('.cart-count');



// // Lắng nghe sự kiện khi nhấn vào nút "Add to cart"
// const addToCartBtn = document.querySelector('.cart-btn');
// addToCartBtn.addEventListener('click', function() {
//     // Tăng giá trị số lượng trong giỏ hàng khi nhấn
//     // let count = parseInt(cartCount.textContent);
//     let count=0;
//     count++;
//     cartCount.textContent = count;
// });

// console(cartCount.textContent);

// let count = 0;

// function updateCartCount() {
//   const cartCount = document.querySelector('.cart-count');
//   cartCount.textContent = count;
// }

// function addToCart() {
//   count++;
//   updateCartCount();
// }


// let count = 0;

// function updateCartCount() {
//   const cartCount = document.querySelector('.cart-count');
//   cartCount.textContent = count;
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const addToCartBtn = document.querySelector('.cart-btn');

//   addToCartBtn.addEventListener('click', function() {
//     count++;
//     updateCartCount();
//   });
// });


// let count = 0;

// function updateCartCount() {
//   const cartCount = document.querySelector('.cart-count');
//   cartCount.textContent = count;
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const addToCartBtn = document.querySelector('.cart-btn');

//   addToCartBtn.addEventListener('click', function() {
//     count++;
//     updateCartCount();
//   });
// });


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }