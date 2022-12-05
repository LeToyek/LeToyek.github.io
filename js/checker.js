$(document).ready(function () {
  $("#testt").click(function () {
    floor = parseInt($("#floor").val());
    type = parseInt($("#type").val());
    day = parseInt($("#day").val());
    discount = $("#discount").val();
    if (isNaN(floor)) {
      $(".wrong").text("Isi kolom floor dengan angka!") 
      $(".report").fadeOut(0)
      $(".error").fadeIn()
      
      return;
    }else{
      $(".error").fadeOut(0)
    }
    if (isNaN(day)) {
      $(".wrong").text("Isi kolom Day(s) dengan angka!")
      $(".report").fadeOut(0)
      $(".error").fadeIn()
      return;
    }else{
      $(".error").fadeOut(0)
    }

    totalPayment = type * day;
    totalDiscount = 0;
    if (floor > 5) {
      totalPayment += 1000;
    }
    if (discount == "member") {
      totalDiscount += totalPayment / 10;
      totalPayment -= totalPayment / 10;
    } else if (discount == "birthday") {
      totalPayment -= 500;
      totalDiscount += 500;
    }
    totalPrice = totalPayment + totalDiscount;

    
    $("#p-price").text(totalPrice)
    $("#p-discount").text(totalDiscount)
    $("#p-payment").text(totalPayment)
    $(".report").fadeIn() 
    
  });
});
const wraprow = (label,price) => {
  return ``;
};
