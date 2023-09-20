'use client';
import { ReactNode, useMemo } from 'react';
import { MDSC, createMDSComponent } from '../shared';
import BadgeStyle from './Badge.style';
export interface BadgeOrigin {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
}

export interface BadgeOwnProps {
  type: 'primary' | 'secondary';
  shape: 'rectangle' | 'circle';
  anchorOrigin: BadgeOrigin;
  content: React.ReactNode;
  invisible: boolean;
  className: string;
}
export interface BadgeProps {
  badgeProps: BadgeOwnProps;
  children: ReactNode;
}

const Badge: MDSC<'span', BadgeProps> = ({
  badgeProps,
  css,
  children,
  className = '',
  ...props
}) => {
  const prefixCls = 'badge__';
  const badgeContentClassName = useMemo(() => {
    const classNames = ['content'];

    badgeProps.className && classNames.push(badgeProps.className);
    badgeProps.anchorOrigin &&
      classNames.push(
        `${badgeProps.anchorOrigin.vertical}_${badgeProps.anchorOrigin.horizontal}`
      );
    badgeProps.shape && classNames.push(badgeProps.shape);
    return classNames.map((i: string) => `${prefixCls}${i}`).join(' ');
  }, [badgeProps.className, badgeProps.anchorOrigin]);

  const badgeVisible = useMemo(() => {
    return badgeProps.content && badgeProps.invisible;
  }, [badgeProps.content, badgeProps.invisible]);

  const componentProps = {
    className: badgeContentClassName,
    css: [
      BadgeStyle.badge[badgeProps.type],
      BadgeStyle.badge[badgeProps.shape],
      css,
    ],
    children: badgeProps.content,
  };
  return (
    <span
      className={`badge__container ${className || ''}`}
      css={[BadgeStyle.position, css]}
    >
      {children}
      {badgeVisible && createMDSComponent(componentProps, 'span')}
    </span>
  );
};

export default Badge;
