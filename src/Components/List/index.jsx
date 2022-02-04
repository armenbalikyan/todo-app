import React, { useEffect, useState } from "react";
import { Layout } from 'antd';
import './style.css'
import { Typography } from 'antd';
import { Button} from 'antd';

const { Title, Paragraph} = Typography;
const { Content } = Layout;

export const List = (props) => {
    const [editing, setEditing] = useState(null);
    const [editableDescription, setEditableDescription] = useState('This is an editable description.');
    const [editableTitle, setEditableTitle] = useState('This is an editable title.');

    function deleteTodo(id) {
        console.log(id);
        let updatedTodos = [...props.todos].filter((todo) => todo.id !== id);
        props.setTodos(updatedTodos);
    }

    function editTodo() {
        setEditing(true);
    }
    function sumbitEditingTodo(id) {
        setEditing(true);
        const updatedTodos = [...props.todos].map((todo) => {
            if (todo.id === id) {
                todo.title = editableTitle;
                todo.description = editableDescription;
            }
            return todo;
        });
        props.setTodos(updatedTodos);
        setEditing(false);
    }
    return (
        <Content>
            {props.filteredTodos.length ? props.filteredTodos.map((todo) => (
                <Typography draggable='true' key={todo.id} className="todo">
                    <Title editable={editing ? { onChange: setEditableTitle } : false} level={3} >{todo.title}</Title>
                    <Paragraph editable={editing ? { onChange: setEditableDescription } : false}>{todo.description}</Paragraph>
                    <div className="links">
                        {editing ? <Button type="link" onClick={() => sumbitEditingTodo(todo.id)}>Submit</Button> :
                            <Button type="link" onClick={() => editTodo(todo.id)}>Edit</Button>
                        }

                        <Button type="link" onClick={() => deleteTodo(todo.id)}>Delete</Button>
                    </div>
                </Typography>
            ))
                : props.todos.map((todo) => (
                    <Typography key={todo.id} className="todo">
                        <Title editable={editing ? { onChange: setEditableTitle } : false} level={3} >{todo.title}</Title>
                        <Paragraph editable={editing ? { onChange: setEditableDescription } : false}>{todo.description}</Paragraph>
                        <div className="links">
                            {editing ? <Button type="link" onClick={() => sumbitEditingTodo(todo.id)}>Submit</Button> :
                                <Button type="link" onClick={() => editTodo(todo.id)}>Edit</Button>
                            }

                            <Button type="link" onClick={() => deleteTodo(todo.id)}>Delete</Button>
                        </div>
                    </Typography>
                ))}
        </Content>
    );
}