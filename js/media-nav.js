const btn = document.querySelector('.btn-menu-burger')

btn.addEventListener('click', () => {
  document.querySelector('.menu-container').classList.toggle('active')
})