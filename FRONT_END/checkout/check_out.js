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
    alert("Proceeding to the next step!");
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
}
