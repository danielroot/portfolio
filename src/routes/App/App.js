// Deps
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContainer } from "react-hot-loader";

// Contentful API
import * as contentful from "contentful";
import config from "../../config.json";

// Containers
import Header from "../../views/Header/Header";
import Footer from "../../views/Footer/Footer";
import Landing from "../Landing";
import About from "../About";
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
      playground: []
    };
  }
  componentDidMount() {
    let client = contentful.createClient({
      accessToken: config.accessToken,
      space: config.space
    });

    // get the Projects API
    client
      .getEntries({ content_type: "project", order: "-fields.projectDate" })
      .then(response => {
        this.setState({ projects: response.items });
      });

    // get the Playground API
    client
      .getEntries({
        content_type: "playground",
        order: "-fields.playgroundDate"
      })
      .then(response => {
        this.setState({ playground: response.items });
      });
  }
  render() {
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
                      render={props => (
                        <Landing projects={this.state.projects} {...props} />
                      )}
                    />
                    <Route
                      exact
                      path="/projects"
                      render={props => {
                        let projects = this.state.projects.filter(project => {
                          return project.sys.contentType.sys.id === "project";
                        });

                        return (
                          <ProjectListContainer
                            heading="Projects"
                            subheading="Shipped products with cross-functional/agile teams"
                            projects={projects}
                            {...props}
                          />
                        );
                      }}
                    />
                    <Route
                      path="/project/:id"
                      render={props => {
                        let selectedProject = this.state.projects
                          .filter(project => {
                            return project.sys.contentType.sys.id === "project";
                          })
                          .find(
                            project =>
                              props.match.params.id === project.fields.slug
                          );
                        return (
                          <ProjectDetail project={selectedProject} {...props} />
                        );
                      }}
                    />

                    <Route
                      exact
                      path="/playground"
                      render={props => {
                        let playground = this.state.playground;

                        return (
                          <ProjectListContainer
                            heading="Playground"
                            subheading="A personal collection of miscellaneous design & code sketches"
                            projects={playground}
                            {...props}
                          />
                        );
                      }}
                    />

                    <Route exact path="/about" component={About} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/style-guide" component={StyleGuide} />
                    <Route component={NotFound} />
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
