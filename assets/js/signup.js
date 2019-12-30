$("#submitButton").click(function() {
  var errorMessage = "";
  var fieldMissing = "";
  //checking for missing values
  if ($("#email").val() == "") {
    fieldMissing += " EMAIL";
  }
  if ($("#phone").val() == "") {
    fieldMissing += ", PHONE NUMBER";
  }
  if ($("#password").val() == "") {
    fieldMissing += ", PASSWORD";
  }
  if ($("#confirmPassword").val() == "") {
    fieldMissing += ", CONFIRM PASSWORD";
  }
  if (fieldMissing != "") {
    errorMessage += "The following fields are missing: " + fieldMissing;
  }

  //this is email validation
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  if (isEmail($("#email").val()) == false) {
    errorMessage += "//Your email address is not valid";
  }
  // this is number validation
  if ($.isNumeric($("#phone").val()) == false) {
    errorMessage += ", your phone number is not valid";
  }
  // this is password match fuction
  if ($("#password").val() != $("#confirmPassword").val()) {
    errorMessage += ", your passwords don't match";
  }
  //showing error on browser
  if (errorMessage != "") {
    $("#errorMessage").text(errorMessage);
  } else {
    $("#signUp").text("You signed up! YAY!!!");
    $("#errorMessage").hide();
  }
});
