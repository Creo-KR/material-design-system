'use client';
import { MDSC, createMDSComponent } from '../shared';

export interface ButtonProps {
  enabled?: boolean;
}

const Button: MDSC<'button', ButtonProps> = (props) => {
  return createMDSComponent(props, 'button');
};

export default Button;
