import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@mds/components';

export const Primary: StoryObj<Meta<typeof Button>> = {};

export default {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;
