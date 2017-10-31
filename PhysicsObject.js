PhysicsObject = class extends GraphicsObject {
  constructor(mesho = null) {
    super(mesho);
    this.velocity = {x:0,y:0,z:0};
    this.acceleration = {x:0,y:0,z:0}
  }
}
