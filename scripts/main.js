let sections;
let navLinks;

document.addEventListener('DOMContentLoaded', () => {
    sections = document.querySelectorAll('.project');
    navLinks = document.querySelectorAll('.nav-link');

    const clearActiveLinks = () => {
        navLinks.forEach(link => link.classList.remove('active'));
    };

    const options = {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0
    }

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");

                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                })
            }
        })
    }

    const observer = new IntersectionObserver(observerCallback, options);
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', () => {
        if (window.scrollY <= 1) {
            clearActiveLinks();
        }

        const scrollFades = document.querySelectorAll('.scroll-fade');

        // Get current scroll position
        const scrollTop = window.scrollY;

        // Define the point (in pixels) where the image should be 100% transparent
        const fadePoint = 300;

        // Calculate new opacity (1 at top, 0 at fadePoint)
        let opacity = 1 - (scrollTop / fadePoint);

        // Keep opacity strictly between 0 and 1
        if (opacity < 0) opacity = 0;
        if (opacity > 1) opacity = 1;

        // Apply the opacity to the image
        scrollFades.forEach((entry) => {
            entry.style.opacity = opacity;
        });
    });

    function getLastUpdate() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                let date = new Date(JSON.parse(this.responseText).commit.commit.author.date);
                console.log(this.responseText);
                console.log(date);

                document.getElementById("copyright").innerText = `\u00A9 ${date.getFullYear() } Rowan McAlpin, last updated ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
            }
        };
        xhttp.open("GET", "https://api.github.com/repos/rowan-mcalpin/rowanmcalpin.com/branches/main", true);
        xhttp.send();
    }

    getLastUpdate();
})
