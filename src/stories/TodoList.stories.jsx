import React from 'react';
import { action } from '@storybook/addon-actions';
import TodoList from '../components/TodoList/TodoList';


export default {
    title: 'Todo List',
    component: TodoList,
    argTypes: {}
}

const Template = () => <TodoList />;

export const Default = Template.bind({});
Default.args = {};