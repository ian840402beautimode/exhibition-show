import './bg'
import './main-menu'
import './exhibition-area'
import './3d-translate'
import './blockMove'

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