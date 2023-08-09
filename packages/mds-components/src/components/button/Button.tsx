'use client';
import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';

export interface ButtonProps {
  enabled?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      css={css`
        width: 300px;
        ${props.enabled ? 'height: 12px' : ''};
      `}
    >
      {props.children}
    </button>
  );
};

export default Button;
