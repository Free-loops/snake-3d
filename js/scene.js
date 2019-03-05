((w) => {
  class Scene {
    constructor () {
      this.renderer = null
      this.scene = null
      this.camera = null
      this.light = null
      this.controls = null
      this.init()
    }
    init () {
      this.initRender() // 渲染器
      this.initScene() // 场景
      this.initCamera() // 相机
      this.initLight() // 灯光
      this.initControls() // 控制器
    }
    initRender () {
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(window.innerWidth, window.innerHeight) // 渲染大小
      document.body.appendChild(this.renderer.domElement) // 渲染器添加到网页
    }
    initScene () {
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0x0B0C0A)
    }
    initCamera () { 
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
      this.camera.position.z = 500 // 设置相机位置
    }
    initLight () {
      // 创建点光源
      this.light = new THREE.AmbientLight(0xffffff)
      this.scene.add(this.light)
    }
    initControls () {
      this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
      this.controls.addEventListener( 'change', this.renderer.render( this.scene, this.camera ) ); // use only if there is no animation loop
      this.controls.minDistance = -10;
      this.controls.maxDistance = 1000;
      this.controls.enablePan = false;
    }
  }
  w.Scene = Scene
})(window)