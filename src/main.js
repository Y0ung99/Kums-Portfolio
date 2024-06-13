// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home섹션을 아래로 스크롤시 투명하게 처리
const homeContainer = document.querySelector('.home__container');
const homeHeight = homeContainer.offsetHeight;
document.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow-up 버튼을 스크롤에따라 투명도 처리
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫음
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});