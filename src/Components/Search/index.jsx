import React from "react";
import { Input,Layout } from 'antd';
import './style.css';

const { Search } = Input;
const { Content } = Layout;

export const SearchInput = (props) => {
    return (
        <Content>
            <Search
                placeholder="input search text"
                onSearch={value => props.searchTodo(value)}
                style={{ width: 200 }}
                className="search"
            />
        </Content>
    )
}