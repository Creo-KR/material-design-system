import { Assets } from '../../';
import { MDSC, createMDSComponent } from '../shared';

export interface IconProps {
  asset: keyof typeof Assets;
  width?: number;
  height?: number;
  color?: string;
}

const Icon: MDSC<'svg', IconProps> = ({ ...props }) => {
  const iconProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    children: Assets[props.asset],
    ...props,
  };
  return createMDSComponent(iconProps, 'svg');
};

export default Icon;
