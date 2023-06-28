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
    type: 'normal',
    color: 'primary'
} as ButtonProps

export const Secondary = Template.bind({})

Secondary.args = {
    text: 'Secondary',
    type: 'normal',
    color: 'secondary'
} as ButtonProps

export const Success = Template.bind({})

Success.args = {
    text: 'Success',
    type: 'normal',
    color: 'success'
} as ButtonProps