
/*==Mobile hamburger nav==*/

const nav = document.querySelector(".nav");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

/*open and close menu*/

if (hamburgerBtn && nav && navMenu) {

    hamburgerBtn.addEventListener("click", function(){
        const isOpen = nav.classList.toggle("menu-open");

        hamburgerBtn.setAttribute(
                    "aria-expanded",
                    isOpen
                );

                hamburgerBtn.setAttribute(
                    "aria-label",
                    isOpen
                    ?"Close navigation"
                    :"Open navigation"
                );
    });

}

        
      
/*==Mobile Dorpdowns==*/

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dropdown){

    const toggle = dropdown.querySelector(".dropdown-toggle");

    if(!toggle){
        return;
    }
    toggle.addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();

        const isOpen = dropdown.classList.toggle("open");

        toggle.setAttribute(
            "aria-expanded",
            isOpen
        );
    });
});

/*==Close Mobile Menu After clicking Link==*/

const navLinks = document.querySelectorAll(
    ".nav-main-menu a"
);

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        if(window.innerWidth<=768){

            nav.classList.remove("menu-open");

            hamburgerBtn.setAttribute(
                "aria-expanded",
                "false"
            );
            hamburgerBtn.setAttribute(
                "aria-label",
                "open navigation"
            )
        }
    });
});