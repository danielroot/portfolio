import React from 'react';
import PlaygroundCard from './PlaygroundCard';

export default {
  title: 'Views/PlaygroundCard',
  component: PlaygroundCard,
  argTypes: {
    fields: {
      control: 'object',
    },
  },
};

const Template = (args) => <PlaygroundCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  fields: {
    title: 'Interactive Demo',
    embed: '<div style="padding: 20px; background: #f0f0f0; border-radius: 4px;">Embedded content goes here</div>',
  },
};

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  fields: {
    title: 'This is a very long title that might wrap to multiple lines',
    embed: '<div style="padding: 20px; background: #f0f0f0; border-radius: 4px;">Embedded content goes here</div>',
  },
};

export const WithComplexEmbed = Template.bind({});
WithComplexEmbed.args = {
  fields: {
    title: 'Complex Interactive Demo',
    embed: `
      <div style="padding: 20px; background: #f0f0f0; border-radius: 4px;">
        <h3>Interactive Content</h3>
        <p>This is a more complex embedded content example with multiple elements.</p>
        <button style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px;">
          Click Me
        </button>
      </div>
    `,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  fields: {
    title: 'Loading State',
    embed: '',
  },
};
