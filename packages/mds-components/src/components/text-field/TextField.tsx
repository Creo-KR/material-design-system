'use client';
import { MDSC, MDSCProps, MDSElement, createMDSComponent } from '../shared';
import { withControllable } from '../shared/withControllable';

export interface TextFieldProps {
  type?: 'filled' | 'outlined';
  value?: string;
}

const TextField: MDSC<'input' | 'textarea', TextFieldProps> = (props) => {
  return createMDSComponent(withControllable(props), 'input');
};

export default TextField as <TTag extends 'input' | 'textarea' = 'input'>(
  props: MDSCProps<TTag, TextFieldProps>
) => MDSElement<TTag, TextFieldProps>;
