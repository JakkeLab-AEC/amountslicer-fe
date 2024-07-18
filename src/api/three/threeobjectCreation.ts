import * as THREE from 'three'

/**
 * Data of mesh including vertices, faces, edges.
 */
type TriangulatedMeshBasic = {
    /**
     * Array of vertices where each vertex is represented by its x, y, and z coordinates.
     */
    vertices: { x: number, y: number, z: number }[],

    /**
     * Array of faces where each face is represented by three indices (A, B, C) that refer to the vertices array.
     */
    faces: { A: number, B: number, C: number }[],

    /**
     * Array of edges where each edge is represented by two indices (A, B) that refer to the vertices array.
     */
    edges: { A: number, B: number }[],
}

/**
 * 
 * @param meshData 
 */
export default function threeCreateTMesh(scene: THREE.Scene, meshData: TriangulatedMeshBasic) {

}