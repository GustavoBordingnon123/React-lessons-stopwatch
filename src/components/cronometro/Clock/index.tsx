import style from './clock.module.scss';

interface Props {
    time: number | undefined
};

export default function Clock({time = 0}: Props ) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTen,minuteUnite] = String(minutes)
    .padStart(2,'0')
    const [secondTen,secondUnite] = String(seconds)
    .padStart(2,'0')

    return(
       <>
        <span className={style.relogioNumero}>{minuteTen}</span>
        <span className={style.relogioNumero}>{minuteUnite}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{secondTen}</span>
        <span className={style.relogioNumero}>{secondUnite}</span>
       </>
    )
}