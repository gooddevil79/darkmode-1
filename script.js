'use strict';
const themeBTN = document.querySelector('#theme-setting');
const overlay = document.querySelector('.dark__layer--animation');
themeBTN.addEventListener('click', function (e) {
  e.preventDefault();
  if (!document.body.classList.contains('dark__theme')) {
    overlay.classList.add('start__animation');
    document.body.classList.toggle('dark__theme');
    this.src = 'img/sun.png';
    this.classList.add('rotate');
  } else {
    overlay.classList.remove('start__animation');
    document.body.classList.toggle('dark__theme');
    this.src = 'img/moon.png';
    this.classList.remove('rotate');
  }
});
