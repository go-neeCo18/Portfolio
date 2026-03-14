        let lastScrollTop = 0;
            const navbar = document.querySelector(".navbar");
            const back = document.querySelector(".backtotop");

            window.addEventListener("scroll", function () {
                let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

                if (currentScroll > lastScrollTop) {
                    navbar.classList.add("hide");
                    back.classList.remove("hide");
                } else {
                    navbar.classList.remove("hide");
                    back.classList.add("hide");
                }

                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
            });

const cursor = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

const links = document.querySelectorAll("a, button");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
        cursor.style.backgroundColor = "rgb(255, 255, 255)";
        cursor.style.opacity = "80%";
        cursor.style.boxShadow = "0 0 20px black"; 
    });
    
    link.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.backgroundColor = "rgb(255, 90, 90)";
        cursor.style.opacity = "100%";
        cursor.style.boxShadow = "none"; 
    });
});