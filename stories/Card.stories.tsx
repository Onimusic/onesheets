import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Card} from '../src'

export default {
    title: 'Componentes/Card',
    component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = () => <Card />

export const CardBox = Template.bind({})