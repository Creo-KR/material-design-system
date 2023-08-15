import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { css } from '@emotion/react';
import { TextField } from '@mds/components';
import { useRef, useState } from 'react';

export const Filled: StoryObj<Meta<typeof TextField>> = {};

export const Test: StoryFn<typeof TextField> = () => {
  const [v, setV] = useState('ab');
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <TextField
      as="textarea"
      css={css`
        background-color: red;
      `}
      value={v}
      htmlProps={{
        ref: ref,
        placeholder: 'abc',
        disabled: false,
        onChange: (e) => {
          setV(e.target.value);
        },
      }}
    />
  );
};

export default {
  title: 'Components/TextField',
  component: TextField,
} satisfies Meta<typeof TextField>;
