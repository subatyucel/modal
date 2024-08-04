'use strict';
const modal = document.querySelector('.modal'); //modal window
const overlay = document.querySelector('.overlay'); //overlay
const closeModalBtn = document.querySelector('.close-modal'); //close modal button
const showModalBtns = document.querySelectorAll('.show-modal'); //show modal button

//toggles class of modal and overlay
function toggleClass() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', toggleClass);
}

closeModalBtn.addEventListener('click', toggleClass);
overlay.addEventListener('click', toggleClass);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleClass();
  }
});
