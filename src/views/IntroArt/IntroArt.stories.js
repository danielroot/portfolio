import React from 'react';
import IntroArt from './IntroArt';

export default {
  title: 'Views/IntroArt',
  component: IntroArt,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => (
  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
    <IntroArt {...args} />
  </div>
  );

export const Default = Template.bind({});
Default.args = {};
