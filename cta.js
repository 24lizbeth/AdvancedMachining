const heroBtn = document.getElementById("heroBtn");
const responsiveForm = document.getElementById("responsiveForm");
const ctaBtn = document.getElementById("ctaBtn");

console.log("OurWorkScript.js is running");




console.log("CTA:", heroBtn);
console.log("Form:", responsiveForm);
if (heroBtn && responsiveForm) {

    heroBtn.addEventListener("click", function() {

        console.log("CTA button clicked!");

        responsiveForm.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}

ctaBtn.addEventListener("click", function() {
    window.location.href = "index.html#bodyCtaContainer";


    
});


