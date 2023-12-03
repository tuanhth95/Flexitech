function proceedToNextStep() {
  var fields = ["fullName", "Email", "phoneNumber", "country", "address"];
  var isValid = true;

  fields.forEach(function (fieldId) {
    var value = document.getElementById(fieldId).value.trim();

    if (value === "") {
      markInvalidField(fieldId);
      isValid = false;
    } else {
      unmarkInvalidField(fieldId);
    }
  });

  if (isValid) {
    // Add logic to proceed to the next step
    alert("Confirm your order information!");
  } else {
    alert("MISING INFORMATION!!!");
  }
}

function markInvalidField(fieldId) {
  // Add a CSS class to mark the field with a red border
  document.getElementById(fieldId).classList.add("red-border");
}

function unmarkInvalidField(fieldId) {
  // Remove the CSS class to unmark the field
  document.getElementById(fieldId).classList.remove("red-border");
  document.getElementById(fieldId).classList.add("done");

  // Đường dẫn tương đối từ thư mục cart đến thư mục checkout
  var relativePath = "../success/success.html";

  // Tạo đường dẫn tuyệt đối bằng cách kết hợp đường dẫn tương đối với vị trí hiện tại của trang cart
  var absolutePath = new URL(relativePath, window.location.href).href;

  // Chuyển hướng đến trang checkout
  window.location.href = absolutePath;
}

function redirectPreviousStep() {
  var relativePath = "../card/cart.html";
  var absolutePath = new URL(relativePath, window.location.href).href;
  window.location.href = absolutePath;
}

function redirectFirstStep() {
  var relativePath = "../card/cart.html";
  var absolutePath = new URL(relativePath, window.location.href).href;
  window.location.href = absolutePath;
}

// ... (previous code)
