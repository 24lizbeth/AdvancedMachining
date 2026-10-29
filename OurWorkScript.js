const mainImage =document.getElementById("mainImage");
const nextBtn =document.getElementById("nextBtn");
const prevBtn =document.getElementById("prevBtn");
const thumbnails =document.querySelectorAll(".thumbnail");
const images = [
    "finished_part1.jpg",
    "finished_part2.jpg",
    "finished_part3.jpg",
    "finished_part4.jpg",
    "finished_part5.jpg",
    "finished_part6.jpg",
    "finished_part7.jpg",
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
