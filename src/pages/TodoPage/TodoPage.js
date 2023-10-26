import {useEffect, useState} from "react";
import {ToDoService} from "../../services/ToDoService";
import {ToDo} from "../../components/ToDo/ToDo";
import style from "./TodoPage.module.css"

const TodoPage = () => {
    let [toDos,setToDos] = useState([])
    useEffect(()=>{
        ToDoService().then(({data})=>setToDos(data))
    },[])
    return (
        <div>
            <h1>To Do:</h1>
            <div className={style.page}>
                {toDos.map((toDo)=><ToDo key={toDo.id} props={toDo}/>)}
            </div>
        </div>
    );
}

export {TodoPage};