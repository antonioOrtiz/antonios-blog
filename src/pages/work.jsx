import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Work from '../components/Work/Work';
import config from '../../data/SiteConfig';

class WorkPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`Work | ${config.siteTitle}`} />
        <Work />
      </div>
    );
  }
}

export default WorkPage;
