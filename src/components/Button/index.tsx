import React from "react";
import style from './Button.module.scss';

interface Props {
    text: string,
    type?: "button" | "submit" | "reset" | undefined
    onclick?: () => void
}

function Button({onclick,type,text}: Props){
    return(
        <button
            onClick={onclick}
            type={type}
            className={style.botao}
        >
            {text}
        </button>
    )   
}




export default Button;