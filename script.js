function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000);
}

function addToAccount(tokenName, tokenCharge, inputId) {
    var quantity = parseInt(document.getElementById(inputId).value);
    if (quantity > 0) {
        var totalCharge = quantity * tokenCharge;
        var newRow = "<tr><td>" + tokenName + "</td><td>" + quantity + "</td><td>" + totalCharge + "</td></tr>";
        document.getElementById("userAccount").getElementsByTagName('tbody')[0].innerHTML += newRow;
    } else {
        alert("Please enter a valid quantity.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
  var otherCharges = [702, 524, 250, 200, 1]; // Other charges in INR
  var totalOtherCharges = otherCharges.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  document.getElementById("totalOtherCharges").textContent =
    totalOtherCharges;
});