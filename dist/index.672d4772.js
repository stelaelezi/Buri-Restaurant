const player = document.querySelector(".player");
const modal = document.querySelector(".modal-wrapper");
const btnClose = document.querySelector(".close");
const nextBtn = document.querySelector(".next-button");
const prevBtn = document.querySelector(".prev-button ");
let carouselItems = document.querySelectorAll(".slide");
let currentIndex = 0;
const dessert = document.querySelector(".display-dessert ");
player.addEventListener("click", ()=>{
    modal.style.display = "block";
});
btnClose.addEventListener("click", ()=>{
    modal.style.display = "none";
});
document.querySelector(".overlay").addEventListener("click", ()=>{
    modal.style.display = "none";
});
// Carousel
function showSlide(index) {
    carouselItems.forEach((item)=>{
        item.style.display = "none";
    });
    carouselItems[index].style.display = "block";
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}
showSlide(currentIndex);
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

//# sourceMappingURL=index.672d4772.js.map
