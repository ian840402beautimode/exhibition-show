const dom = document.querySelectorAll('.exhibition-area__items');

dom.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    e.target.classList.add('select')
  }, false)
  
  item.addEventListener('mouseleave', (e) => {
    e.target.classList.remove('select')
  }, false)
})