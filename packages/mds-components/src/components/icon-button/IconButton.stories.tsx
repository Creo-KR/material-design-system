import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '@mds/components';

export const Filled: StoryObj<Meta<typeof IconButton>> = {};

export default {
  title: 'Components/IconButton',
  component: IconButton,
  args: {},
} satisfies Meta<typeof IconButton>;
