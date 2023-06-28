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

export const CustomSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  position: relative;
  font-family: Arial;

  label {
    font-weight: bold;
  }

  span {
    font-size: 12px;
    color: grey;
  }
`;

export const StyledSelect = styled.select<SelectProps>`
  font-family: sans-serif;
  max-width: 300px;
  padding: 8px 0;
  
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
    <CustomSelect>
      <label>{label}</label>
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
    </CustomSelect>
  );
};
