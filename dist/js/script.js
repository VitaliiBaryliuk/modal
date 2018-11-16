(function () {
  const modal = document.querySelector('.modal');
  const modalLink = document.querySelector('.modal__link');
  const modalWindow = document.querySelector('.modal__window');
  const dataModal = document.querySelectorAll('[data-modal]');

  function makeStyle(hide, modalElem, bagrElem) {
    if (hide === true) {
      modalElem.classList.add('hide');
      bagrElem.classList.remove('back-color');
    } else {
      modalElem.classList.remove('hide');
      bagrElem.classList.add('back-color');
    }
  }

  modalLink.addEventListener('click', () => {
    makeStyle(false, modalWindow, modal);
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      makeStyle(true, modalWindow, modal);
    }
  });

  for (let i = 0; i < dataModal.length; i += 1) {
    dataModal[i].addEventListener('click', (event) => {
      makeStyle(true, modalWindow, modal); 
      event.target.dataset.modal === 'alert' ? setTimeout("alert('Some mesage')", 100) : console.log();
    });
  }
}
());
