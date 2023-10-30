import React from 'react';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Utils/isNotEmpty',
  parameters: {
    docs: {
      description: {
        component: 'Verifica se o valor não está vazio.',
      },
    },
  },
  argTypes: {
    obj: {
      type: { name: 'string' || 'number' || 'object' || 'null' || 'undefined' }, // Especifique o tipo como 'string'
      description: 'Verifica se o valor está vazio', // Adicione uma descrição
      control: 'text', // Tipo de controle no Storybook
      defaultValue: '256'
    },
  },
} as Meta;

// Importe a função jorge
import { isNotEmpty } from '../src/utils/isNotEmpty'; // Certifique-se de usar o caminho correto

const Template: Story = (args) => {
  // Chame a função jorge com os argumentos desejados
  isNotEmpty(args.text);
  return <div>Click show code to see the example.</div>;
};

export const Default = Template.bind({});
Default.args = {
  obj: '',
};

// Defina o componente para exibir o código
Default.parameters = {
  docs: {
    source: {
      code: `isNotEmpty(value);`,
    },
  },
};
