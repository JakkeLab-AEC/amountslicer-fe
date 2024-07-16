import { useRef } from "react";
import ButtonNegative from "../../../button/buttonNegative";
import ButtonPositive from "../../../button/buttonPositive";
import ListItem from "./listitem";
import { connectionTest } from "@/api/ifcServerApi";

export default function ImportFiles() {
    const files:Array<{filename: string, isSelected: boolean}> = [
        {filename: 'test1.ifc', isSelected: false},
        {filename: 'test2.ifc', isSelected: false},
        {filename: 'test3.ifc', isSelected: false},
    ];

    const fileSelectionSet = new Set();
    const inputFileRef = useRef<HTMLInputElement>(null);
    
    const updateCheckItemList = (index: number, state: boolean) => {
        if(state) fileSelectionSet.add(index);
        else fileSelectionSet.delete(index);
        files[index].isSelected = state;

        console.log(fileSelectionSet);
    }

    // 
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            console.log(selectedFiles);
        }
    }

    const importFile = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(inputFileRef.current) {
            inputFileRef.current.click();
        }
    }

    const dropSelectedFile = () => {

    }

    const uploadFile = () => {
        connectionTest();
    }

    return (
        <div className="flex flex-col gap-1">
            <div style={{borderColor: 'silver', borderWidth: 1, height: 400}} className="flex-grow">
                {/* Header */}
                {/* <ListItem index={0} text="Files" checkStateUpdater={controlCheckUncheckAll}/> */}
                {/* Lists */}
                {files.map((item, index) => {
                    return <ListItem key={index} index={index} text={item.filename} checkStateUpdater={updateCheckItemList} />;
                })}
            </div>
            <div className="flex flex-row gap-1">
                {/* File list control */}
                <ButtonPositive text="Import" width={'50%'} onClickHandler={importFile}/>
                <ButtonNegative text="Drop" width={'50%'} onClickHandler={dropSelectedFile} />
            </div>
            <div>
                {/* Upload control */}
                <ButtonPositive text="Upload" width={'100%'} onClickHandler={uploadFile} />
            </div>
            <input
                type="file"
                ref={inputFileRef}
                style={{display: 'none'}}
                onChange={handleFileChange}
                multiple
            />
        </div>
    )
}