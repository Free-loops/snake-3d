;((w) => {
  class Snake {
    constructor (scene) {
      this.scene = scene
      this.jointSize = 20
      this.initBody = [{x: 3, y: 2, z: 0, color: 0xff0000}, {x: 2, y: 2, z: 0, color: 0x00ff00}, {x: 1, y:2, z: 0, color: 0x00ff00}]
      this.body = []
      this.direction = 'right'
      this.initSnake()
    }
    initSnake () {
      this.initBody.forEach(item => {
        let geometry = new THREE.BoxBufferGeometry( this.jointSize, this.jointSize, this.jointSize );
        let material = new THREE.MeshBasicMaterial( {color: item.color, wireframe: true} );
        let joint = new THREE.Mesh( geometry, material );
        this.scene.add( joint );
        this.body.push(joint)
        joint.position.x = item.x * this.jointSize
        joint.position.y = item.y * this.jointSize
        joint.position.z = item.z * this.jointSize
      })
    }
    move () {
      for (let i = this.body.length - 1; i > 0; i--) {
        this.body[i].position.x = this.body[i - 1].position.x
        this.body[i].position.y = this.body[i - 1].position.y
        this.body[i].position.z = this.body[i - 1].position.z
      }
      switch (this.direction) {
        case 'down':
          this.body[0].position.y-=1 * this.jointSize;
          break;
        case 'up':
          this.body[0].position.y+=1 * this.jointSize;
          break;
        case 'rear':
          this.body[0].position.z-=1 * this.jointSize;
          break;
        case 'front':
          this.body[0].position.z+=1 * this.jointSize;
          break;
        case 'right':
          this.body[0].position.x+=1 * this.jointSize;
          break;
        case 'left':
          this.body[0].position.x-=1 * this.jointSize;
          break;
      }
    }
    eatFood (food) {
      this.body.push(food)
    }
  }
  w.Snake = Snake
})(window)