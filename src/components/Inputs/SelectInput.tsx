import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from '../../styles/theme';

interface SelectInputProps<T = string> {
  name: string;
  label: React.ReactNode;
  options: T[];
  getOptionLabel?: (option: T) => string;
  getOptionValue?: (option: T) => string;
}

const SelectInput = <T,>({
  name,
  label,
  options,
  getOptionLabel = (option: T) => String(option),
  getOptionValue = (option: T) => String(option),
}: SelectInputProps<T>) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl fullWidth error={!!errors[name]}>
          <InputLabel sx={{
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: theme.palette.custom.gray2,
            verticalAlign: 'bottom',
            marginBottom: '4px',
            marginLeft: '-15px'
          }}>
            {label}
          </InputLabel>
          <Select
            {...field}
            label={label}
            variant="standard"
            sx={{
              '& .MuiInputLabel-root': {
                fontWeight: 400,
                fontSize: '0.75rem',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: theme.palette.custom.gray2,
                verticalAlign: 'bottom',
              },
              '& .MuiInputBase-input': {
                fontWeight: 400,
                fontSize: '0.75rem',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: theme.palette.custom.black,
                verticalAlign: 'bottom',
                textAlign: 'left', // Alinha o texto à esquerda
              },
              // Remove a borda inferior padrão
              '& .MuiInput-underline:before': {
                borderBottom: `0.5px solid ${theme.palette.custom.gray3}`,
              },
              // Remove a borda inferior ao focar
              '& .MuiInput-underline:after': {
                borderBottom: `0.5px solid ${theme.palette.custom.gray3}`,
              },
              // Remove a borda inferior ao passar o mouse
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottom: `0.5px solid ${theme.palette.custom.gray3}`,
              },
              // Estilo específico para o texto do Select
              '& .MuiSelect-select': {
                textAlign: 'left', // Alinha o texto à esquerda
              },
              // Remove o efeito de foco (borda e cor)
              '& .Mui-focused': {
                borderBottom: `0.5px solid ${theme.palette.custom.gray3}`,
                color: theme.palette.custom.black, // Mantém a cor do texto
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  width: 'auto',
                  maxHeight: '200px',
                },
              },
            }}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={getOptionValue(option)} sx={{
                textAlign: 'left', // Alinha o texto dos itens do Menu à esquerda
              }}>
                {getOptionLabel(option)}
              </MenuItem>
            ))}
          </Select>
          {errors[name] && (
            <FormHelperText>
              {errors[name]?.message as string}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default SelectInput;