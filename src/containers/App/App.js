// Deps
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContainer } from "react-hot-loader";

// Contentful API
import * as contentful from "contentful";
import config from "../../config.json";

// Containers
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Landing from "../Landing";
import Process from "../Process";
import ProjectList from "../../components/ProjectList/ProjectList";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import StyleGuide from "../StyleGuide";
import NotFound from "../NotFound";

// Helpers
import ScrollToTop from "../../helpers/ScrollToTop";

// Style
import "./App.scss";

// Routes
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }
  componentDidMount() {
    const client = contentful.createClient({
      accessToken: config.accessToken,
      space: config.space
    });
    client.getEntries({ content_type: "project" }).then(response => {
      this.setState({ projects: response.items });
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
                      path="/case-studies"
                      render={props => (
                        <ProjectList
                          projects={this.state.projects}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      path="/case-studies/:id"
                      render={props => {
                        const selectedProject = this.state.projects.find(
                          project =>
                            props.match.params.id === project.fields.slug
                        );
                        return (
                          <ProjectDetail project={selectedProject} {...props} />
                        );
                      }}
                    />
                    <Route exact path="/process" component={Process} />
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
