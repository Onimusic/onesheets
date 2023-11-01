import React from 'react';
import { Meta } from '@storybook/react';
import { Preview, PreviewProps } from '../src/Layout/Preview'; // Importe o seu componente Preview

export default {
  title: 'Layout/Preview',
  component: Preview,
} as Meta;

const Template: React.FC<PreviewProps> = (args) => (
  <Preview {...args}>
    <div>Conteúdo do Preview</div>
  </Preview>
);

export const Default = Template.bind({});
Default.args = {
  style: { background: 'lightblue', padding: '10px' },
};
