const dom = document.querySelectorAll('.area-content__items');

console.log(dom)

dom.forEach(item => {
  item.addEventListener('mouseover', (e) => {
    console.log(e.target)
    setTimeout(() => {
      for(i of dom) {
        e.target === i ? i.classList.add('select') : i.classList.add('unselect')
      }
    }, 10)
  })
  
  item.addEventListener('mouseout', (e) => {
    for(i of dom) {
      e.target === i ? i.classList.remove('select') : i.classList.remove('unselect')
    }
  })
})