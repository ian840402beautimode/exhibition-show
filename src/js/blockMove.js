let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let basicWidth = windowWidth * 1.5
const degree60 = Math.PI / 3
const offsetY = 0

let hexCoordinate = []
let nowBlock = 0

// 取得六邊型區塊座標與定位
const getHexCoordinate = () => {
  const hexAngle1 = {
    x: basicWidth,
    y: 0,
  }

  const hexAngle2 = {
    x: hexAngle1.x + basicWidth * Math.cos(degree60),
    y: 0 - basicWidth * Math.sin(degree60),
  }

  const hexAngle3 = {
    x: (2 * hexAngle1.x) + (basicWidth * Math.cos(degree60)),
    y: 0 - basicWidth * Math.sin(degree60),
  }

  const hexAngle4 = {
    x: (2 * basicWidth) + (2 * basicWidth * Math.cos(degree60)),
    y: 0,
  }

  const hexAngle5 = {
    x: hexAngle1.x + (basicWidth * Math.cos(degree60)),
    y: basicWidth * Math.sin(degree60),
  }  

  const hexAngle6 = {
    x: (2 * hexAngle1.x) + (basicWidth * Math.cos(degree60)),
    y: basicWidth * Math.sin(degree60),
  }

  hexCoordinate = [hexAngle2, hexAngle3, hexAngle4, hexAngle6, hexAngle5, hexAngle1]

  $('.content-area').each(function (index, item) {
    $(item).css({
      'transform': `translate(${hexCoordinate[index].x}px, ${hexCoordinate[index].y + offsetY}px)`
    })
  })
}

getHexCoordinate()

// 上一個區塊
const blockPrev = (dest) => {
  const start = nowBlock
  for (let i = start; i > dest; i--) {
    setTimeout(() => {
      $('#content-window').css({
        'transform': `translate(-${hexCoordinate[i - 2].x}px, ${-hexCoordinate[i - 2].y}px)`
      })
    }, 500 * -(i - start))
  }
}

// 下一個區塊
const blockNext = (dest) => {
  const start = nowBlock
  for (let i = start; i < dest; i++) {
    setTimeout(() => {
      $('#content-window').css({
        'transform': `translate(-${hexCoordinate[i].x}px, ${-hexCoordinate[i].y}px)`
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
  $('.menu-wrap').removeClass('open')
  $('.menu-mask').removeClass('open')
})

window.addEventListener('resize', function() {
  console.log('resize')
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight
  basicWidth = windowWidth * 1.5

  getHexCoordinate()

  $('#content-window').css({
    'transform': `translate(-${hexCoordinate[nowBlock - 1].x}px, ${-hexCoordinate[nowBlock - 1].y}px)`
  })
})