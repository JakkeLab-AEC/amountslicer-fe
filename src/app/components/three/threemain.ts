import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function CreateRenderer(canvas: HTMLCanvasElement): THREE.Renderer {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });

    renderer.setSize( canvas.width, canvas.height );
    document.body.appendChild( renderer.domElement );
    return renderer;
}

export function RunRenderer(renderer: THREE.Renderer, scene?: THREE.Scene, camera?: THREE.PerspectiveCamera) {    
    const targetScene = scene ? scene : new THREE.Scene();
    const targetCamera = camera ? camera : new THREE.PerspectiveCamera( 75, renderer.domElement.clientWidth / renderer.domElement.clientHeight, 0.1, 1000 );
    targetScene.background = new THREE.Color(0.8, 0.8, 0.8);
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    targetScene.add( cube );
    
    const controls = new OrbitControls(targetCamera, renderer.domElement);
    targetCamera.position.set(0, 0, 2);
    controls.update()
    scene?.add(new THREE.AxesHelper());

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(targetScene, targetCamera);
    }

    animate()
}