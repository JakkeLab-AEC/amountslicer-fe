import { SceneManager } from "@/model/threeScene/sceneManager";
import ButtonPositive from "../../button/buttonPositive";
import * as THREE from 'three';

export default function Models() {

    const addCube = () => {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 'green' });
        const cube = new THREE.Mesh(geometry, material);
        SceneManager.getInstance().addObject(cube)
    }

    return (
        <div>
            <ButtonPositive text={"Test:AddCube"} width={'100%'} onClickHandler={addCube}/>
        </div>
    )
}