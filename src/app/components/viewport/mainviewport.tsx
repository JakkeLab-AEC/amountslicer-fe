'use client';

import { useEffect, useRef } from "react";
import { CreateRenderer, InitiateRenderer } from "@/api/three/threemain";

import './viewportstyle.css'
import { SceneManager } from "@/model/threeScene/sceneManager";

export default function MainViewport() {    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasWidth = window.innerWidth - 320;
    const canvasHeight = window.innerHeight - 48;
    useEffect(() => {
        if(canvasRef.current) {
            const renderer = CreateRenderer(canvasRef.current);
            const rendererConfig = InitiateRenderer(renderer, undefined, undefined);
            SceneManager.setInstance(rendererConfig);
        }
    }, [])

    return (
        <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}
        style={{marginLeft: 320}}/>
    )
}