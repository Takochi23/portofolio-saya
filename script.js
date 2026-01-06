document.addEventListener('DOMContentLoaded', () => {

  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  };

  new Typed('.multiple-text', {
    strings: [
      'Web3 Developer',
      'Blockchain Enthusiast',
      'YouTuber',
      'Streamer'
    ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
  });

});
