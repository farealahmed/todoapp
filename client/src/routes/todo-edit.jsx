
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Basic = () => {


    let { todoId } = useParams();
    //const [todo, setTodo] = useState({});


    useEffect(() => {
        const getTodo = async () => {
            const r = await axios.get(`http://localhost:3001/api/v1/todos/${todoId}`);
           setName(r.data.todo.name);
           setDescription(r.data.todo.description);
        }
        getTodo();
    }, [todoId]);

    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [msg,setMsg]=useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const r = await axios.put(`http://localhost:3001/api/v1/todos/${todoId}`, {
            "name": name,
            "description": description
        });

        console.log('response', r);
        setMsg(r.data.message);
        setName('');
        setDescription('');
        
    }

    const clearForm = () => {
        setName('');
        setMsg('');
    }

    const nameChanged = (event) => {
        setName(event.target.value);
    }

    const descriptionChanged = (event) => {
        setDescription(event.target.value);
    }

    return (
        <div>
            <h1>Any place in your app</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" style={{marginLeft: '5px'}} value={name} onChange={nameChanged}/>
                </label>
                <label>{' '}
                    Description:
                    <input type="text" name="description" style={{marginLeft: '5px'}} value={description} onChange={descriptionChanged}/>
                </label>
                <input type="submit" value="Update" style={{marginLeft: '5px'}} />
                <button type='button' style={{marginLeft: '5px'}} onClick={clearForm}>Clear</button>
            </form>
            <span>{msg}</span>
        </div>
    );
};

export default Basic;