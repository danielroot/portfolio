// Import Dep
import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import About from './components/About';
import Process from './components/Process';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import NotFound from './components/NotFound';
import './index.css';

// State
import preload from '../public/projects';

// Routes
const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <main>
            <Match exactly pattern="/" component={(props) => <Landing projects={preload.projects} {...props} />} />
            <Match exactly pattern="/case-studies" component={(props) => <ProjectList projects={preload.projects} {...props} />} />
            <Match exactly pattern="/about" component={About} />
            <Match exactly pattern="/process" component={Process} />
            <Match
              pattern="/case-studies/:id"
              component={(props) => {
                const projects = preload.projects.filter((project) => props.params.id === project.slug); return <ProjectDetail project={projects[0]} {...props} />
              }}
            />
            <Miss component={NotFound} />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
})

export default App;
