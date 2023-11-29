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