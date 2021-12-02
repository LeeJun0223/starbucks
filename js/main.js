// 검색창 이벤트
const searchEl = document.querySelector('.search'),
      utilmenuEl = document.querySelector('.util_meun'),
      searchAEl = searchEl.querySelector('.search > a'),
      searchInputEl = searchEl.querySelector('.search > input')

searchAEl.addEventListener('click', function(){
    searchEl.style.width = "180px",
    utilmenuEl.style.right = "232px",
    searchInputEl.style.display = "block"
})

// 메뉴 이벤트
let header = document.querySelector('header'),
    mainMenuList = document.querySelectorAll('.gnb_inner > ul > li'),
    subMenu = document.querySelectorAll('.lnb_wrap'),
    headerHeight = header.offsetHeight,
    subMenuHeight = 0;

for(let i = 0; i < mainMenuList.length; i++){
    mainMenuList[i].addEventListener('mouseover', function(){
        subMenuHeight = this.querySelector('.lnb_wrap').offsetHeight
        header.style.height = headerHeight + subMenuHeight + 'px'
    })

    mainMenuList[i].addEventListener('mouseout', function(){
        header.style.height = headerHeight + 'px'
    })
}

// visual 애니메이션 이벤트
const fadeEls = document.querySelectorAll('.visual_inner .fade-in')

fadeEls.forEach(function(fadeEls, index) {
    gsap.to(fadeEls, 1, {
        delay: (index + 1) * .5,
        opacity: 1
    }); //gsap.to(요소, 지속시간, 옵션)
})

// slide event
new Swiper('.boxL-container > .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion_box > .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 5000
    },
    loop: true,
    pagination: {
        el: '.promotion_box .swiper-pagination', 
        clickable: true
    }
});

// toggle event
const promotionEl = document.querySelector('.promotion_box'),
      ToggleBtn = document.querySelector('.btn_toggle'),
      ToggleBtnSpan = document.querySelector('.btn_toggle > span')

let isHidePromotion = false

ToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion) {
        promotionEl.classList.add('show'),
        ToggleBtnSpan.classList.add('rotate')
    } else {
        promotionEl.classList.remove('show'),
        ToggleBtnSpan.classList.remove('rotate')
    }
})

// bean event
window.addEventListener('scroll', () => {
    let pageYOffset_1 = (window.pageYOffset || document.documentElement.scrollTop) / 2

    if(pageYOffset_1 > document.querySelector('.bean_imgbox').offsetTop) {
        document.querySelector('.bean_imgbox').classList.add('show')
    } else {
        document.querySelector('.bean_imgbox').classList.remove('show')
    }

    if(pageYOffset_1 > document.querySelector('.bean_txtbox').offsetTop) {
        document.querySelector('.bean_txtbox').classList.add('show')
    } else {
        document.querySelector('.bean_txtbox').classList.remove('show')
    }
})

// parallax event
window.addEventListener('scroll', () => {
    let pageYOffset_2 = (window.pageYOffset || document.documentElement.scrollTop) / 10

    if(pageYOffset_2 > document.querySelector('.parallax_tit').offsetTop) {
        document.querySelector('.parallax_tit').classList.add('show')
    } else {
        document.querySelector('.parallax_tit').classList.remove('show')
    }
})

window.addEventListener('scroll', () => {
    let pageYOffset_3 = (window.pageYOffset || document.documentElement.scrollTop) / 3

    if(pageYOffset_3 > document.querySelector('.parallax_txt').offsetTop) {
        document.querySelector('.parallax_txt').classList.add('show')
    } else {
        document.querySelector('.parallax_txt').classList.remove('show')
    }
})

// store event
window.addEventListener('scroll', () => {
    let pageYOffset_4 = (window.pageYOffset || document.documentElement.scrollTop) / 20

    if(pageYOffset_4 > document.querySelector('.store_tit').offsetTop) {
        document.querySelector('.store_tit').classList.add('show')
    } else {
        document.querySelector('.store_tit').classList.remove('show')
    }
})

window.addEventListener('scroll', () => {
    let pageYOffset_5 = (window.pageYOffset || document.documentElement.scrollTop) / 12

    if(pageYOffset_5 > document.querySelector('.store_txt').offsetTop) {
        document.querySelector('.store_txt').classList.add('show')
    } else {
        document.querySelector('.store_txt').classList.remove('show')
    }
})

window.addEventListener('scroll', () => {
    let pageYOffset_6 = (window.pageYOffset || document.documentElement.scrollTop) / 10

    if(pageYOffset_6 > document.querySelector('.btn_store').offsetTop) {
        document.querySelector('.btn_store').classList.add('show')
    } else {
        document.querySelector('.btn_store').classList.remove('show')
    }
})