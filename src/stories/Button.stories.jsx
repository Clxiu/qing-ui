import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'clicked' },
    type: { control: { type: 'select', options: ['default', 'primary', 'danger'] } },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  type: 'primary',
  onClick: action('clicked'),
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Button',
  type: 'danger',
  onClick: action('clicked'),
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  text: 'Button',
  type: 'primary',
  disabled: true,
  onClick: action('clicked'),
};

export const DisabledDanger = Template.bind({});
DisabledDanger.args = {
  text: 'Button',
  type: 'danger',
  disabled: true,
  onClick: action('clicked'),
};