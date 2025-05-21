import React from 'react';
import "../src/styles/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // viewport: {
  //   viewports: INITIAL_VIEWPORTS,
  //   defaultViewport: 'ipad',
  // },
};

export const decorators = [
  (Story) => (
    <div style={{ margin: '2em' }}>
      <Story />
    </div>
  ),
];
