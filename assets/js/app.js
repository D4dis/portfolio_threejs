import * as THREE from 'three';

const canvas = document.getElementById('canvas');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

camera.position.set(0, 0, 2);

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);

loop();

function loop(){
  requestAnimationFrame(loop);
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}