import * as THREE from "three";
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2.js";
import Stats from 'stats-js'

const bgDom = document.querySelector('#webGl')

let scene, renderer, camera, axes, statsUI
let objArr = []
let pointLight, pointLight2
let lightAngle = 0
let lightAngle2 = 0
let cameraAngle = 0
let cameraAngleStart = 20
let cameraPosition = 250
let mouseX = 0, mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2
let objLoader = new OBJLoader2();
let sideSilver, sideGold

//* 初始化 stats
function initStats() {
  const stats = new Stats()
  stats.setMode(0) // FPS mode
  document.getElementById('stats').appendChild(stats.dom)
  return stats
}

const textureLoader = new THREE.TextureLoader();

// 初始化場景、渲染器、相機、物體
function init() {

  const amount = 1700 // 數量

  //* 材質貼圖
  sideSilver = textureLoader.load('images/textures/silver.jpg')
  sideGold = textureLoader.load('images/textures/gold.jpg')
  
  sideSilver.wrapS = THREE.RepeatWrapping;
  sideSilver.wrapT = THREE.RepeatWrapping;
  sideSilver.repeat.set( 2, 1 );

  //* 建立場景
  scene = new THREE.Scene()

  //* 建立渲染器
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight) // 場景大小
  renderer.setClearColor(0x000000, 1.0) // 預設背景顏色
  renderer.shadowMap.enable = true // 陰影效果

  // 將渲染器的 DOM 綁到網頁上
  bgDom.appendChild(renderer.domElement)

  //* 建立相機
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  )
  camera.position.set(100, 0, 100)
  camera.lookAt(scene.position)

  //* 控制器 & stats
  statsUI = initStats()

  //* 建立物件

  objLoader.load( 'nut_LOW.obj', (obj) => {
    for (let i = 0; i < amount; i++) {
      const nuts = obj.clone(true)
      
      const x = Math.random() * 220 - 110;
      const y = Math.random() * 220 - 110;
      const z = Math.random() * 220 - 110;
      
      
      nuts.position.set(x, y, z)
      
      nuts.rotation.x = Math.random() * 10
		  nuts.rotation.y = Math.random() * 10
      nuts.rotation.z = Math.random() * 10
      
      nuts.children[0].material = i % 2 === 0 ? new THREE.MeshStandardMaterial({
        roughness: 0.3,
        metalness: 0.8,
        map: sideSilver 
      }) : new THREE.MeshStandardMaterial({
        roughness: 0.3,
        metalness: 0.8,
        map: sideGold
      })
      
      scene.add(nuts)

      objArr.push(nuts)
      
    }    
  }, null, null, null );


  //* 光源
  //建立點光源
  pointLight = new THREE.PointLight(0xcfc8ba, 5, 200)  // 繞光
  pointLight.position.set(200, 10, 200)
  pointLight.castShadow = true
  
  
  pointLight2 = new THREE.PointLight(0xffffff, 2, 200)  // 繞光
  pointLight2.position.set(-200, 10, -200)
  pointLight2.castShadow = true

  let pointLight3 = new THREE.PointLight(0xffffff, 8, 150) // 上
  pointLight3.position.set(0, 120, 0)
  pointLight3.castShadow = true

  let pointLight4 = new THREE.PointLight(0xffffff, 2, 150) // 下
  pointLight4.position.set(0, -120, 0)
  pointLight4.castShadow = true

  let pointLight5 = new THREE.PointLight(0xcfc8ba, 5, 150)  // 左前
  pointLight5.position.set(0, 0, 120)
  pointLight5.castShadow = true

  let pointLight6 = new THREE.PointLight(0xcfc8ba, 4, 150)  // 右前
  pointLight6.position.set(120, 0, 0)
  pointLight6.castShadow = true

  let pointLight7 = new THREE.PointLight(0xcfc8ba, 2, 150)  // 右後下
  pointLight6.position.set(0, -100, -120)
  pointLight6.castShadow = true
  
  scene.add(pointLight)
  scene.add(pointLight2)
  scene.add(pointLight3)
  scene.add(pointLight4)
  scene.add(pointLight5)
  scene.add(pointLight6)
  scene.add(pointLight7)


  //* 參數為座標軸長度
  axes = new THREE.AxesHelper(20) 
  // scene.add(axes)
}

// 第一光源
function pointLightAnimation() {
  if (lightAngle > 2 * Math.PI) {
    lightAngle = 0 // 超過 360 度後歸零
  } else {
    lightAngle += 0.02 // 遞增角度
  }

  if (lightAngle2 > 2 * Math.PI) {
    lightAngle2 = 0 // 超過 360 度後歸零
  } else {
    lightAngle2 += 0.02
  }

  // 光源延橢圓軌道繞 Y 軸旋轉
  pointLight.position.x = 230 * Math.cos(lightAngle)
  pointLight.position.z = 230 * Math.sin(lightAngle)

  pointLight2.position.x = 230 * Math.cos(lightAngle2)
  pointLight2.position.z = 230 * Math.sin(lightAngle2)
}


// 建立動畫
function animate() {
  // pointLight.color.setHex(0xff0000)
  for (let i = 0; i < objArr.length; i++) {
    objArr[i].rotation.x += 0.01
    objArr[i].rotation.y += 0.01
    objArr[i].rotation.z += 0.01
    objArr[i].position.x += 0.0001
    objArr[i].position.y += 0.0001
    objArr[i].position.z += 0.0001
  }
}

function cameraAnimate() {
  if (camera.position.x > 50) {
    cameraPosition -= 1
  } else {
    cameraAngleStart = 8
  }

  if (cameraAngle > (2 * Math.PI) - (Math.PI / 180)) {
    cameraAngle = 0
  } else {
    if (camera.position.x > 50) {
      cameraAngle += (Math.PI / 180) / cameraAngleStart
    } else {
      if (mouseX > 0) {
        cameraAngle += ((Math.PI / 180) / cameraAngleStart) + (mouseX * 0.000001)
      } else {
        cameraAngle += ((Math.PI / 180) / cameraAngleStart) + (mouseX * 0.000005)
      }
    }
  }
  
  camera.position.x = cameraPosition * Math.cos(cameraAngle)
  camera.position.z = cameraPosition * Math.sin(cameraAngle)
  camera.lookAt(scene.position)
}

// 渲染場景
function render() {
  if (mouseY > 0) {
    if (camera.position.y < 30) {
      camera.position.y += mouseY * 0.0001
    }
  } else {
    if (camera.position.y > -30) {
      camera.position.y += mouseY * 0.0001
    }
  }

  animate()
  cameraAnimate()
  pointLightAnimation()
  statsUI.update()
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}

// 滑鼠移動事件
function onDocumentMouseMove( event ) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

// 監聽螢幕寬高來做簡單 RWD 設定

// Loading
setTimeout(() => {
  render()
  $('#webGl').addClass('start')
}, 3000)

init()

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

document.addEventListener( 'mousemove', onDocumentMouseMove, false );