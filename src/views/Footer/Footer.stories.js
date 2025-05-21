import React from 'react';
import Footer from './Footer';

// Import actual SVG components
import DribbleIcon from '../../assets/icons/Dribbble-color.svg';
import GithubIcon from '../../assets/icons/Github-color.svg';
import LinkedInIcon from '../../assets/icons/LinkedIn-color.svg';
import InstagramIcon from '../../assets/icons/Instagram-color.svg';

export default {
  title: 'Views/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  const icons = {
    LinkedInIcon,
    DribbleIcon,
    GithubIcon,
    InstagramIcon
  };

  return <Footer {...args} icons={icons} />;
};

export const Default = Template.bind({});
Default.args = {};

// export const WithCustomYear = Template.bind({});
// WithCustomYear.args = {
//   currentYear: '2024',
// };

// export const Compact = Template.bind({});
// Compact.decorators = [
//   (Story) => (
//     <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//       <Story />
//     </div>
//   ),
// ];
