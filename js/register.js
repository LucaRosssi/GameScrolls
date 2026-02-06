
  const openButton = document.querySelector('[data-open-modal]');
  const modal = document.querySelector('[data-modal]');

  openButton.addEventListener('click', () => {
    if (!modal.open) {
      modal.showModal();
    }
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.close();
    }
  });
  console.log("openButton", openButton);
  console.log("modal", modal);