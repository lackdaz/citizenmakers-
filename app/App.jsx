import React, { Component } from 'react';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';

const $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '/',
    };

    this.handleLink = this.handleLink.bind(this);
  }

  componentWillMount() {
    this.setState({ link: window.location.hash.replace('#', '') });
  }

  componentDidMount() {
    $('pre code').each((i, block) => {
      hljs.highlightBlock(block);
    });
  }

  componentDidUpdate() {
    $('pre code').each((i, block) => {
      hljs.highlightBlock(block);
    });
  }

  handleLink(link) {
    window.location.hash = link;
    this.setState({ link });
  }

  render() {
    const { link } = this.state;
    const isLanding = link.length <= 1

    return isLanding ? (
      <Landing
        link={link}
        handleLink={this.handleLink}
      />
    ) : (
      <Home
        link={link}
        handleLink={this.handleLink}
      />
    );
  }
}

export default App;
