  const slider = document.querySelector('.marquee-container');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active'); // Helpful for changing the cursor
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return; // Exit if mouse is not clicked
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Multiplier of 2 for faster scrolling
            slider.scrollLeft = scrollLeft - walk;
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