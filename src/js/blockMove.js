let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let basicWidth = windowWidth >= 1024 ? windowWidth * 1.5 : windowHeight * 2
const degree60 = Math.PI / 3
const offsetY = -windowHeight

let hexCoordinate = []
let nowBlock = 0
let scrollLoading = false



// 取得六邊型區塊座標與定位
const getHexCoordinate = () => {
  const startPosition = {
    x: 0,
    y: 0
  }

  const hexAngle1 = {
    x: basicWidth,
    y: 0 - offsetY,
  }

  const hexAngle2 = {
    x: hexAngle1.x + basicWidth * Math.cos(degree60),
    y: 0 - basicWidth * Math.sin(degree60) - offsetY,
  }

  const hexAngle3 = {
    x: (2 * hexAngle1.x) + (basicWidth * Math.cos(degree60)),
    y: 0 - basicWidth * Math.sin(degree60) - offsetY,
  }

  const hexAngle4 = {
    x: (2 * basicWidth) + (2 * basicWidth * Math.cos(degree60)),
    y: 0 - offsetY,
  }

  const hexAngle5 = {
    x: hexAngle1.x + (basicWidth * Math.cos(degree60)),
    y: basicWidth * Math.sin(degree60) - offsetY,
  }  

  const hexAngle6 = {
    x: (2 * hexAngle1.x) + (basicWidth * Math.cos(degree60)),
    y: basicWidth * Math.sin(degree60) - offsetY,
  }

  hexCoordinate = [startPosition, hexAngle2, hexAngle3, hexAngle4, hexAngle6, hexAngle5, hexAngle1]

  $('.content-area').each(function (index, item) {
    $(item).css({
      'opacity' : 1,
      'transform': `translate(${hexCoordinate[index+1].x}px, ${hexCoordinate[index+1].y}px)`
    })
  })
}

// 上一個區塊
const blockPrev = (dest) => {
  const start = nowBlock
  for (let i = start; i > dest; i--) {
    setTimeout(() => {
      $('#content-window').css({
        'transform': `translate(-${hexCoordinate[i - 1].x}px, ${-hexCoordinate[i - 1].y}px)`
      })
      lineMove(i - 1)
    }, 500 * -(i - start))
  }
}

// 下一個區塊
const blockNext = (dest) => {
  const start = nowBlock
  for (let i = start; i < dest; i++) {
    setTimeout(() => {
      $('#content-window').css({
        'transform': `translate(-${hexCoordinate[i + 1].x}px, ${-hexCoordinate[i + 1].y}px)`
      })
      lineMove(i + 1)
    }, 500 * (i - start))
  }
}

const lineMove = (dest) => {
  switch (dest) {
    case 0:
      $('#bg-line').css({
        'opacity': 0,
        'transform': 'rotate(-30deg)'
      })
      break
    case 1:
      $('#bg-line').css({
        'opacity': 0.4,
        'transform': 'rotate(-30deg)'
      })
      break
    case 2:
      $('#bg-line').css({
        'opacity': 0.4,
        'transform': 'rotate(0deg)'
      })
      break
    case 3:
      $('#bg-line').css({
        'opacity': 0.4,
        'transform': 'rotate(60deg)'
      })
      break
    case 4:
      $('#bg-line').css({
        'opacity': 0.4,
        'transform': 'rotate(120deg)'
      })
      break
    case 5:
      $('#bg-line').css({
        'opacity': 0.4,
        'transform': 'rotate(180deg)'
      })
      break
    case 6:
      $('#bg-line').css({
        'opacity': 0.4,
        'transform': 'rotate(240deg)'
      })
      break
  }
}

// 區塊移動
const blockMove = (dest) => {
  if (dest >= 7) {
    $('#content-window').css({
      'transform': `translate(-${hexCoordinate[1].x}px, ${-hexCoordinate[1].y}px)`
    })
    lineMove(1)
    nowBlock = 1
  }
  if (dest >= 0 && dest <= 6) {
    if (dest > nowBlock) {
      blockNext(dest)
    } else if (dest < nowBlock) {
      blockPrev(dest)
    }

    nowBlock = dest

    $('#progress-block').find('.progress-now').text('0' + nowBlock)
    $('#progress-block').find('.line-item').css({
      'width': `${(100 / 6) * nowBlock}%`
    })

    if (nowBlock === 6) {
      $('#progress-block').find('.progress-end').addClass('all')
    } else {
      $('#progress-block').find('.progress-end').removeClass('all')
    }
  }
  if (nowBlock > 0) {
    $('.main-menu-block').fadeIn()
    $('#progress-block').fadeIn()
  } else {
    $('.main-menu-block').fadeOut()
    $('#progress-block').fadeOut()
  }
}

// 初始化狀態
getHexCoordinate()

// 第一個按鈕
$('#first-btn').on('click', function (e) {
  blockMove(1)
})

// 選單按鈕
$('.menu-list__items').on('click', function (e) {
  const id = Number($(this).data('id'))
  $('#content-window').css({
    'transform': `translate(-${hexCoordinate[id].x}px, ${-hexCoordinate[id].y}px)`
  })
  lineMove(id)
  $('.menu-wrap').removeClass('open')
  $('.menu-mask').removeClass('open')
})

// 滾輪事件
document.querySelector('#content-window').addEventListener('wheel', (e) => {
  const isScrollingDown = Math.sign(e.wheelDeltaY)
  if (!scrollLoading) {
    scrollLoading = true
    if (isScrollingDown < 0) {
      if (nowBlock >= 0 && nowBlock <= 6) {
        blockMove(nowBlock + 1)
      }
    } else if (isScrollingDown > 0) {
      if (nowBlock >= 1 && nowBlock <= 6) {
        blockMove(nowBlock - 1)
      }
    }
    setTimeout(() => {
      scrollLoading = false
    }, 500)
  }
})

// RWD
window.addEventListener('resize', function() {
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight
  basicWidth = windowWidth >= 1024 ? windowWidth * 1.5 : windowHeight * 2

  getHexCoordinate()

  if (nowBlock > 0) {
    $('#content-window').css({
      'transform': `translate(-${hexCoordinate[nowBlock].x}px, ${-hexCoordinate[nowBlock].y}px)`
    })
  }
})