import React, { Component } from 'react';
import { Button, Container, Header, Icon, Image, Item, Label } from 'semantic-ui-react';
import config from '../../../data/SiteConfig';
import Footer from '../Footer/Footer';
import './About.css';

class About extends Component {
  render() {
    const style = {
      h1: {
        margin: '1em 0 1em',
        fontSize: '55px',
      },
    };
    return (
      <div className="about">
        <Header as="h1" content="Projects" style={style.h1} textAlign="center" />{' '}
        <Container>
          <Item.Group divided>
            <Item>
              <Item.Image src="/assets/images/wireframe/image.png" />
              <Item.Content>
                <Item.Header as="a">Beanie Boop</Item.Header>
                <Item.Meta>
                  <span>Date</span>
                  <span>Category</span>
                </Item.Meta>
                <Item.Description>
                  A description which may flow for several lines and give context to the content.
                </Item.Description>
                <Item.Extra>
                  <Button className="projectButton" floated="right" primary>
                    Primary
                    <Icon name="right chevron" />
                  </Button>
                  <Label>Limited</Label>
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
                  A description which may flow for several lines and give context to the content.
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

export default About;
