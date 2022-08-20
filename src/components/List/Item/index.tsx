import { Itask } from '../../../types/Itask';
import style from './Item.module.scss';

interface Props extends Itask {
    selectTask: (selectedTask: Itask) => void 
}

export default function Item (
    {
        task,
        time,
        selected,
        full,
        id, 
        selectTask
    }: Props){
    return (
        <li 
            className={`
            ${style.item} ${selected ? style.itemSelecionado : '' } ${full ? style.itemCompletado : ''}
            `}
            onClick={() => !full && selectTask(
            {
                task,
                time,
                selected,
                full,
                id
            }
            )}>
                <h3>{task}</h3>
                <span>{time}</span>
                {full && <span className={style.concluido} aria-label='task completed'></span>}
        </li>
    )
}

