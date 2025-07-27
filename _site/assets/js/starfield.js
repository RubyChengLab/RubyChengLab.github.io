const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const starsGeometry = new THREE.BufferGeometry();
const starCount = 5000;
const positions = [];

for (let i = 0; i < starCount; i++) {
  positions.push(
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000
  );
}

starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
const starField = new THREE.Points(starsGeometry, starMaterial);
scene.add(starField);

camera.position.z = 500;

function animate() {
  requestAnimationFrame(animate);
  starField.rotation.y += 0.0005;
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
