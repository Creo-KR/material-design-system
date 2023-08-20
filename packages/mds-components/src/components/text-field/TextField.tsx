'use client';
import {
  ChangeEvent,
  FocusEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { MDSC, MDSCProps, MDSElement, createMDSComponent } from '../shared';
import { withControllable } from '../shared/withControllable';
import TextFieldStyle from './TextField.style';

export interface TextFieldProps {
  type?: 'filled' | 'outlined';
  label?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  value?: string;
  supportingText?: ReactNode;
  characterCount?: boolean;
}

const TextField: MDSC<'input' | 'textarea', TextFieldProps> = ({
  type = 'filled',
  css,
  className,
  label,
  ...props
}) => {
  const [value, setValue] = useState(props.value);
  const [focus, setFocus] = useState(false);
  const componentClassName = useMemo(() => {
    const classNames = ['text-field', className];
    focus && classNames.push('focus');
    !value && !props.placeholder && classNames.push('empty');
    props.disabled && classNames.push('disabled');
    props.error && classNames.push('error');

    return classNames.join(' ');
  }, [className, focus, value, props.placeholder, props.disabled, props.error]);

  function handleFocus(
    e: FocusEvent<HTMLInputElement> & FocusEvent<HTMLTextAreaElement>
  ) {
    setFocus(true);
    props.htmlProps?.onFocus?.(e);
  }

  function handleBlur(
    e: FocusEvent<HTMLInputElement> & FocusEvent<HTMLTextAreaElement>
  ) {
    setFocus(false);
    props.htmlProps?.onBlur?.(e);
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>
  ) {
    if (
      props.htmlProps?.maxLength &&
      e.currentTarget.value.length > props.htmlProps?.maxLength
    ) {
      return;
    }
    setValue(e.target.value);
  }

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const inputProps = {
    ...props,
    value,
    className: 'text-field__input',
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
  } as MDSCProps<'input' | 'textarea', TextFieldProps>;

  return (
    <div className={componentClassName} css={[TextFieldStyle[type], css]}>
      <div className="text-field__container">
        {label && <label className="text-field__label">{label}</label>}
        {createMDSComponent(withControllable(inputProps), 'input')}
      </div>
      {(props.supportingText || props.characterCount) && (
        <div className="text-field__supporting-container">
          {props.supportingText && (
            <div className="text-field__supporting-text">
              {props.supportingText}
            </div>
          )}
          {props.characterCount && (
            <div className="text-field__character-count">
              {(value?.length || 0).toLocaleString()}
              {props.htmlProps?.maxLength && (
                <span>/{props.htmlProps?.maxLength.toLocaleString()}</span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TextField as <TTag extends 'input' | 'textarea' = 'input'>(
  props: MDSCProps<TTag, TextFieldProps>
) => MDSElement<TTag, TextFieldProps>;
