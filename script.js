window.onload = function() {
    let aside = document.getElementById("side");
    let lastScrollTop = 0;  
    let nav = document.getElementById("nav");
    let menu = document.getElementById("menu");
    let closeMenu = document.getElementById("closeMenu");

    menu.onclick = function menuShow(){
        aside.classList.toggle("show");
    };

    closeMenu.onclick = function menuShow(){
        aside.classList.toggle("show");
    };

    window.addEventListener("scroll", function(){
        let scrollToTop = window.pageYOffset || document.documentElement.scrollToTop;
        if (scrollToTop > lastScrollTop){
            nav.style.top = "-70px";
        } else {
            nav.style.top = "0";
        }
        lastScrollTop = scrollToTop;
        let scroll = document.querySelector(".scroll");
        scroll.classList.toggle("active", window.scrollY > 650)
    });
};



