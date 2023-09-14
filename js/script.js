let Navbar = document.querySelector('.navbar');
//selects and assigns an HTML element to the variable Fabars.
let Fabars = document.querySelector('.fa-bars');

/ adds an event listener to an HTML element with the id "Fabars." When this element is clicked, 
//it toggles a CSS class on another HTML element with the class "Navbar."

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};


//JavaScript library for creating touch-enabled and responsive sliders or carousels.

var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//This line initializes a new Swiper instance and assigns it to a variable named swiper. The .home-slid selector is used to specify 
//the HTML element or container that you want to turn into a swiper/slider. In this case, it's selecting an element with the class "home-slid."

//navigation: This property is an object that specifies the navigation controls for the swiper.
//nextEl: ".swiper-button-next": This defines the element with the class "swiper-button-next" as the control to navigate to the next slide in the swiper when clicked.
//prevEl: ".swiper-button-prev": This defines the element with the class "swiper-button-prev" as the control to navigate to the previous slide in the swiper when clicked

var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
          
      },
      "1020": {
        slidesPerView: 3,
          
      },
    },
  });
