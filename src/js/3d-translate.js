document.addEventListener( 'mousemove', onDocumentMouseMove, false );

const rotateDegree = 10
const windowHalfX = window.innerWidth / 2
const windowHalfY = window.innerHeight / 2
const mouseDegreeX = windowHalfX / rotateDegree
const mouseDegreeY = windowHalfY / rotateDegree

// 滑鼠移動事件
function onDocumentMouseMove( event ) {
  const mouseX = event.clientX - windowHalfX
  const mousey = event.clientY - windowHalfY
  const degreeX = mouseX / mouseDegreeX
  const degreeY = mousey / mouseDegreeY

  $('#main-title').css({
    'transform': `perspective(1000px) rotateY(${degreeX}deg) rotateX(${-degreeY}deg)`
  })
}