import { ChangeEvent, useEffect, useState } from 'react';
import { HTMLAttributes } from './component.type';

type ControllableTag = 'input' | 'textarea' | 'select';

export interface UseControllableProps {
  value?: HTMLAttributes<ControllableTag>['value'];
  onChange?: HTMLAttributes<ControllableTag>['onChange'];
  htmlProps?: Pick<HTMLAttributes<ControllableTag>, 'value' | 'onChange'>;
}

export function withControllable<TProps extends UseControllableProps = {}>(
  props?: TProps
): TProps {
  const [value, setValue] =
    useState<HTMLAttributes<ControllableTag>['value']>();

  useEffect(() => {
    setValue(props?.htmlProps?.value || props?.value);
  }, [props?.value, props?.htmlProps?.value]);

  return {
    ...props,
    htmlProps: {
      ...props?.htmlProps,
      value,
      onChange: (
        e: ChangeEvent<HTMLSelectElement> &
          ChangeEvent<HTMLInputElement> &
          ChangeEvent<HTMLTextAreaElement>
      ) => {
        props?.onChange?.(e);
        props?.htmlProps?.onChange?.(e);
        setValue(e.target.value);
      },
    },
  } as TProps;
}
