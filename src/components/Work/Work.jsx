import React, { Component } from 'react';
import { Button, Container, Header, Icon, Item } from 'semantic-ui-react';
import config from '../../../data/SiteConfig';
import Footer from '../Footer/Footer';
import MenuButton from '../MenuButton/MenuButton';
import './Work.css';

class Work extends Component {
  render() {
    const style = {
      h1: {
        margin: '1em 0 1em',
        fontSize: '55px',
      },
    };
    return (
      <div className="work">
        <Header as="h1" content="Projects" style={style.h1} textAlign="center" />{' '}
        <Container>
          <MenuButton />

          <Item.Group divided>
            <Item>
              <Item.Image src="/assets/images/wireframe/image.png" />
              <Item.Content>
                <Item.Header as="a">Beanie Boop</Item.Header>
                <Item.Meta>
                  <span>January 2018</span>
                  <span>Category</span>
                </Item.Meta>
                <Item.Description>An Amazon clone that sells Beanie Babies!</Item.Description>
                <Item.Extra>
                  <Button className="projectButton" floated="right" primary>
                    Primary
                    <Icon name="right chevron" />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src="/assets/images/wireframe/image.png" />
              <Item.Content>
                <Item.Header as="a">Fit Square</Item.Header>
                <Item.Meta>
                  <span>Date</span>
                  <span>Category</span>
                </Item.Meta>
                <Item.Description>
                  A food planning app that helps you build a 5-day meal plan based on your current fitness goal.
                </Item.Description>
                <Item.Extra>
                  <Button className="projectButton" primary floated="right">
                    Primary
                    <Icon name="right chevron" />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Container>
        <Footer copyright={config.copyright} promoteGatsby={config.promoteGatsby} />
      </div>
    );
  }
}

export default Work;
