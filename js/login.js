const goToHomepage = () => {
  location.href = "./index.html";
  return false;
};
$(document).ready(function () {
  $("#login").click(function () {
    username = $("#username").val();
    password = $("#password").val();
    errorText = ""

    if (username.length == 0 || password.length == 0) {
      errorText = "Username dan Password harus diisi"
      $(".wrong").text(errorText)  
      $(".report").fadeIn()
      return;
    }
    if (password.length < 8) {
      errorText = "Password minimal terdiri dari 8 karakter"
      $(".wrong").text(errorText)  
      $(".report").fadeIn()
      return;
    }
   

    goToHomepage();
  });
});