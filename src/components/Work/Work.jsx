import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll';
import { navigateTo } from 'gatsby-link';

import { Container, Header, Item } from 'semantic-ui-react';
import SEO from '../SEO/SEO';
import config from '../../../data/SiteConfig';
import Drawer from '../../layouts/Drawer/Drawer';
import Navigation from '../Navigation/Navigation';
import SiteWrapper from '../../layouts/SiteWrapper/SiteWrapper';
import Footer from '../Footer/Footer';
import MainHeader from '../../layouts/MainHeader/MainHeader';
import MainNav from '../../layouts/MainNav/MainNav';
import BlogLogo from '../BlogLogo/BlogLogo';
import MenuButton from '../MenuButton/MenuButton';
import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './Work.css';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleOnClick(evt) {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  handleOnClose(evt) {
    evt.stopPropagation();
    this.closeMenu();
  }

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { nodes } = this.props;
    const style = {
      h1: {
        margin: '1em 0 1em',
        fontSize: '55px',
      },
    };

    return (
      <Drawer className="home-template" isOpen={this.state.menuOpen}>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={nodes} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          {/* All the main content gets inserted here */}
          <div className="home-template">
            {/* The big featured header */}
            <MainHeader cover={config.siteCover}>
              <MainNav overlay={config.siteCover}>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                <MenuButton navigation={config.siteNavigation} onClick={this.handleOnClick} />
              </MainNav>
              <div className="vertical">
                <div className="main-header-content inner">
                  <PageTitle text={config.siteTitle} />
                  <PageDescription text={config.siteDescription} />
                  <SocialMediaIcons urls={config.siteSocialUrls} color="currentColor" />
                </div>
              </div>
              <Link className="scroll-down icon-arrow-left" to="content" data-offset="-45" spy smooth duration={500}>
                <span className="hidden">Scroll Down</span>
              </Link>
            </MainHeader>
            <Header as="h1" content="Projects" style={style.h1} textAlign="center" />{' '}
            <Container>
              <MenuButton />

              <Item.Group divided>
                <Item>
                  <Item.Image src="/assets/images/wireframe/image.png" />
                  <Item.Content>
                    <Item.Header href="https://github.com/BeanieBoop" target="_blank" as="a">
                      Beanie Boop
                    </Item.Header>
                    <Item.Meta>
                      <span>January 2018</span>
                    </Item.Meta>
                    <Item.Description>An Amazon clone that sells Beanie Babies!</Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image src="/assets/images/wireframe/image.png" />
                  <Item.Content>
                    <Item.Header href="https://github.com/capstone-fitsquare/fitsquare" target="_blank" as="a">
                      Fit Square
                    </Item.Header>
                    <Item.Meta>
                      <span>February 2018</span>
                    </Item.Meta>
                    <Item.Description>
                      A food planning app that helps you build a 5-day meal plan based on your current fitness goal.
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Container>
          </div>

          {/* The tiny footer at the very bottom */}
          <Footer copyright={config.copyright} promoteGatsby={config.promoteGatsby} />
        </SiteWrapper>
      </Drawer>
    );
  }
}

export default Work;
