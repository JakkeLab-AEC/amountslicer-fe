import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer, RenderPass, ShaderPass, FXAAShader } from 'three/addons/Addons.js';
export function CreateRenderer(canvas: HTMLCanvasElement): THREE.Renderer {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    });

    renderer.setSize( canvas.width, canvas.height );
    document.body.appendChild( renderer.domElement );
    return renderer;
}

export function InitiateRenderer(renderer: THREE.Renderer, scene?: THREE.Scene, camera?: THREE.PerspectiveCamera) {    
    const targetScene = scene ? scene : new THREE.Scene();
    const targetCamera = camera ? camera : new THREE.PerspectiveCamera( 75, renderer.domElement.clientWidth / renderer.domElement.clientHeight, 0.1, 1000 );
    const color = new THREE.Color(0.9, 0.9, 0.9);
    targetScene.background = color;
    
    //Default Control and camera
    const controls = new OrbitControls(targetCamera, renderer.domElement);
    controls.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.PAN,
        RIGHT: THREE.MOUSE.ROTATE,
    }
    targetCamera.position.set(0, 0, 2);
    targetScene.add(new THREE.AxesHelper());

    //Default Light
    const ambientLight = new THREE.AmbientLight('white');
    targetScene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight('white', 1);
    directionalLight.position.set(5, 10, 7.5);
    targetScene.add(directionalLight);

    function render() {
        renderer.render(targetScene, targetCamera);
    }

    controls.addEventListener('change', render);

    render();
    return {renderer: renderer, scene: targetScene, camera: targetCamera, control: controls}
}