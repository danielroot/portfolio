// Deps
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  //Redirect
} from "react-router-dom";
import { AppContainer } from "react-hot-loader";
// import store from "store";

// Contentful API
import * as contentful from "contentful";
import config from "../../config.json";

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
import Login from "../Login/Login";

// Helpers
import ScrollToTop from "../../utils/ScrollToTop";
//import isLoggedIn from "../../utils/isLoggedIn";

// Style
import "./App.scss";

// Routes
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      playground: [],
    };
  }

  componentDidMount() {
    let client = contentful.createClient({
      accessToken: config.accessToken,
      space: config.space,
    });

    // get the Projects API
    client
      .getEntries({
        content_type: "project",
        order: "-fields.projectDate",
        "fields.projectType[all]": "public",
      }) // get only project entries for google

      .then((response) => {
        this.setState({ projects: response.items });
      });

    // get the Playground API
    client
      .getEntries({
        content_type: "playground",
        order: "-fields.playgroundDate",
      })
      .then((response) => {
        this.setState({ playground: response.items });
      });
  }

  render() {
    //const { history } = this.props;

    return (
      <AppContainer>
        <Router>
          <ScrollToTop>
            <div className="app-container">
              <Header />
              <main>
                <div className="container">
                  <Switch>
                    {/* <Route path="/">{isLoggedIn ? <Redirect to="/login" /> : <Landing />}</Route> */}
                    <Route path="/login" component={Login} />
                    <Route
                      exact
                      path="/"
                      render={(props) => (
                        <Landing projects={this.state.projects} {...props} />
                      )}
                    />

                    <Route
                      exact
                      path="/projects"
                      render={(props) => {
                        let projects = this.state.projects;

                        return (
                          <ProjectListContainer
                            heading="Projects"
                            projects={projects}
                            {...props}
                          />
                        );
                      }}
                    />
                    <Route
                      path="/project/:id"
                      render={(props) => {
                        let projects = this.state.projects;

                        let projectMatch = (project) =>
                          props.match.params.id === project.fields.slug;

                        let selectedProject = projects.find(projectMatch);
                        console.log(selectedProject);
                        let projectIndex = projects.findIndex(projectMatch);

                        return (

                              <ProjectDetail
                                project={selectedProject}
                                {...props}
                                projectId={projectIndex}
                                projects={projects}
                              />

                        );
                      }}
                    />

                    <Route
                      exact
                      path="/playground"
                      render={(props) => {
                        let playground = this.state.playground;

                        return (
                          <ProjectListContainer
                            heading="Playground"
                            subheading="Collection of design & code sandboxes for learning and experimentation"
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
