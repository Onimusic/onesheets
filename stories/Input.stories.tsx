import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Input, InputProps} from '../src'

export default {
    title: 'Componentes/Input',
    component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>

export const Default = Template.bind({})

Default.args = {
    type: 'email',
    placeholder: 'Default',
    label: 'Email',
    status: 'default',
    helpText: 'This is an example of a help text "default".'
}

export const Success = Template.bind({})

Success.args = {
    type: 'email',
    placeholder: 'Success',
    label: 'Email',
    status: 'success',
    helpText: 'This is an example of a help text "success".'
} as InputProps

export const Error = Template.bind({})

Error.args = {
    type: 'email',
    placeholder: 'Error',
    label: 'Email',
    status: 'error',
    helpText: 'This is an example of a help text "error".'
} as InputProps