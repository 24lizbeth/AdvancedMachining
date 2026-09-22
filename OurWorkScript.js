const mainImage =document.getElementById("mainImage");
const nextBtn =document.getElementById("nextBtn");
const prevBtn =document.getElementById("prevBtn");
const thumbnails =document.querySelectorAll(".thumbnail");
const images = [
    "Finished_parts_1.jpg",
    "Finished_parts_2.jpeg",
    "Finished_parts_3.jpeg",
    "Finished_parts_4.jpeg",
    "Finished_parts_5.jpeg",
    "Finished_parts_6.jpeg",
    "Finished_parts_7.jpeg",
    "Finished_parts_8.jpeg",
    "Finished_parts_9.jpeg",
    "Finished_parts_10.jpeg",
    "Finished_parts_11.jpeg",
    "Finished_parts_12.jpeg",
    "Finished_parts_13.jpeg",
    "Finished_Part_Orange.jpg"
]

let currentImage= 0 ;

function showImage(index) {
    currentImage = index;
    mainImage.src = images[currentImage];
    thumbnails.forEach(function(thumbnail){
    thumbnail.classList.remove("active");
});

thumbnails[currentImage].classList.add("active");
}


nextBtn.addEventListener("click", function(){

    currentImage++;

    if(currentImage >= images.length) {
        currentImage = 0;
    }
    showImage(currentImage);
})

prevBtn.addEventListener("click", function(){

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length -1;
    }
    showImage(currentImage);
})

thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener("click", function(){
        showImage(index);
    })
    
});
