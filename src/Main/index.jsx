import React, { useEffect, useState } from "react";
import { Layout } from 'antd';
import { InputForm } from "../Components/InputForm";
import { List } from "../Components/List";
import './style.css'
import { SearchInput } from "../Components/Search";

const { Header, Content } = Layout;


export const Main = () => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const json = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(json);
        if (loadedTodos) {
            setTodos(loadedTodos);
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
    }, [todos]);

    const onFinish = (values) => {
        const newTodo = {
            id: new Date().getTime(),
            board: 1,
            boardTitle: 'BackLog',
            title: values.todo.title,
            description: values.todo.description,
            completed: false,
        };
        setTodos([...todos].concat(newTodo));
    };

    function searchTodo(value) {
        let updatedTodos = [...todos].filter((todo) => todo.title == value);
        setFilteredTodos(updatedTodos);
    };

    return (
        <Layout className="main">
            <Header className="header">
                <InputForm onFinish={onFinish}/>
            </Header>
            <Content className="todos">
                <SearchInput searchTodo={searchTodo} />
                <List filteredTodos = {filteredTodos} todos={todos} setTodos={setTodos} />
            </Content>
        </Layout>
    );
}