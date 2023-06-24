import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select, SelectProps } from '../src';

export default {
  title: 'Componentes/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Selecione uma opção',
  label: 'Custom Select',
  status: 'default',
  helpText: 'This is an example of a help text "default".',
  options: [
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' },
    { value: '3', label: 'Opção 3' },
  ],
};
