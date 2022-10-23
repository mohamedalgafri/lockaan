/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('navbar')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 0 ? navbar.classList.add('scroll-nav') 
                       : navbar.classList.remove('scroll-nav')
  }
  window.addEventListener('scroll', scrollHeader)
  

  /////////////////  Swiper///////////////////

  var swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay: {
        delay: 3000,

      },
      speed: 1300,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  ///////////////////Swiper2//////////////////////

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 0,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      // 400: {
      //   slidesPerView: 1,
      //   spaceBetween: 10,
      // },
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });



  //////////////////////////////////////////

  var closecardcart = document.querySelectorAll(".closecardcart");
  var cartcard = document.querySelectorAll(".cartcard");
  var x =0 ;


  closecardcart[0].addEventListener("click",function(){
    cartcard[0].classList.add("active");
  });

  closecardcart[1].addEventListener("click",function(){
    cartcard[1].classList.add("active");
  });
  

  ////////////////////// search/////////////////////////////


  var search = document.querySelector(".serchh");
  var navbarr = document.querySelector(".navbar-nav");
  var search_navv = document.querySelector(".search_navv");
  var closesersh = document.querySelector(".rightsersh");

  search.addEventListener("click",()=>{
    navbarr.classList.add("active");
    search_navv.classList.add("active");
  });

  closesersh.addEventListener("click",()=>{
    navbarr.classList.remove("active");
    search_navv.classList.remove("active");
  })



