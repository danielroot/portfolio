import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from './ProjectCard';

export default {
  title: 'Views/ProjectCard',
  component: ProjectCard,
  argTypes: {
    fields: {
      control: 'object',
    },
    sys: {
      control: 'object',
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  fields: {
    slug: 'sample-project',
    clientName: 'Sample Client',
    title: 'Sample Project',
    cardText: 'This is a sample project description that showcases the ProjectCard component.',
    cardImg: {
      fields: {
        file: {
          url: '//images.ctfassets.net/j597amcfl36h/GdjmshOodDEBc6R51k8wO/d3c66d844f2537754d2a61f7b3fa4d89/service-banner.png',
        },
      },
    },
  },
  sys: {
    contentType: {
      sys: {
        id: 'project',
      },
    },
  },
};

export const PlaygroundProject = Template.bind({});
PlaygroundProject.args = {
  fields: {
    slug: 'playground-project',
    clientName: 'Playground',
    title: 'Interactive Demo',
    cardText: 'A hands-on demonstration of our latest interactive features and capabilities.',
    cardImg: {
      fields: {
        file: {
          url: '//images.ctfassets.net/j597amcfl36h/GdjmshOodDEBc6R51k8wO/d3c66d844f2537754d2a61f7b3fa4d89/service-banner.png',
        },
      },
    },
  },
  sys: {
    contentType: {
      sys: {
        id: 'playground',
      },
    },
  },
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  fields: {
    slug: 'long-description-project',
    clientName: 'Enterprise Client',
    title: 'Complex Solution',
    cardText: 'This is a longer project description that tests how the card handles multiple lines of text. It includes detailed information about the project scope, technologies used, and the impact it had on the client\'s business.',
    cardImg: {
      fields: {
        file: {
          url: '//images.ctfassets.net/j597amcfl36h/GdjmshOodDEBc6R51k8wO/d3c66d844f2537754d2a61f7b3fa4d89/service-banner.png',
        },
      },
    },
  },
  sys: {
    contentType: {
      sys: {
        id: 'project',
      },
    },
  },
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  fields: {
    slug: 'minimal-project',
    clientName: 'Minimal Client',
    title: 'Clean Design',
    cardImg: {
      fields: {
        file: {
          url: '//images.ctfassets.net/j597amcfl36h/GdjmshOodDEBc6R51k8wO/d3c66d844f2537754d2a61f7b3fa4d89/service-banner.png',
        },
      },
    },
  },
  sys: {
    contentType: {
      sys: {
        id: 'project',
      },
    },
  },
};

export const ShortTitle = Template.bind({});
ShortTitle.args = {
  fields: {
    slug: 'short-title',
    clientName: 'ACME',
    title: 'App',
    cardText: 'A minimalist approach to project presentation.',
    cardImg: {
      fields: {
        file: {
          url: '//images.ctfassets.net/j597amcfl36h/GdjmshOodDEBc6R51k8wO/d3c66d844f2537754d2a61f7b3fa4d89/service-banner.png',
        },
      },
    },
  },
  sys: {
    contentType: {
      sys: {
        id: 'project',
      },
    },
  },
};
