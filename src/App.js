// Deps
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
// import type { Match } from 'react-router-dom'

// Contentful API
import * as contentful from 'contentful'
import config from '../config.json'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'
import Landing from 'components/Landing'
import Process from 'components/Process'
import ProjectList from 'components/ProjectList'
import ProjectDetail from 'components/ProjectDetail'
import StyleGuide from 'components/StyleGuide'
import NotFound from 'components/NotFound'

// Helpers
import ScrollToTop from 'helpers/ScrollToTop'

// Style
import 'styles/index.scss'

// Routes
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {projects: []}
  }
  componentDidMount () {
    const client = contentful.createClient({
      accessToken: config.accessToken,
      space: config.space
    })
    client.getEntries({content_type: 'project'})
      .then((response) => {
        this.setState({projects: response.items})
        console.log(response.items)
      })
  }
  render () {
    return (
      <AppContainer>
        <Router>
          <ScrollToTop>
            <div className='container'>
              <Header />
              <main>
                <Switch>
                  <Route exact path='/' render={(props) => <Landing projects={this.state.projects} {...props} />} />
                  <Route exact path='/case-studies' render={(props) => <ProjectList projects={this.state.projects} {...props} />} />
                  <Route
                    path='/case-studies/:id'
                    render={(props) => {
                      const selectedProject = this.state.projects.find((project) => props.match.params.id === project.fields.slug)
                      return <ProjectDetail project={selectedProject} {...props} />
                    }
                    }
                  />
                  <Route exact path='/process' component={Process} />
                  <Route exact path='/style-guide' component={StyleGuide} />
                  <Route component={NotFound} />
                </Switch>
              </main>
              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </AppContainer>
    )
  }
}

export default App
