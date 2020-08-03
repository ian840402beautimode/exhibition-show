import './bg'
import './exhibition-area'
import './3d-translate'
import './blockMove'

const requireContext = require.context("../images", true, /^\.\/.*\.png$|^\.\/.*\.jp?g$|/);
requireContext.keys().map(requireContext);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


// 主選單
$('#menu-btn').on('click', function (e) {
  $('.menu-wrap').toggleClass('open')
  $('.menu-mask').toggleClass('open')
})

$('.menu-mask').on('click', function (e) {
  $('.menu-wrap').removeClass('open')
  $('.menu-mask').removeClass('open')
})

// area 區塊按鈕
$('#area-btn').on('click', function (e) {
  $('#special-area-block').fadeIn()
  $('.main-menu-block').hide()
})

$('#area-close-btn').on('click', function (e) {
  $('#special-area-block').fadeOut()
  $('.main-menu-block').show()
})


// event 區塊按鈕
$('#event-btn').on('click', function (e) {
  $('#special-event-block').fadeIn()
  $('#content-window').addClass('hide')
  $('.main-menu-block').hide()
  $('#progress-block').hide()
  $('#bg-line').css({
    'opacity': 0
  })
})

$('#event-close-btn').on('click', function (e) {
  $('#special-event-block').fadeOut()
  $('#content-window').removeClass('hide')
  $('.main-menu-block').show()
  $('#progress-block').show()
  $('#bg-line').css({
    'opacity': 0.4
  })
})