import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import theme from '../../styles/theme';

interface CustomDatePickerProps {
  name: string;
  label: React.ReactNode;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ name, label }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field }) => (
        <DatePicker
          label={label}
          value={field.value}
          onChange={(newValue) => {
            field.onChange(newValue);
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              error: !!errors[name],
              helperText: errors[name]?.message as string,
              onBlur: field.onBlur,
              variant: 'standard',
              sx: {
                '& .MuiInputLabel-root': {
                  fontWeight: 400,
                  fontSize: '0.75rem',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: theme.palette.custom.gray2,
                  verticalAlign: 'bottom',
                  marginBottom: '4px',
                },
                '& .MuiInputBase-input': {
                  fontWeight: 400,
                  fontSize: '0.75rem',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: theme.palette.custom.black,
                  verticalAlign: 'bottom',
                  textAlign: 'left',
                },
                '& .MuiInput-underline:before': {
                  borderBottom: `0.5px solid ${theme.palette.custom.gray3}`,
                },
                '& .MuiInput-underline:after': {
                  borderBottom: `0.5px solid ${theme.palette.custom.gray3}`,
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottom: `0.5px solid ${theme.palette.custom.gray3}`,
                },
                '& .Mui-focused': {
                  borderBottom: `0.5px solid ${theme.palette.custom.gray3}`,
                  color: theme.palette.custom.black,
                },
              },
            },
          }}
        />
      )}
    />
  );
};

export default CustomDatePicker;