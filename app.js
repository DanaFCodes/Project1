// when you cick burger button, it is going to activate .show

// .burger gets clicked, using event is going to toggle .show on nav

const navToggle = document.querySelector(".burger")

navToggle.addEventListener('click', (e) => {
    document.querySelector(".nav-links").classList.toggle("show")

    navToggle.classList.toggle('toggle');
})




// const on = document.querySelector(".burger").addEventListener('click', (e) => {
//     // classList is a class so no need to have the dot before the class-name we are calling
    
//     if (e) {
//         document.querySelector(".nav-links").classList.toggle('show');
//     } else {
//         document.querySelector(".nav-links").classList.toggle('dissapear');
//     }
        
// })

















// const navSlide = () => {
//     const burger = document.querySelector(".burger");
//     console.log(burger);
//     const nav = document.querySelector(".nav-links");
//     console.log(nav);
//     const navLinks = document.querySelectorAll(".nav-links li");
//     console.log(navLinks);
//     // toggle nav
//     burger.addEventListener("click", () => {
//         nav.classList.toggle('nav-active');

//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = "";
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease-in-out forwards ${index / 7 + 0.5}s`
//             }
//         });
//     });

// }

// how do i make it smooth-slide OUT on click ?
// why did my whole nav bar disappear where is she?
// create new branch on feature branch then upload to there!

// navSlide();

