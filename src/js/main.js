import './bg'
import './main-menu'
import './exhibition-area'
import './3d-translate'
import './blockMove'

document.addEventListener('wheel', (e) => {
  console.log(e.deltaY)
})

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$('#area-btn').on('click', function (e) {
  $('#special-area-block').fadeIn()
  $('.main-menu-block').hide()
})

$('#area-close-btn').on('click', function (e) {
  $('#special-area-block').fadeOut()
  $('.main-menu-block').show()
})

$('#event-btn').on('click', function (e) {
  $('#special-event-block').fadeIn()
  $('#content-window').addClass('hide')
  $('.main-menu-block').hide()
  $('#progress-block').hide()
})

$('#event-close-btn').on('click', function (e) {
  $('#special-event-block').fadeOut()
  $('#content-window').removeClass('hide')
  $('.main-menu-block').show()
  $('#progress-block').show()
})