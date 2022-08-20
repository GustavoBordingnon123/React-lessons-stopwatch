import { count } from "console";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/util/date";
import { Itask } from "../../types/Itask";
import Button from "../Button";
import Clock from "./Clock";
import style from './cronometro.module.scss';

interface Props {
    selected: Itask | undefined
    endTask: () => void
}

export default function Cronometro({selected,endTask}: Props) {
    const [time,setTime] = useState<number>();
    
    useEffect(() => {
        if(selected?.time){
            setTime(timeToSeconds(selected.time))
        }
    },[selected])

    function regress(counter: number = 0){  
        setTimeout(() => {
            if(counter > 0){
                setTime(counter - 1);
                return regress(counter - 1);
            }
            endTask();
        },1000);
    }

    return (
        <>
            <div className={style.cronometro}>              
                <p className={style.titulo}> Choice a card and start the timer </p>
                <div className={style.relogioWrapper}>
                    <Clock time={time}/>
                </div>
                <Button text="Start" onclick={() => regress(time)}/>
            </div>
        </>
    )
}