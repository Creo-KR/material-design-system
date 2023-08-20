import { css } from '@emotion/react';
import { ComponentStyle } from '../../style';
import { TextFieldProps } from './TextField';

type TextFieldType = NonNullable<TextFieldProps['type']>;

const transitionDuration = '0.3s';

const styles: ComponentStyle<string> = {
  textField: (theme) => css`
    display: flex;
    flex-direction: column;
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
    .text-field__supporting-container {
      display: flex;
      width: 100%;
      padding: 4px 16px 0;
      color: ${theme.Color.sys.surface.onVariant};
      ${theme.Typography.body.small};
      justify-content: end;
      .text-field__supporting-text {
        flex-grow: 1;
        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }
    &.error {
      .text-field__supporting-container {
        color: ${theme.Color.sys.error.color};
      }
    }
    &.disabled {
      .text-field__supporting-container {
        color: ${theme.Color.sys.surface.on};
        opacity: 0.38;
      }
    }
  `,
  filled: (theme) => css`
    .text-field__container {
      border-radius: 4px 4px 0 0;
      background-color: ${theme.Color.sys.surface.container.highest};

      .text-field__label {
        padding: 8px 16px;
        width: 100%;
        position: absolute;
        transition-duration: ${transitionDuration};
        transition-property: transform, font-size;
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
        transition: caret-color ${transitionDuration} step-end;

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
        transition: none;
      }
    }

    &:not(.focus):not(.disabled) {
      .text-field__container:hover {
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
      &.error {
        .text-field__container:hover {
          .text-field__label {
            color: ${theme.Color.sys.error.onContainer};
          }

          ::after {
            background-color: ${theme.Color.sys.error.onContainer};
          }
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

    &.error {
      .text-field__container {
        .text-field__label {
          color: ${theme.Color.sys.error.color};
        }
        .text-field__input {
          caret-color: ${theme.Color.sys.error.color};
        }

        ::after {
          background-color: ${theme.Color.sys.error.color};
        }
      }
    }

    &.disabled {
      .text-field__container {
        /* 0.38 * 0.4 = 0.095(18) */
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
