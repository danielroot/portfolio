// Import Dep
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import Components
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Process from './components/Process'
import ProjectList from './components/ProjectList'
import ProjectDetail from './components/ProjectDetail'
import './index.css'

// State
import preload from '../public/projects'

// Routes
const App = React.createClass({
  render () {
    return (
      <Router>
        <div className='container'>
          <Header />
          <main>
            <Route exact path='/' render={(props) => <Landing projects={preload.projects} {...props} />} />
            <Route exact path='/case-studies' render={(props) => <ProjectList projects={preload.projects} {...props} />} />
            <Route exact path='/process' component={Process} />
            <Route
              path='/case-studies/:id'
              render={(props) => {
                const projects = preload.projects.filter((project) => props.params.id === project.slug)
                return <ProjectDetail project={projects[0]} {...props} />
              }}
            />
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
})

export default App
