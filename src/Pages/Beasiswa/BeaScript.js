const carousel = document.querySelector(".carousel"),
firstImage = document.querySelectorAll("svg")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let firstImageWidth = firstImage.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth;
    });
});
