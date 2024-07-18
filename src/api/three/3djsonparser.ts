import * as THREE from 'three';
import { SceneManager } from '@/model/threeScene/sceneManager';

export function createMeshFromGeometryData(geometryData: any):THREE.Mesh[] {
    const res = geometryData.map((data: any) => {
        const vertices = new Float32Array(data.vertices.flat());
        const faces = new Uint32Array(data.faces.flat());

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex(new THREE.BufferAttribute(faces, 1));

        if (data.normals && data.normals.length > 0) {
            const normals = new Float32Array(data.normals.flat());
            geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
        } else {
            // Compute vertex normals if not provided
            geometry.computeVertexNormals();
        }

        const material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: 'white',
            transparent: true,
            opacity: 0.8,
            shininess: 100
        });

        const mesh = new THREE.Mesh(geometry, material);

        // Set position using location data
        if (data.location) {
            mesh.position.set(data.location[0], data.location[1], data.location[2]);
        }

        // Add Edge to Mesh
        const edgesGeometry = new THREE.EdgesGeometry(geometry);
        const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
        const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
        mesh.add(edges);

        return mesh;
    });
    return res;
}
