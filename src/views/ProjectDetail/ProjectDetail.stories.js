import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

export default {
  title: 'Views/ProjectDetail',
  component: ProjectDetail,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const mockProject = {
  sys: {
    id: 'project-1',
    contentType: {
      sys: {
        id: 'project'
      }
    }
  },
  fields: {
    clientName: "Example Client",
    title: "Project Title",
    projectRole: "Lead Developer",
    projectYear: "2023",
    timeline: "6 months",
    overview: "This is a sample project overview that demonstrates the capabilities of our team.",
    summary: {
      nodeType: "document",
      data: {},
      content: [{
        nodeType: "paragraph",
        content: [{
          nodeType: "text",
          value: "This is a detailed summary of the project.",
          marks: [],
          data: {}
        }],
        data: {}
      }]
    },
    contributions: "Key contributions to the project include...",
    projectUrl: "https://example.com",
    roles: ["Frontend Development", "UI/UX Design", "Project Management"],
    heroImg: {
      fields: {
        file: {
          url: "//images.ctfassets.net/example.jpg"
        },
        description: "Project hero image"
      }
    },
    slug: "example-project",
    cardText: "This is a sample project card text",
    cardImg: {
      fields: {
        file: {
          url: "//images.ctfassets.net/example.jpg"
        }
      }
    }
  }
};

const mockProjects = [
  mockProject,
  {
    ...mockProject,
    sys: {
      id: 'project-2',
      contentType: {
        sys: {
          id: 'project'
        }
      }
    },
    fields: {
      ...mockProject.fields,
      title: "Another Project",
      clientName: "Different Client",
      slug: "another-project"
    }
  }
];

const Template = (args) => <ProjectDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  project: mockProject,
  projects: mockProjects,
  projectId: 0
};

export const Loading = Template.bind({});
Loading.args = {
  project: null,
  projects: [],
  projectId: 0
};

export const WithoutContributions = Template.bind({});
WithoutContributions.args = {
  project: {
    ...mockProject,
    fields: {
      ...mockProject.fields,
      contributions: null
    }
  },
  projects: mockProjects,
  projectId: 0
};

export const WithoutRoles = Template.bind({});
WithoutRoles.args = {
  project: {
    ...mockProject,
    fields: {
      ...mockProject.fields,
      roles: null
    }
  },
  projects: mockProjects,
  projectId: 0
};

export const WithoutProjectUrl = Template.bind({});
WithoutProjectUrl.args = {
  project: {
    ...mockProject,
    fields: {
      ...mockProject.fields,
      projectUrl: null
    }
  },
  projects: mockProjects,
  projectId: 0
};
