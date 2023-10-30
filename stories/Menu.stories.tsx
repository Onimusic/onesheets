import React from 'react';
import { Meta } from '@storybook/react';
import { Container } from '@nextui-org/react';
import { Menu, MenuProps } from '../src/Layout/Menu'; // Importe o seu componente Menu

export default {
  title: 'Layout/Menu',
  component: Menu,
} as Meta;

const Template: React.FC<MenuProps> = (args) => (
  <Menu {...args}>
    <Container>Conteúdo do Menu</Container>
  </Menu>
);

export const Default = Template.bind({});
Default.args = {
  style: { background: 'lightblue', padding: '10px' },
};
