var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);



var World = {};
World.Objects = [];

var Dictionary = {};
Dictionary.Objects = {};
Dictionary.Objects["wooden-box"];



function logicStuff() {
  
}

function animate() {
  requestAnimationFrame( animate );
  logicStuff();
  renderer.render(scene,camera);
}
animate();
