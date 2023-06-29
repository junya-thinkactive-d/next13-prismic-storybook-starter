import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default = {
  args: {
    children: "Button",
  },
};

export const Outlined: Story = {
  args: {
    outlined: true,
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};

export const OutlinedSmall = {
  args: {
    outlined: true,
    size: "small",
    children: "Button",
  },
};
