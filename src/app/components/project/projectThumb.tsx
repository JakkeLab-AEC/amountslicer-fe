'use client'

export default function ProjectThumb({onClickHandler}:{onClickHandler:() => void}) {
    return (
        <button onClick={onClickHandler}>
            <div className="" style={{width: 200, height: 160, background: 'lightgrey', borderRadius: 4}}>
            
            </div>
        </button>
        
    )
}