((w) => {
  class Game {
    constructor () {
      this.scene = new Scene()
      this.snake = new Snake(this.scene.scene)
      this.food = new Food(this.scene.scene)
    }
    init () {
      this.animate()
      this.onKeyDown()
    }
    animate () { // 动画
      setInterval(() => {
        this.snake.move()
        let snakeHead = this.snake.body[0]
        if (snakeHead.position.x === this.food.body.position.x
        && snakeHead.position.y === this.food.body.position.y
        && snakeHead.position.z === this.food.body.position.z ) {
          this.snake.eatFood(this.food.body)
          this.food.creatFood()
        }
        this.scene.renderer.render(this.scene.scene, this.scene.camera) // 渲染场景和相机
      }, 500)
    }
    onKeyDown () {
      document.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'q':
          this.snake.direction = 'front'
          break;
          case 'w':
          this.snake.direction = 'up'
          break;
          case 'ArrowUp':
          this.snake.direction = 'up'
          break;
          case 'e':
          this.snake.direction = 'rear'
          break;
          case 'a':
          this.snake.direction = 'left'
          break;
          case 'ArrowLeft':
          this.snake.direction = 'left'
          break;
          case 's':
          this.snake.direction = 'down'
          break;
          case 'ArrowDown':
          this.snake.direction = 'down'
          break;
          case 'd':
          this.snake.direction = 'right'
          break;
          case 'ArrowRight':
          this.snake.direction = 'right'
          break;
        }
      }, false);
    }
  }
  w.Game = Game
})(window)