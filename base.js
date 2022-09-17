window.onload = function () {
    // Try to read from local storage, otherwise set to default
    let currentTheme = localStorage.getItem("mytheme") || "dark-theme"

    body.classList.add(currentTheme);

    const themeToggle = document.getElementById('themeToggle');

    themeToggle.onclick = function () {
        this.classList.toggle("checked");
        if (themeToggle.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem("mytheme", 'dark-theme');
        }
        else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem("mytheme", 'light-theme');
        }
    };

    const hamburger = document.getElementById("hamburger");
    const fadeshow = document.getElementById("fadeshow");

    hamburger.onclick = function () {
        this.classList.toggle("checked");
        if (hamburger.checked) {
            fadeshow.style.display = "block";
        }
        else {
            fadeshow.style.display = "none";
        }
    }

    if ($(window).width() < "960") {
        hamburger.onclick();
    }
};