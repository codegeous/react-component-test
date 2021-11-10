import React from 'react';

import { Heading } from '../components/Heading';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Heading',
  component: Heading,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Heading {...args} />;

export const HeadingText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeadingText.args = {
  text: 'This is heading',
};