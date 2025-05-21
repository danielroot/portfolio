import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'Views/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

// export const WithActiveLink = Template.bind({});
// WithActiveLink.decorators = [
//   (Story) => (
//     <BrowserRouter>
//       <div style={{ padding: '20px' }}>
//         <Story />
//         <div style={{ marginTop: '20px' }}>
//           <p>Note: The active link state will be visible when the current route matches the link.</p>
//         </div>
//       </div>
//     </BrowserRouter>
//   ),
// ];
