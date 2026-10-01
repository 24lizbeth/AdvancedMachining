const heroBtn = document.getElementById("heroBtn");
const responsiveForm = document.getElementById("responsiveForm");


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