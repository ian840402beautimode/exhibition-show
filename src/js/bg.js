import * as THREE from "three";
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'stats-js'

const bgDom = document.querySelector('#bg')

let scene, renderer, camera, controls, axes, statsUI
let pointLight, pointLight2
let rotateAngle = 0
let rotateAngle2 = 0
let cubeArr = []
let mouseX = 0, mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2
let objLoader = new OBJLoader2();
let sideSilver, sideGold
let box

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

  const amount = 2000 // 數量

  //* 材質貼圖
  sideSilver = textureLoader.load('/Textures/bump01.jpg')
  sideGold = textureLoader.load('/Textures/bump02.jpg')
  
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
  camera.position.set(90, 10, 90)
  camera.lookAt(scene.position)

  //* 控制器 & stats
  statsUI = initStats()
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.25
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.5
  controls.enableZoom = false

  //* 建立物件

  objLoader.load( '/nut_LOW.obj', (obj) => {
    // obj.traverse((child) => {
    //   if ( child instanceof THREE.Mesh ) {
    //     child.material.map = sideGold
    //   }
    // })

    for (let i = 0; i < amount; i++) {
      const nuts = obj.clone(true)
      
      const x = Math.random() * 250 - 125;
      const y = Math.random() * 250 - 125;
      const z = Math.random() * 250 - 125;
      
      
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

      cubeArr.push(nuts)
      
    }    
  }, null, null, null );


  //* 光源

  // 設置環境光 AmbientLight
  // let ambientLight = new THREE.AmbientLight(0xffffff)
  // scene.add(ambientLight)


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

  let pointLight4 = new THREE.PointLight(0xffffff, 1, 150) // 下
  pointLight4.position.set(0, -120, 0)
  pointLight4.castShadow = true

  let pointLight5 = new THREE.PointLight(0xcfc8ba, 4, 150)  // 左前
  pointLight5.position.set(0, 0, 120)
  pointLight5.castShadow = true

  let pointLight6 = new THREE.PointLight(0xcfc8ba, 4, 150)  // 右前
  pointLight6.position.set(120, 0, 0)
  pointLight6.castShadow = true

  let pointLight7 = new THREE.PointLight(0xcfc8ba, 2, 150)  // 右前
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
  if (rotateAngle > 2 * Math.PI) {
    rotateAngle = 0 // 超過 360 度後歸零
  } else {
    rotateAngle += 0.02 // 遞增角度
  }

  if (rotateAngle2 > 2 * Math.PI) {
    rotateAngle2 = 0 // 超過 360 度後歸零
  } else {
    rotateAngle2 += 0.02
  }

  // 光源延橢圓軌道繞 Y 軸旋轉
  pointLight.position.x = 230 * Math.cos(rotateAngle)
  pointLight.position.z = 230 * Math.sin(rotateAngle)

  pointLight2.position.x = 230 * Math.cos(rotateAngle2)
  pointLight2.position.z = 230 * Math.sin(rotateAngle2)
}


// 建立動畫
function animate() {
  // pointLight.color.setHex(0xff0000)
  for (let i = 0; i < cubeArr.length; i++) {
    cubeArr[i].rotation.x += 0.01
    cubeArr[i].rotation.y += 0.01
    cubeArr[i].rotation.z += 0.01
    cubeArr[i].position.x += 0.0001
    cubeArr[i].position.y += 0.0001
    cubeArr[i].position.z += 0.0001
  }
}

// 渲染場景
function render() {
  // console.log(Date.now())
  camera.position.x += ( mouseX - camera.position.x ) * 0.0001;
	camera.position.y += ( - mouseY - camera.position.y ) * 0.0001;
  animate()
  pointLightAnimation()
  statsUI.update()
  controls.update()
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}

// 滑鼠移動事件
function onDocumentMouseMove( event ) {

  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;

}

// 監聽螢幕寬高來做簡單 RWD 設定
window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// document.addEventListener( 'mousemove', onDocumentMouseMove, false );

init()
render()
