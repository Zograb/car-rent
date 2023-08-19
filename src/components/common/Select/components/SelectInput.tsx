import type { FC } from 'react';
import { components, type InputProps } from 'react-select';
import 'twin.macro';

const { Input } = components;

const SelectInput: FC<InputProps> = (props) => (
  <Input
    {...props}
    inputClassName="w-full text-black bg-transparent outline-none"
    style={{ gridArea: '1 / 2 / auto / auto' }}
  />
);

export default SelectInput;
