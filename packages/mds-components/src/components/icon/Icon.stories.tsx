import type { Meta, StoryObj } from '@storybook/react';

import { Assets, Icon } from '@mds/components';

export const Default: StoryObj<Meta<typeof Icon>> = {};

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    asset: 'menu',
    color: 'var(--primary)',
  },
  argTypes: {
    asset: {
      options: Object.keys(Assets),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Icon>;
