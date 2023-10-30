import React from 'react';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Utils/jorge',
  parameters: {
    docs: {
      description: {
        component: 'Função que recebe uma string e "loga" no console.',
      },
    },
  },
  argTypes: {
    text: {
      type: { name: 'string' }, // Especifique o tipo como 'string'
      description: 'String com o valor que será mostrado no console', // Adicione uma descrição
      control: 'text', // Tipo de controle no Storybook
      defaultValue: 'Salve Jorge'
    },
  },
} as Meta;

// Importe a função jorge
import { jorge } from '../src/utils/jorge'; // Certifique-se de usar o caminho correto

const Template: Story = (args) => {
  // Chame a função jorge com os argumentos desejados
  jorge(args.text);
  return <div>Check the browser console for the message.</div>;
};

export const Default = Template.bind({});
Default.args = {
  text: 'Hello from jorge',
};

// Defina o componente para exibir o código
Default.parameters = {
  docs: {
    source: {
      code: `jorge('Hello from jorge');`,
    },
  },
};
