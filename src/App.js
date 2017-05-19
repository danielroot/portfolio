// Deps
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Contentful API
import * as contentful from 'contentful'
import config from '../config.json'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Process from './components/Process'
import ProjectList from './components/ProjectList'
import ProjectDetail from './components/ProjectDetail'
import NotFound from './components/NotFound'

// Style
import './styles/index.css'

// Routes
class App extends React.Component {
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
      <Router>
        <div className='container'>
          <Header />
          <main>
            <Switch>
              <Route exact path='/' render={(props) => <Landing projects={this.state.projects} {...props} />} />
              <Route exact path='/case-studies' render={(props) => <ProjectList projects={this.state.projects} {...props} />} />
              <Route path='/case-studies/:id' render={(props) => {
                const projects = this.state.projects.filter((project) => props.match.params.id === project.fields.slug)
                return <ProjectDetail project={projects[0]} {...props} />
              }}
              />
              <Route exact path='/process' component={Process} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
