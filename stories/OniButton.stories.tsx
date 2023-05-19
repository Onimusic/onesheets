import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {OniButton} from '../src'

export default {
    title: 'Componentes/OniButton',
    component: OniButton
} as ComponentMeta<typeof OniButton>

const Template: ComponentStory<typeof OniButton> = () => <OniButton />

export const Primary = Template.bind({})