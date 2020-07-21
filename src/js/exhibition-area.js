const dom = document.querySelectorAll('.exhibition-area__items');

dom.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    setTimeout(() => {
      for(i of dom) {
        e.target === i ? i.classList.add('select') : i.classList.add('unselect')
      }
    }, 10)
  }, false)
  
  item.addEventListener('mouseleave', (e) => {
    for(i of dom) {
      e.target === i ? i.classList.remove('select') : i.classList.remove('unselect')
    }
  }, false)
})