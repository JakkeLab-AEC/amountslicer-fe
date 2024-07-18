'use client';

import { useState } from "react";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sideNavBar";
import MainViewport from "../components/viewport/mainviewport";
import { getGeometry } from "@/api/ifcserver/ifcServerApi";
import { createMeshFromGeometryData } from "@/api/three/3djsonparser";
import { SceneManager } from "@/model/threeScene/sceneManager";

export default function Viewer() {
    const [files, setFiles] = useState<{file: File, state: boolean}[]>([]);
    const updateFileList = (fileList: File[]) => {
        const newFileList:{file: File, state: boolean}[] = [...files];
        const loadedFiles = fileList.map(f => {
            return {file : f, state: false}
        })

        newFileList.push(...loadedFiles)
        setFiles(newFileList);
        console.log(newFileList);
    }

    const updateFileCheckList = (index: number, state: boolean) => {
        files[index].state = state;
        setFiles(files);
        console.log(files);
    }


    const dropFiles = () => {
        const newFileList:{file: File, state: boolean}[] = files.filter(item => !item.state)
        newFileList.forEach(item => item.state = false);
        setFiles(newFileList);
        console.log(newFileList);
    }

    const uploadFile = async () => {
        if(files.length == 0) {
            alert('No files added');
            return;
        }

        const data = await getGeometry(files[0].file);
        const meshes = createMeshFromGeometryData(data);
        console.log(meshes);
        meshes.forEach(mesh => SceneManager.getInstance().addObject(mesh));
        SceneManager.getInstance().animate();
    }

    return (
        <main>
            <Header/>
            <aside>
                <Sidebar 
                    files={files.map(m => m.file)} 
                    updateFileList={updateFileList} 
                    updateCheckItemList={updateFileCheckList} 
                    dropFiles={dropFiles}
                    uploadFileToServer={uploadFile}
                    />
            </aside>
            <div style={{position: 'relative'}}>
                <MainViewport />
            </div>
        </main>
    )
}