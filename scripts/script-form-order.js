
const buttonOrder = document.querySelector('.button-order');
const modalBackdrop = document.querySelector('.modal-backdrop');
const buttonClose = document.querySelector('.close-button');

buttonOrder.addEventListener('click', function () {
  modalBackdrop.classList.remove('is-hidden');
});

buttonClose.addEventListener('click', function () {
  modalBackdrop.classList.add('is-hidden');
});

