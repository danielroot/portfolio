// Deps
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { shape } from 'prop-types';

class ScrollToTop extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children
  }
}

ScrollToTop.propTypes = {
  location: shape,
  children: shape
}

export default withRouter(ScrollToTop)
