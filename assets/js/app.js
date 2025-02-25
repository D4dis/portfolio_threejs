import * as THREE from 'three';

// import GUI from 'lil-gui';

// const gui = new GUI();

const canvas = document.getElementById('canvas');

// CUBE

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const controls = new OrbitControls(camera, render.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);

// function makeInstance(geometry, color, x) {
//   const material = new THREE.MeshPhongMaterial({ color });

//   const mesh = new THREE.Mesh(geometry, material);
//   scene.add(mesh);
//   mesh.position.x = x;

//   return mesh;
// }

// const light = new THREE.DirectionalLight(0xFFFFFF, 3);

// light.position.set(-1, 2, 4);

// const cubes = [
//   makeInstance(geometry, 0x44aa88, 0),
//   makeInstance(geometry, 0x8844aa, -2),
//   makeInstance(geometry, 0xaa8844, 2),
// ];


// scene.add(light);

// camera.position.set(0, 0, 2);

// const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

// renderer.setSize(window.innerWidth, window.innerHeight);

// render(1);

// function resizeRendererToDisplaySize(renderer) {
//   const canvas = renderer.domElement;
//   const pixelRatio = window.devicePixelRatio;
//   const width  = Math.floor( canvas.clientWidth  * pixelRatio );
//   const height = Math.floor( canvas.clientHeight * pixelRatio );
//   const needResize = canvas.width !== width || canvas.height !== height;
//   if (needResize) {
//     renderer.setSize(width, height, false);
//   }
//   return needResize;
// }

// renderer.setPixelRatio(window.devicePixelRatio);

// function render(time) {
//   time *= 0.001;

//   if (resizeRendererToDisplaySize(renderer)) {
//     const canvas = renderer.domElement;
//     camera.aspect = canvas.clientWidth / canvas.clientHeight;
//     camera.updateProjectionMatrix();
//   }

//   cubes.forEach((cube, ndx) => {
//     const speed = 1 + ndx * .1;
//     const rot = time * speed;
//     cube.rotation.x = rot;
//     cube.rotation.y = rot;
//   });
//   renderer.render(scene, camera);
//   requestAnimationFrame(render);
// }

// LINE

// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(window.innerWidth, window.innerHeight);

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth, window.innerHeight, 1, 500);
// camera.position.set(0, 0, 100);
// camera.lookAt(0, 0, 0);

// const scene = new THREE.Scene();

// const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

// const points = [];
// points.push(new THREE.Vector3(-10, 0, 0));
// points.push(new THREE.Vector3(0, 10, 0));
// points.push(new THREE.Vector3(10, 0, 0));

// const geometry = new THREE.BufferGeometry().setFromPoints(points);

// const line = new THREE.Line(geometry, material);

// scene.add(line);
// renderer.render(scene, camera);

//SUN MOON

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 50, 0);
// camera.up.set(0, 0, 1);
// camera.lookAt(0, 0, 0);

// const renderer = new THREE.WebGLRenderer({ canvas });

// const objects = [];

// const radius = 1;
// const widthSegments = 6;
// const heightSegments = 6;
// const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

// const solarSystem = new THREE.Object3D();
// scene.add(solarSystem);
// objects.push(solarSystem);

// const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xFFFF00 });
// const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
// sunMesh.scale.set(5, 5, 5);
// solarSystem.add(sunMesh);
// objects.push(sunMesh);

// const earthOrbit = new THREE.Object3D();
// earthOrbit.position.x = 10;
// solarSystem.add(earthOrbit);
// objects.push(earthOrbit);

// const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x2233FF, emissive: 0x112244 });
// const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
// earthOrbit.add(earthMesh);
// objects.push(earthMesh);

// const moonOrbit = new THREE.Object3D();
// moonOrbit.position.x = 2;
// earthOrbit.add(moonOrbit);

// const moonMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, emissive: 0x222222 });
// const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
// moonMesh.scale.set(.5, .5, .5);
// moonOrbit.add(moonMesh);
// objects.push(moonMesh);

// const light = new THREE.PointLight(0xFFFFFF, 500);
// scene.add(light);


// class AxisGridHelper {
//   constructor(node, units = 10) {
//     const axes = new THREE.AxesHelper();
//     axes.material.depthTest = false;
//     axes.renderOrder = 2;  // after the grid
//     node.add(axes);

//     const grid = new THREE.GridHelper(units, units);
//     grid.material.depthTest = false;
//     grid.renderOrder = 1;
//     node.add(grid);

//     this.grid = grid;
//     this.axes = axes;
//     this.visible = false;
//   }
//   get visible() {
//     return this._visible;
//   }
//   set visible(v) {
//     this._visible = v;
//     this.grid.visible = v;
//     this.axes.visible = v;
//   }
// }


// function makeAxisGrid(node, label, units) {
//   const helper = new AxisGridHelper(node, units);
//   gui.add(helper, 'visible').name(label);
// }

// makeAxisGrid(solarSystem, 'solarSystem', 25);
// makeAxisGrid(sunMesh, 'sunMesh');
// makeAxisGrid(earthOrbit, 'earthOrbit');
// makeAxisGrid(earthMesh, 'earthMesh');
// makeAxisGrid(moonOrbit, 'moonOrbit');
// makeAxisGrid(moonMesh, 'moonMesh');

// function resizeRendererToDisplaySize(renderer) {

//   const canvas = renderer.domElement;
//   const width = canvas.clientWidth;
//   const height = canvas.clientHeight;
//   const needResize = canvas.width !== width || canvas.height !== height;
//   if (needResize) {

//     renderer.setSize(width, height, false);

//   }

//   return needResize;

// }

// function render(time) {

//   time *= 0.001;

//   if (resizeRendererToDisplaySize(renderer)) {

//     const canvas = renderer.domElement;
//     camera.aspect = canvas.clientWidth / canvas.clientHeight;
//     camera.updateProjectionMatrix();

//   }

//   objects.forEach((obj) => {

//     obj.rotation.y = time;

//   });

//   renderer.render(scene, camera);

//   requestAnimationFrame(render);

// }

// requestAnimationFrame(render);

// render(1);


// TANK

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);

