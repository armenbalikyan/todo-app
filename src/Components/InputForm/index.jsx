import React from 'react';
import { Form, Input, Button,Layout } from 'antd';
import './style.css'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    title: {
        range: '${label} must be between ${min} and ${max}',
    },
    description: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export const InputForm = (props) => {

    return (
        <Form {...layout} layout='inline' name="nest-messages" onFinish={props.onFinish} validateMessages={validateMessages} className='inputForm'>
            <Form.Item
                name={['todo', 'title']}
                label="Title"
                rules={[
                    {
                        required: true,
                        min: 0,
                        max: 25
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['todo', 'description']}
                label="Description"
                rules={[
                    {
                        required: true,
                        min: 0,
                        max: 70
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}