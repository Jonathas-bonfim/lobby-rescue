import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from '../../styles/theme';

interface TextInputProps extends Omit<TextFieldProps, 'name' | 'error' | 'helperText'> {
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({ name, ...rest }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          {...rest}
          error={!!errors[name]}
          helperText={
            errors[name] && typeof errors[name]?.message === 'string'
              ? errors[name]?.message
              : undefined
          }
          variant="standard"
          fullWidth
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
            },
            '& .MuiInput-underline:before': {
              borderBottom: `1px solid ${theme.palette.custom.gray3}`,
            },
            '& .MuiInput-underline:after': {
              borderBottom: `1px solid ${theme.palette.custom.gray3}`,
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottom: `1px solid ${theme.palette.custom.gray3}`,
            },
          }}
        />
      )}
    />
  );
};

export default TextInput;