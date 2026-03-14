window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    
    setTimeout(() => {
        splash.classList.add('fade-out');
    }, 1500);
});

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
            
const track = document.getElementById('marquee-track');
const content = document.getElementById('marquee-content');

function fillMarquee() {
    // 1. Clear existing clones (if any) to prevent infinite stacking on resize
    const originalContent = content.cloneNode(true);
    track.innerHTML = '';
    track.appendChild(originalContent);

    // 2. Calculate how many copies are needed to fill 2x the screen width
    // (We need 2x the width so the loop is seamless)
    const contentWidth = originalContent.offsetWidth;
    const screenWidth = window.innerWidth;
    const copiesNeeded = Math.ceil((screenWidth * 2) / contentWidth);

    // 3. Loop and append the clones
    for (let i = 0; i < copiesNeeded; i++) {
        track.appendChild(originalContent.cloneNode(true));
    }
}

// Run on load and whenever the window is resized (zoom out fix)
window.addEventListener('load', fillMarquee);
window.addEventListener('resize', fillMarquee);

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

/* --- Back to Top Logic --- */
const backToTopBtn = document.querySelector('.backtotop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.remove('hide');
    } else {
        backToTopBtn.classList.add('hide');
    }
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navoptions a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active");

                if(link.getAttribute("href").substring(1) === entry.target.id){
                    link.classList.add("active");
                }
            });

        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section => {
    observer.observe(section);
});