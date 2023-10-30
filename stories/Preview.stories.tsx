import React from 'react';
import { Meta } from '@storybook/react';
import { Container } from '@nextui-org/react';
import { Preview, PreviewProps } from '../src/Layout/Preview'; // Importe o seu componente Preview

export default {
  title: 'Layout/Preview',
  component: Preview,
} as Meta;

const Template: React.FC<PreviewProps> = (args) => (
  <Preview {...args}>
    <Container>Conteúdo do Preview</Container>
  </Preview>
);

export const Default = Template.bind({});
Default.args = {
  style: { background: 'lightblue', padding: '10px' },
};
