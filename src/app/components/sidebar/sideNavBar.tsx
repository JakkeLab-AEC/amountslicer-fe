import Button from "./iconButton";

export default function Sidebar() {
    return (
        <div className="w-[320px] h-full fixed flex flex-row">
            <div className="fixed h-full w-12 flex flex-col" style={{backgroundColor: "#ECECEC"}}>
                <Button/>
                <Button/>
            </div>
            <div className="flex-grow flex flex-row" style={{backgroundColor: 'blue'}}>
                
            </div>
        </div>

    )
}