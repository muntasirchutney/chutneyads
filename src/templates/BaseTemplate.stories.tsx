import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BaseTemplate } from './BaseTemplate';

const meta = {
  title: 'Example/BaseTemplate',
  component: BaseTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BaseTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseWithReactComponent: Story = {
  args: {
    children: <div>Children node</div>
  },
};

export const BaseWithString: Story = {
  args: {
    ...BaseWithReactComponent.args,
    children: 'String',
  },
};
