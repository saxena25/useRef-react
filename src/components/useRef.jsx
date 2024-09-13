import {useEffect,useRef,useState} from 'react';

function UseRef() {
    let todo = useRef("")
    let user = useRef("");
    let [data,setData] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();

        let obj = {
            Id: Date.now() + Math.random(),
            todo: todo.current.value,
            user: user.current.value
        }
        setData([...data,obj]);
        todo.current.value = "";
        user.current.value = "";
    }

    const handleDelete = (id) =>{
        let NewData = data.filter((todo)=>todo.Id !== id);
        setData(NewData);
    }

    useEffect(() => {
        todo.current.focus();
    }, []);

    return ( 
        <>
            <h2>Learning UseRef</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">
                    Todo: <input type="text" ref={todo} placeholder='Enter Todo...' name='todo' />
                </label>
                <label htmlFor="user">
                    User: <input type="text" ref={user} placeholder='Enter user...' name='user' />
                </label>
                <button type="submit">Submit</button>
            </form>

            <div>
                {
                    data.map((todo)=>(
                        <div key={todo.Id}>
                            <p><b>ID: </b>{todo.Id}</p>
                            <p><b>Todo: </b>{todo.todo}</p>
                            <p><b>UserName: </b>{todo.user}</p>
                            <button onClick={()=>handleDelete(todo.Id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </>
     );
}

export default UseRef;