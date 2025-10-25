"Strict mode"

const bookmarkingBtn = document.getElementById("carousel-bookmarking-btn");
const searchingBtn = document.getElementById("carousel-searching-btn");
const sharingBtn = document.getElementById("carousel-sharing-btn");
const carouselTitle = document.getElementById("carousel-desc-title");
const carouselBody = document.getElementById("carousel-desc-body");
const carouselImage = document.getElementById("carousel-image");

const bookmarkingUrl = "../resources/illustration-features-tab-1.svg";
const searchingUrl = "../resources/illustration-features-tab-2.svg";
const sharingUrl = "../resources/illustration-features-tab-3.svg";

const carouselButtons = [bookmarkingBtn, searchingBtn, sharingBtn]; 

bookmarkingBtn.addEventListener('click', () => {
    toggleCarouselButton(bookmarkingBtn, carouselButtons);
    console.log(carouselImage.src);
    carouselImage.src = bookmarkingUrl;
    carouselTitle.textContent = "Bookmark in one click"
    carouselBody.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
})

sharingBtn.addEventListener('click', () => {
    toggleCarouselButton(sharingBtn, carouselButtons);
    carouselImage.src = sharingUrl;
    carouselTitle.textContent = "Share your bookmarks"
    carouselBody.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
})

searchingBtn.addEventListener('click', () => {
    toggleCarouselButton(searchingBtn, carouselButtons);
    carouselImage.src = searchingUrl;
    carouselTitle.textContent = "Intelligent search"
    carouselBody.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to thrawl through all of your bookmarks."
})

function toggleCarouselButton(pressedBtn, carouselButtons){
    clearSelection(carouselButtons);
    pressedBtn.classList.add("active");
}

function clearSelection(carouselButtons) {
    carouselButtons.forEach(btn => {
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
        }
    });
}