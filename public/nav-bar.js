var navToggle = document.getElementById("nav-toggle");
var navContent = document.getElementById("nav-content");

navToggle.addEventListener("click", function () {
    if (navContent.classList.contains("hidden")) {
        navContent.classList.remove("hidden");
    } else {
        navContent.classList.add("hidden");
    }
});