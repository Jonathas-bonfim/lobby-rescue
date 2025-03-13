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
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: theme.palette.custom.black,
            marginBottom: '4px',
            marginLeft: '-15px'
          }}>
            {label}
          </InputLabel>
          <Select
            {...field}
            label={label}
            variant="standard" // Usamos a variante "standard" para facilitar a estilização da borda inferior
            sx={{
              width: '444px',
              height: '46px',
              paddingBottom: '4px',
              gap: '4px',
              '& .MuiSelect-select': {
                fontWeight: 600,
                fontSize: '16px',
                letterSpacing: '0%',
                color: theme.palette.custom.black,
                textAlign: 'left',
              },
              '& .MuiInputBase-root': {
                borderBottom: `0.5px solid ${theme.palette.custom.gray3}`, // Apenas borda inferior
              },
              '& .MuiInput-underline:before': {
                borderBottom: 'none', // Remove a borda inferior padrão
              },
              '& .MuiInput-underline:after': {
                borderBottom: 'none', // Remove a borda inferior após o foco
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottom: 'none', // Remove a borda inferior no hover
              },
            }}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={getOptionValue(option)} sx={{
                textAlign: 'left', // Alinha o texto dos itens à esquerda
                // marginLeft: '-12px'
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