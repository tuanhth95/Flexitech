function changeMainImage(newSrc) {
    document.getElementById('mainImage').src = newSrc;
}
function addToCart() {
    Swal.fire({
        icon: 'success',
        title: 'Thêm vào giỏ hàng thành công',
        showConfirmButton: false,
        timer: 1500 // Thời gian hiển thị thông báo
    });
    // Thêm logic xử lý khi nhấn "Thêm vào giỏ hàng" ở đây
}

function buyNow() {
    Swal.fire({
        icon: 'success',
        title: 'Bạn sẽ được chuyển sang trang thanh toán trong 5 giây',
        showConfirmButton: false,
        timer: 5000 // Thời gian hiển thị thông báo
    });
    // Thêm logic xử lý khi nhấn "Mua ngay" ở đây
    setTimeout(function() {
        // Redirect đến trang thanh toán sau 5 giây
        window.location.href = 'http://127.0.0.1:5501/Flexitech/FRONT_END/checkout/check_out.html'; // Thay 'trang-thanh-toan' bằng URL thực tế của trang thanh toán
    }, 5000); // 5 giây
}
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');

// Lắng nghe sự kiện khi nhấn vào nút "Add to cart"
const addToCartBtn = document.querySelector('.add-cart-btn');
addToCartBtn.addEventListener('click', function() {
    // Tăng giá trị số lượng trong giỏ hàng khi nhấn
    let count = parseInt(cartCount.textContent);
    count++;
    cartCount.textContent = count;
});