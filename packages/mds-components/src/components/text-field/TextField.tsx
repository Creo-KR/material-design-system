'use client';
import { MDSC, MDSCProps, createMDSComponent } from '../shared';
import { withControllable } from '../shared/withControllable';

export interface TextFieldProps {
  type?: 'filled' | 'outlined';
  value?: string;
}

const TextField = <TTag extends 'input' | 'textarea' = 'input'>(
  props: MDSCProps<TTag, TextFieldProps>
) => {
  const comp: MDSC<TTag, TextFieldProps> = (props) => {
    return createMDSComponent(withControllable(props), 'input' as TTag);
  };

  return comp(props);
};

export default TextField;
