import { Itask } from "../../types/Itask";
import Item from "./Item";
import style from './List.module.scss';

interface Props {
    tasks: Itask[],
    selectTask: (selectedTask: Itask) => void 
}


function List ({tasks,selectTask}: Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2>Day studies </h2>
            <ul>
                {tasks.map((item) => (
                    <Item 
                        selectTask = {selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;