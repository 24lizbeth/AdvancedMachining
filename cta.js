const ctaBtn = document.getElementById("ctaBtn");
const responsiveForm = document.getElementById("responsiveForm");



ctaBtn.addEventListener("click",function() {

    const isIndexPage = 
    window.location.pathname.endsWith("index.html")||
    window.location.pathname ==="/" ||
    window.location.pathname ==="";

    if (isIndexPage) {
        responsiveForm.scrollIntoView({
behavior: "smooth"

        });

    }else{
        window.location.href = "index.html#responsiveForm"
    }

});