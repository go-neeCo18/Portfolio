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