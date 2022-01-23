import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'button-primary',
  title: 'Button'
};
// Primary.parameters = {
//   docs: {
//     source: {
//       code: 'Um Texto customizado substituindo o código',
//     },
//   },
// };

export const Secondary = Template.bind([]);
Secondary.args = {
  variant: 'button-secondary',
  title: 'Button'
};

export const Dark = Template.bind([]);
Dark.args = {
  variant: 'button-dark',
  title: 'Button'
};
