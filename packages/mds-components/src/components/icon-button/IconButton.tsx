import { Icon, IconProps } from '../icon';
import { MDSC, createMDSComponent } from '../shared';

export interface IconButtonProps {
  iconProps: IconProps;
}

const IconButton: MDSC<'button' | 'a', IconButtonProps> = ({ ...props }) => {
  const icon = <Icon {...props.iconProps} />;
  return createMDSComponent(props, 'button');
};

export default IconButton;
