import React from 'react';
import { styled } from 'styled-components';

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  placeholder?: string;
  label?: string;
  helpText?: string;
  status?: 'default' | 'success' | 'error';
  options: Option[];
  onChange?: () => void;
}

export const StyledSelect = styled.select<SelectProps>`
  font-family: sans-serif;
`;

export const Select = ({
  placeholder,
  label,
  helpText,
  status = 'default',
  options,
  onChange,
}: SelectProps) => {
  return (
    <>
      <label>
        {label}
        <StyledSelect
          placeholder={placeholder}
          onChange={onChange}
          status={status}
          options={options}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <span>{helpText}</span>
      </label>
    </>
  );
};
