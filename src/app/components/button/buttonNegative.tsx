import './buttonNegativeStyle.css'

export default function ButtonNegative({text, width, onClickHandler}:{text: string, width?: number|string, onClickHandler?:(e:React.MouseEvent<HTMLButtonElement>) => void}) {
    return (
        <button id="btn-negative" onClick={onClickHandler} style={{width: width, borderRadius: 4, height: 28}}>
            {text}
        </button>
    )
}