import './buttonPositiveStyle.css';

export default function ButtonPositive({text, width, onClickHandler}:{text: string, width?: number|string, onClickHandler?:(e:React.MouseEvent<HTMLButtonElement>) => void}) {
    return (
        <button id="btn-positive" onClick={onClickHandler} style={{width: width, borderRadius: 4, height: 28}}>
            {text}
        </button>
    )
}