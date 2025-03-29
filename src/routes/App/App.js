// Deps
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { AppContainer } from "react-hot-loader";

// Contentful API
import * as contentful from "contentful";
import config from "../../config.js";

// Containers
import Header from "../../views/Header/Header";
import Footer from "../../views/Footer/Footer";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Resume from "../Resume";
import ProjectListContainer from "../../containers/ProjectListContainer/ProjectListContainer";
import ProjectDetail from "../../views/ProjectDetail/ProjectDetail";
import StyleGuide from "../StyleGuide";
import NotFound from "../NotFound";

// Helpers
import ScrollToTop from "../../utils/ScrollToTop";

// Style
import "./App.scss";

// Routes
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      playground: [],
      error: null
    };
  }

  componentDidMount() {
    let client = contentful.createClient({
      accessToken: config.accessToken,
      space: config.space,
    });

    const fetchContent = (contentType, query) => {
      return client.getEntries(query)
        .then(response => response.items)
        .catch(error => {
          console.error(`Error fetching ${contentType}:`, error);
          this.setState({ error: `Failed to load ${contentType}` });
          return [];
        });
    };

    // Fetch all content in parallel
    Promise.all([
      fetchContent('projects', {
        content_type: "project",
        order: "-fields.projectDate",
        "fields.projectType[all]": "public",
      }),
      fetchContent('playground', {
        content_type: "playground",
        order: "-fields.playgroundDate",
      }),
      fetchContent('pages', {
        content_type: "page",
      })
    ]).then(([projects, playground, pages]) => {
      this.setState({ projects, playground, pages });
    });
  }

  render() {
    const { projects, playground, error } = this.state;

    console.log('Render state:', {
      projectsLength: projects.length,
      playgroundLength: playground.length,
      error
    });

    if (error) {
      return (
        <div className="error-message" style={{padding: '20px'}}>
          <h2>Oops! Something went wrong. Please try again later.</h2>
          <p>{error}</p>
        </div>
      );
    }

    return (
      <AppContainer>
        <Router>
          <ScrollToTop>
            <div className="app-container">
              <Header />
              <main>
                <div className="container">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={props => <Landing {...props} projects={projects} />}
                    />
                    <Route
                      exact
                      path="/projects"
                      render={props => (
                        <ProjectListContainer
                          {...props}
                          heading="Portfolio"
                          projects={projects}
                        />
                      )}
                    />
                    <Route
                      path="/project/:id"
                      render={props => {
                        const project = projects.find(
                          p => p.fields.slug === props.match.params.id
                        );
                        const projectId = projects.findIndex(
                          p => p.fields.slug === props.match.params.id
                        );
                        return (
                          <ProjectDetail
                            {...props}
                            project={project}
                            projectId={projectId}
                            projects={projects}
                          />
                        );
                      }}
                    />
                    <Route
                      exact
                      path="/playground"
                      render={props => (
                        <ProjectListContainer
                          {...props}
                          heading="Playground"
                          subheading="Collection of design & code sandboxes for learning and experimentation"
                          projects={playground}
                        />
                      )}
                    />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/style-guide" component={StyleGuide} />
                    <Route render={props => <NotFound {...props} projects={projects} />} />
                  </Switch>
                </div>
              </main>
              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
