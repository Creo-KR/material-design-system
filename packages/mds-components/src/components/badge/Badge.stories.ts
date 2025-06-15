import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@mds/components';

export const Primary: StoryObj<Meta<typeof Badge>> = {};
export const Secondary: StoryObj<Meta<typeof Badge>> = {};

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    badgeProps: {
      type: 'primary',
      anchorOrigin: { vertical: 'top', horizontal: 'left' },
      content: 1,
      invisible: true,
      className: '',
      shape: 'circle',
    },
    children: 'hi',
  },
} satisfies Meta<typeof Badge>;
