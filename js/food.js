((w) => {
  class Food {
    constructor (scene) {
      this.scene = scene
      this.size = 20
      this.color = 0x00ff00
      this.body = null
      this.group = null
      this.creatFood()
    }
    creatFood () {
      let geometry = new THREE.BoxBufferGeometry( this.size, this.size, this.size );
      let material = new THREE.MeshBasicMaterial( {color: this.color, wireframe: true} );
      let food = new THREE.Mesh( geometry, material );
      this.scene.add( food );
      food.position.x = getRandom(-10, 10) * this.size
      food.position.y = getRandom(-10, 10) * this.size
      food.position.z = getRandom(-10, 10) * this.size
      this.body = food
      // this.creatWG()
      function getRandom (a, b) {
        return Math.floor(Math.random() * (b-a) + a)
      }
    }
    creatWG () {
      if (this.group) this.scene.remove(this.group)
      this.group = new THREE.Group()
      for (let i = 0; i < 3; i++) {
        let geometry = new THREE.Geometry();//声明一个空几何体对象
        let arr = [0, 0, 0]
        arr[i] = 1000
        let p1 = new THREE.Vector3(this.body.position.x + arr[0], this.body.position.y + arr[1], this.body.position.z + arr[2]);//顶点1坐标
        let p2 = new THREE.Vector3(this.body.position.x - arr[0], this.body.position.y - arr[1], this.body.position.z - arr[2]);//顶点2坐标
        geometry.vertices.push(p1,p2); //顶点坐标添加到geometry对象
        let material=new THREE.LineBasicMaterial({
          color:0xffffff //线条颜色
        });//材质对象
        let line=new THREE.Line(geometry,material);//线条模型对象
        this.group.add(line)
      }
      this.scene.add(this.group);//线条对象添加到场景中
    }
  }
  w.Food = Food
})(window)