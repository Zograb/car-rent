import type { FC } from 'react';
import { components, type PlaceholderProps } from 'react-select';
import 'twin.macro';

const { Placeholder } = components;

const SelectPlaceholder: FC<PlaceholderProps> = (props) => (
  <Placeholder {...props} className="!text-gray3">Select...</Placeholder>
);

export default SelectPlaceholder;
