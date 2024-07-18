export default function ListItem({file, index, checkStateUpdater}:{file: File, index: number, checkStateUpdater: (index: number, state: boolean) => void}) {
    const menuIndex = index;

    const onCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked;
        checkStateUpdater(index, value);
    }

    const displayFileName = file.name.length > 25 ? file.name.substring(0, 24) + "..." : file.name;

    return (
        <div className="flex flex-row h-[32px]" style={{borderBottomColor: 'silver', borderBottomWidth: 1}}>
            <div className="self-center w-[32px]" style={{padding: 8}}>
                <input type='checkbox' onChange={onCheckHandler}/>
            </div>
            <div className="self-center">
                {displayFileName}
            </div>
        </div>
    )
}