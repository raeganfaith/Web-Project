//Navigation Bar Toggle Function
$(document).ready(function(){
  $('.btn').click(function(){
    $('.items').toggleClass("show");
    $('ul li').toggleClass("hide");
    $('.logo-container').toggleClass("hide");
    $(".logo-container").toggle();
    $("main").toggle();
    $('footer').toggle();
  });
});

// Toggle function of the View Task and Map
// The Skeld toggle button
function SkeldViewTasks() {
  document.getElementById("div1").style.display="none";
  document.getElementById("div2").style.display="block";
}
function SkeldViewMap() {
  document.getElementById("div1").style.display="block";
  document.getElementById("div2").style.display="none";
}
// The Airship Toggle Button
function AirshipViewTasks() {
  document.getElementById("div3").style.display="none";
  document.getElementById("div4").style.display="block";
}
function AirshipViewMap() {
  document.getElementById("div3").style.display="block";
  document.getElementById("div4").style.display="none";
}

// Polus Toggle Button
function PolusViewTasks() {
  document.getElementById("div5").style.display="none";
  document.getElementById("div6").style.display="block";
}
function PolusViewMap() {
  document.getElementById("div5").style.display="block";
  document.getElementById("div6").style.display="none";
}

// Map 5 Toggle Button
function Map5ViewTasks() {
  document.getElementById("div7").style.display="none";
  document.getElementById("div8").style.display="block";
}
function Map5ViewMap() {
  document.getElementById("div7").style.display="block";
  document.getElementById("div8").style.display="none";
}

// Mira HQ Toggle Button
function MiraViewTasks() {
  document.getElementById("div9").style.display="none";
  document.getElementById("div10").style.display="block";
}
function MiraViewMap() {
  document.getElementById("div9").style.display="block";
  document.getElementById("div10").style.display="none";
}
// Button Redirect in Home Page
document.getElementById("my-about").onclick = function () {
  location.href = "about.html";
};
document.getElementById("my-reviews").onclick = function () {
  location.href = "reviews.html";
};
document.getElementById("my-how-to-play").onclick = function () {
  location.href = "how-to-play.html";
};
document.getElementById("my-maps").onclick = function () {
  location.href = "maps.html";
};
document.getElementById("my-tips-tricks").onclick = function () {
  location.href = "tips-and-tricks.html";
};
document.getElementById("my-characters").onclick = function () {
  location.href = "characters.html";
};


