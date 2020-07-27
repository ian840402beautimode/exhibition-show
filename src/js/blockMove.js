const windowWidth = window.innerWidth
const windowHeight = window.innerHeight
const degree60 = Math.PI / 3

let nowBlock = 0

const arr = [2000, -1000, 1000, -1000, 0]

// 上一個區塊
const blockPrev = (dest) => {
  const start = nowBlock
  for (let i = start; i > dest; i--) {
    const move = (i - 1) * windowHeight
    setTimeout(() => {
      $('#content-window').css({
        'transform': `translate(${arr[i]}px, -${move}px)`
      })
    }, 500 * -(i - start))
  }
}

// 下一個區塊
const blockNext = (dest) => {
  const start = nowBlock
  for (let i = start; i < dest; i++) {
    const move = (i + 1) * windowHeight
    setTimeout(() => {
      $('#content-window').css({
        'transform': `translate(${arr[i]}px, -${move}px)`
      })
    }, 500 * (i - start))
  }
}

// 區塊移動
const blockMove = (dest) => {
  if (dest > 0 && dest <= 6) {
    if (dest > nowBlock) {
      blockNext(dest)
    } else if (dest < nowBlock) {
      blockPrev(dest)
    }

    nowBlock = dest

    console.log(nowBlock)

    $('#progress-block').find('.progress-now ').text('0' + nowBlock)
    $('#progress-block').find('.line-item').css({
      'width': `${(100 / 6) * nowBlock}%`
    })
  }
  if (nowBlock > 0) {
    $('.main-menu-block').fadeIn()
    $('#progress-block').fadeIn()
  } else {
    $('.main-menu-block').fadeOut()
    $('#progress-block').fadeOut()
  }
}

// 第一個按鈕
$('#first-btn').on('click', function (e) {
  blockMove(1)
})

// 選單按鈕
$('.menu-list__items').on('click', function (e) {
  const id = Number($(this).data('id'))
  blockMove(id)
  // $('.menu-wrap').removeClass('open')
  // $('.menu-mask').removeClass('open')
})
