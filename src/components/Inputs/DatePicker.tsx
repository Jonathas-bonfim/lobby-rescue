import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

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
            },
          }}
        />
      )}
    />
  );
};

export default CustomDatePicker;