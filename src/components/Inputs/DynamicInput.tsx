import { ReactNode } from 'react';
import { ETypeProps } from '../../@types/InputBaseProps';
import TextArea from '../../components/Inputs/TextArea';
import TextInput from '../../components/Inputs/TextInput';
import CustomDatePicker from './DatePicker';
import SelectInput from './SelectInput';

interface DynamicInputProps<T = string> {
  type: ETypeProps;
  name: string;
  label: ReactNode;
  options?: T[];
}

const DynamicInput = <T,>({ type, name, label, options = [] }: DynamicInputProps<T>) => {
  switch (type) {
    case ETypeProps.TEXT:
      return <TextInput name={name} label={label} />;
    case ETypeProps.TEXT_AREA:
      return <TextArea name={name} label={label} />;
    case ETypeProps.SELECT_ONE:
      return <SelectInput name={name} label={label} options={options as string[]} />;
    case ETypeProps.DATE:
      return <CustomDatePicker name={name} label={label} />;
    default:
      return <TextInput name={name} label={label} />;
  }
};

export default DynamicInput;