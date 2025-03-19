import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from '../../styles/theme';
import { handleDocumentChange } from '../../utils/mask/document';
import { handleZipCodeChange } from '../../utils/mask/zipcode';

interface TextInputProps extends Omit<TextFieldProps, 'name' | 'error' | 'helperText'> {
  name: string;
  type?: 'number' | 'text';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isZipCode?: boolean;
  isDocument?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ name, type = 'text', onChange, isZipCode = false, isDocument = false, ...rest }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          let value = event.target.value;

          if (isZipCode) {
            value = handleZipCodeChange(event);
          } else if (isDocument) {
            value = handleDocumentChange(event);
          }

          field.onChange(value);

          if (onChange) {
            onChange(event);
          }
        };

        return (
          <TextField
            {...field}
            {...rest}
            type={type}
            error={!!errors[name]}
            helperText={
              errors[name] && typeof errors[name]?.message === 'string'
                ? errors[name]?.message
                : undefined
            }
            onChange={handleChange}
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
        );
      }}
    />
  );
};

export default TextInput;