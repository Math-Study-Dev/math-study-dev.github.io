let cat = document.getElementById("cat");
let nail = document.getElementById("nail");
let object = document.getElementById("object");
let parrot = document.getElementById("parrot");
let zebn = document.getElementById("zebn");
let yes = document.getElementById("yes");
let curtain = document.getElementById("curtain");
let contact = document.getElementById("contact");
let contactInfo = document.getElementById("contactInfo");
var contactTxt = "Contact: "

// Add a click event listener to each element
cat.addEventListener("click", function() {
  curtain.style.display = "block";
    contact.style.background = "#49096E"
  contact.style.display = "block";
  contactInfo.innerHTML = contactTxt + "Cattn@mathstudy.dev";
});

nail.addEventListener("click", function() {
    curtain.style.display = "block";
    contact.style.background = "#2F6B1C"
    contact.style.display = "block";
    contactInfo.innerHTML = contactTxt + "Nailington@mathstudy.dev";
});

object.addEventListener("click", function() {
    curtain.style.display = "block";
    contact.style.background = "#444B3B"
    contact.style.display = "block";
    contactInfo.innerHTML = contactTxt + "i10@mathstudy.dev";
});

parrot.addEventListener("click", function() {
    curtain.style.display = "block";
    contact.style.background = "#9E7D33"
    contact.style.display = "block";
    contactInfo.innerHTML = contactTxt + "undefined@mathstudy.dev";
});

zebn.addEventListener("click", function() {
    curtain.style.display = "block";
    contact.style.background = "#5865f2"
    contact.style.display = "block";
    contactInfo.innerHTML = contactTxt + "chromebook@mathstudy.dev";
});

yes.addEventListener("click", function() {
    curtain.style.display = "block";
    contact.style.background = "#392e2b"
    contact.style.display = "block";
    contactInfo.innerHTML = contactTxt + "yes@mathstudy.dev";
});

curtain.addEventListener("click", function() {
    curtain.style.display = "none";
    contact.style.display = "none";
});