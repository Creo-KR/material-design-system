import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '@mds/components';

export const Filled: StoryObj<Meta<typeof TextField>> = {};
export const Outlined: StoryObj<Meta<typeof TextField>> = {
  args: {
    type: 'outlined',
  },
};

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: 'Label text',
    value: '',
    placeholder: '',
    disabled: false,
    type: 'filled',
    error: false,
    supportingText: '',
    characterCount: false,
    htmlProps: {
      maxLength: 20,
      onChange: (e: any) => {},
    },
  },
} satisfies Meta<typeof TextField>;
