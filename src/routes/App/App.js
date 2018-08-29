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
    const client = contentful.createClient({
      accessToken: config.accessToken,
      space: config.space
    });

    // get the Projects API
    client.getEntries({ content_type: "project" }).then(response => {
      this.setState({ projects: response.items });
    });

    // get the Playground API
    client.getEntries({ content_type: "playground" }).then(response => {
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
                      path="/products"
                      render={props => {
                        const products = this.state.projects.filter(project => {
                          return project.fields.projectType === "products";
                        });

                        return (
                          <ProjectListContainer
                            heading="Products"
                            subheading="Shipped projects with cross-functional/agile teams"
                            projects={products}
                            {...props}
                          />
                        );
                      }}
                    />
                    <Route
                      path="/products/:id"
                      render={props => {
                        const selectedProject = this.state.projects
                          .filter(project => {
                            return project.fields.projectType === "products";
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
                      path="/prototypes"
                      render={props => {
                        const prototypes = this.state.projects.filter(
                          project => {
                            return project.fields.projectType === "prototypes";
                          }
                        );

                        return (
                          <ProjectListContainer
                            heading="Prototypes"
                            subheading="Proof of concept work"
                            projects={prototypes}
                            {...props}
                          />
                        );
                      }}
                    />
                    <Route
                      path="/prototypes/:id"
                      render={props => {
                        const selectedProject = this.state.projects
                          .filter(project => {
                            return project.fields.projectType === "prototypes";
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
                        const playground = this.state.playground;

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
