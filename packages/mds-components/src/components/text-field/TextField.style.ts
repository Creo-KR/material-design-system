import { css } from '@emotion/react';
import { ComponentStyle } from '../../style';
import { TextFieldProps } from './TextField';

type TextFieldType = NonNullable<TextFieldProps['type']>;

const styles: ComponentStyle<string> = {
  textField: (theme) => css`
    .text-field__container {
      min-width: 210px;
      min-height: 56px;
      position: relative;
      display: inline-flex;
      flex-direction: column;
      cursor: text;

      .text-field__label {
        cursor: inherit;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .text-field__input {
        background-color: transparent;
        border: 0;

        :focus-visible {
          outline: 0;
        }
      }
    }
  `,
  filled: (theme) => css`
    .text-field__container {
      border-radius: 4px 4px 0 0;
      background-color: ${theme.Color.sys.surface.container.highest};

      .text-field__label {
        padding: 8px 0 8px 16px;
        width: calc(100% - 16px);
        position: absolute;
        transition: all 0.3s;
        ${theme.Typography.body.small};
        color: ${theme.Color.sys.surface.onVariant};
      }

      .text-field__input {
        position: relative;
        width: 100%;
        min-width: 100%;
        height: 100%;
        min-height: 100%;
        left: 0;
        top: 0;
        padding: 8px 16px;
        border-radius: inherit;
        padding-top: 24px;
        ${theme.Typography.body.large};
        color: ${theme.Color.sys.surface.on};
        caret-color: ${theme.Color.sys.primary.color};
        transition: caret-color 0.3s step-end;

        ::placeholder {
          color: ${theme.Color.sys.surface.onVariant};
        }
      }

      ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: ${theme.Color.sys.surface.onVariant};
      }
    }

    &.empty:not(.focus) {
      .text-field__label {
        transform: translateY(8px);
        ${theme.Typography.body.large};
      }

      .text-field__input {
        caret-color: ${theme.Color.sys.surface.container.highest};
      }
    }

    &:hover:not(.focus):not(.disabled) {
      .text-field__container {
        ::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          background-color: ${theme.Color.sys.surface.on}${theme.Color.stateLayer.opacity8};
        }
        ::after {
          background-color: ${theme.Color.sys.surface.on};
        }
      }
    }

    &.focus {
      .text-field__container {
        ::before {
          content: none;
        }
        .text-field__label {
          color: ${theme.Color.sys.primary.color};
        }

        ::after {
          height: 2px;
          background-color: ${theme.Color.sys.primary.color};
        }
      }
    }

    &.disabled {
      .text-field__container {
        background-color: ${theme.Color.sys.surface.on}18;
        opacity: 0.38;
      }
    }
  `,
};

export default {
  filled: [styles.textField, styles.filled],
  outlined: (theme) => css`
    background-color: ${theme.Color.sys.surface.color};
  `,
} as ComponentStyle<TextFieldType>;
