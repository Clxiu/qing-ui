import React from 'react';
import { action } from '@storybook/addon-actions';
import Clock from '../components/Clock/Clock';

export default {
  title: 'Clock',
  component: Clock,
  argTypes: {},
};

const Template = () => <Clock />;

export const Default = Template.bind({});
Default.args = {};
