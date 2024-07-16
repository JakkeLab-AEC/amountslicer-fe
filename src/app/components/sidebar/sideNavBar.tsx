'use client';

import { useState } from "react";
import MainViewport from "../viewport/mainviewport";
import Button from "./iconButton";
import ImportFile from "./pages/importfile/importfile";
import ImportFiles from "./pages/importfile/importfile";
import Models from "./pages/models";
import Measurements from "./pages/measuerments";

export default function Sidebar() {
    const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

    const navigateMenu = (index: number) => {
        setCurrentMenuIndex(index);
    };

    const menuNavigations: Array<{menuName:string, menuPage: JSX.Element ,menuClickHandler: (index: number) => void}> = [
        {menuName: "File", menuPage: (<ImportFiles />),menuClickHandler: navigateMenu},
        {menuName: "Model", menuPage: (<Models />), menuClickHandler: navigateMenu},
        {menuName: "Measurement", menuPage: (<Measurements />), menuClickHandler: navigateMenu},
    ];



    return (
        <div className="w-[320px] fixed h-full flex flex-row">
            <div className="h-full w-12 flex flex-col" style={{backgroundColor: "#ECECEC"}}>
                {menuNavigations.map((item, index) => {
                    const isEnabled = index == currentMenuIndex ? true : false;
                    return <Button key={index} menuName={item.menuName} isEnabled={isEnabled} navigateHandler={item.menuClickHandler} index={index}/>
                })}
            </div>
            <div className="w-[320px] flex-grow flex flex-col gap-1" style={{backgroundColor: 'white', borderRightWidth: 1, borderColor: 'silver', padding: 8}}>
                <div style={{fontWeight: 700, fontSize: 20}}>
                    {menuNavigations[currentMenuIndex].menuName}
                </div>
                <hr style={{borderBottomWidth: 0.25, borderColor: 'silver'}}/>
                <div style={{marginTop: 4}}>
                    {/* Menu Page */}
                    {menuNavigations[currentMenuIndex].menuPage}
                </div>
            </div>
        </div>

    )
}