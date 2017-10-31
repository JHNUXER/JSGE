GraphicsObject = class {
  constructor(mesho = null) {
    this.mesh = mesho || new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:0x808080}));
    this.position = {x:0,y:0,z:0};
    this.rotation = {x:0,y:0,z:0};
  }
}

GraphicsObject.prototype.setRotation = function(nX,nY,nZ) {
  this.mesh.rotation.x = nX;
  this.mesh.rotation.y = nY;
  this.mesh.rotation.z = nZ;
  this.checkRotationValue;
};

GraphicsObject.prototype.setPosition = function(nX,nY,nZ) {
  this.mesh.position.x = nX;
  this.mesh.position.y = nY;
  this.mesh.position.z = nZ;
}

GraphicsObject.prototype.rotate = function(nX,nY,nZ) {
  this.mesh.rotation.x += nX;
  this.mesh.rotation.y += nY;
  this.mesh.rotation.z += nZ;
  this.checkRotationValue;
};

GraphicsObject.prototype.translate = function(nX,nY,nZ) {
  this.mesh.position.x += nX;
  this.mesh.position.y += nY;
  this.mesh.position.z += nZ;
}

GraphicsObject.prototype.checkRotationValue = function() {
  while (this.mesh.rotation.x > 360) {
    this.mesh.rotation.x -= 360;
  }
  while (this.mesh.rotation.y > 360) {
    this.mesh.rotation.y -= 360;
  }
  while (this.mesh.rotation.z > 360) {
    this.mesh.rotation.z -= 360;
  }
  while (this.mesh.rotation.x < 0) {
    this.mesh.rotation.x += 360;
  }
  while (this.mesh.rotation.y < 0) {
    this.mesh.rotation.y += 360;
  }
  while (this.mesh.rotation.z < 0) {
    this.mesh.rotation.z += 360;
  }
}
