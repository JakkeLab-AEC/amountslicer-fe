import { CreateRenderer, InitiateRenderer } from '@/api/three/threemain';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'three';

export class SceneManager {
    private static instance : SceneManager;
    private scene: THREE.Scene;
    private camera: THREE.Camera;
    private renderer: THREE.Renderer;
    private controls: OrbitControls;
    
    private constructor(config: {renderer: THREE.Renderer, scene: THREE.Scene, camera: THREE.Camera, control: OrbitControls}) {
        this.renderer = config.renderer;
        this.scene = config.scene
        this.camera = config.camera
        this.controls = config.control;
        this.controls.update();
    }

    public static getInstance(): SceneManager {
        if (!SceneManager.instance) {
            throw new Error("SceneManager is not initialized. Call setInstance first.");
        }
        return SceneManager.instance;
    }

    public static setInstance(config: {renderer: THREE.Renderer, scene: THREE.Scene, camera: THREE.Camera, control: OrbitControls}): void {
        SceneManager.instance = new SceneManager(config);
    }

    public addObject(object: THREE.Object3D): void {
        this.scene.add(object);
        this.render();
    }

    public removeObject(object: THREE.Object3D): void {
        this.scene.remove(object);
        this.render();
    }

    public render(): void {
        this.renderer.render(this.scene, this.camera);
    }

    public animate(): void {
        const animate = () => {
            requestAnimationFrame(animate);
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        };
        animate();
    }
}