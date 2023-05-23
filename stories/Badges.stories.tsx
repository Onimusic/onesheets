import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Badges, BadgesProps} from '../src'

export default {
    title: 'Componentes/Badges',
    component: Badges
} as ComponentMeta<typeof Badges>

const Template: ComponentStory<typeof Badges> = (args) => <Badges {...args}/>

export const Primary = Template.bind({})

Primary.args = {
    text: 'Primary',
    color: 'primary'
} as BadgesProps

export const Secondary = Template.bind({})

Secondary.args = {
    text: 'Secondary',
    color: 'secondary'
} as BadgesProps

export const Success = Template.bind({})

Success.args = {
    text: 'Success',
    color: 'success'
} as BadgesProps

export const Error = Template.bind({})

Error.args = {
    text: 'Error',
    color: 'error'
} as BadgesProps

export const Warning = Template.bind({})

Warning.args = {
    text: 'Warning',
    color: 'warning'
} as BadgesProps