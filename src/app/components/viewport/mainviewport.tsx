'use client';

import { useEffect, useRef } from "react";
import { CreateRenderer, RunRenderer } from "../three/threemain";

import './viewportstyle.css'

export default function MainViewport() {    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasWidth = window.innerWidth - 320;
    const canvasHeight = window.innerHeight - 48;
    useEffect(() => {
        if(canvasRef.current) {
            const renderer = CreateRenderer(canvasRef.current);
            RunRenderer(renderer, undefined, undefined);
        }
    }, [])

    return (
        <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}
        style={{marginLeft: 320}}/>
    )
}