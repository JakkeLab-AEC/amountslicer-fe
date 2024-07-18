import { useRef, useState } from "react";
import ButtonNegative from "../../../button/buttonNegative";
import ButtonPositive from "../../../button/buttonPositive";
import ListItem from "./listitem";

export default function ImportFiles({files, updateFileList, updateCheckItemList, dropFiles, uploadFileToServer}
    :{files:File[], updateFileList:(files:File[]) => void, updateCheckItemList:(index: number, state: boolean) => void, dropFiles: () => void, uploadFileToServer:() => void}) {

    const fileSelectionSet = new Set();
    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            updateFileList(selectedFiles);
        }
    }

    const importFile = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(inputFileRef.current) {
            inputFileRef.current.click();
        }
    }

    const dropSelectedFile = () => {
        dropFiles();
    }

    return (
        <div className="flex flex-col gap-1">
            <div style={{borderColor: 'silver', borderWidth: 1, height: 400}} className="flex-grow">
                {/* Header */}
                {/* <ListItem index={0} text="Files" checkStateUpdater={controlCheckUncheckAll}/> */}
                {/* Lists */}
                {files.map((item, index) => {
                    return <ListItem key={index} index={index} file={item} checkStateUpdater={updateCheckItemList} />;
                })}
            </div>
            <div className="flex flex-row gap-1">
                {/* File list control */}
                <ButtonPositive text="Import" width={'50%'} onClickHandler={importFile}/>
                <ButtonNegative text="Drop" width={'50%'} onClickHandler={dropSelectedFile} />
            </div>
            <div>
                {/* Upload control */}
                <ButtonPositive text="Upload" width={'100%'} onClickHandler={uploadFileToServer} />
            </div>
            <input
                type="file"
                accept=".ifc"
                ref={inputFileRef}
                style={{display: 'none'}}
                onChange={handleFileChange}
                multiple
            />
        </div>
    )
}