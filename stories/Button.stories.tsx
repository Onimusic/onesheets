import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button, ButtonProps} from '../src'

export default {
    title: 'Componentes/Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    text: 'Primary',
    type: 'normal'
} as ButtonProps

export const Secondary = Template.bind({})

Secondary.args = {
    text: 'Secondary',
    type: 'normal'
} as ButtonProps