import { css } from '@emotion/react';
import { ComponentStyle } from '../../styles';
import { BadgeProps } from './Badge';

type BadgeType = NonNullable<BadgeProps['badgeProps']['type']>;

const positionStyle: ComponentStyle<'default'> = {
  default: css`
    position: relative;
    .badge__content {
      position: absolute;
      padding: 0 6px;
      &.badge__top_left {
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
      }
      &.badge__top_right {
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
      }
      &.badge__bottom_left {
        bottom: 0;
        left: 0;
        transform: translate(-50%, 50%);
      }
      &.badge__bottom_right {
        bottom: 0;
        right: 0;
        transform: translate(50%, 50%);
      }
    }
  `,
};

const styles: ComponentStyle<BadgeProps['badgeProps']['type']> = {
  primary: (theme) => css`
    color: ${theme.Color.sys.primary.color};
    background-color: ${theme.Color.sys.primary.container};
  `,
  secondary: (theme) => css`
    color: ${theme.Color.sys.secondary.color};
    background-color: ${theme.Color.sys.secondary.container};
  `,
};

const shapes: ComponentStyle<BadgeProps['badgeProps']['shape']> = {
  rectangle: css``,
  circle: css`
    border-radius: 50%;
  `,
};

export const position = [positionStyle.default];
export const badge = {
  primary: [styles.primary],
  secondary: [styles.secondary],
  rectangle: [shapes.rectangle],
  circle: [shapes.circle],
} as ComponentStyle<BadgeType>;

export default {
  badge,
  position,
};
