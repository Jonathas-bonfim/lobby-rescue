import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from '../../styles/theme';

interface TextAreaProps extends Omit<TextFieldProps, 'name' | 'error' | 'helperText'> {
  name: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ name, rows = 4, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...rest}
          error={!!error}
          helperText={error?.message}
          variant="standard"
          fullWidth
          multiline
          rows={rows}
          sx={{
            '& .MuiInputLabel-root': {
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: theme.palette.custom.gray2,
              verticalAlign: 'bottom',
            },
            '& .MuiInputBase-input': {
              fontWeight: 400,
              fontSize: '16px',
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

export default TextArea;