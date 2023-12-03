function redirectPreviousStep() {
  var relativePath = "../checkout/check_out.html";
  var absolutePath = new URL(relativePath, window.location.href).href;
  window.location.href = absolutePath;
}

function redirectFirstStep() {
  var relativePath = "../card/cart.html";
  var absolutePath = new URL(relativePath, window.location.href).href;
  window.location.href = absolutePath;
}

function done() {
  var relativePath = "../card/cart.html";
  var absolutePath = new URL(relativePath, window.location.href).href;
  window.location.href = absolutePath;
}
