import React, { Component } from 'react';
import {
  Accordion,
  Badge,
  Card,
  Container,
  Col,
  Row,
  useAccordionToggle,
 } from 'react-bootstrap';
 import './TipsContainer.scss';

const FILTERS = {
  ALL: 'All',
  TRAVEL: 'Travel',
  FOOD: 'Food',
  CULTURE: 'Culture',
  IMPORTANT: 'Important',
}

// function getBadgeVariant(badge) {
//   switch (badge) {
//     case 'Travel':
//       return 'success';
//     case 'Food':
//       return 'primary';
//     case 'Culture':
//       return 'warning';
//     case 'Important':
//       return 'info';
//     default:
//       return 'secondary';
//   }
// }

function Toggle({ title, badges, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey);
  return (
    <Container onClick={decoratedOnClick}>
      <Row>
        <Col xs={8}>{title}</Col>
        {
          badges &&
          <Col xs={4} className='text-right'>
            {
              badges.map((badge) => (
                <span>
                  <Badge pill className='active-filter' variant='secondary'>{badge}</Badge>{' '}
                </span>
              ))
            }
          </Col>
        }
      </Row>
    </Container>
  )
}

export default class Tips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: FILTERS.ALL,
    }

    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(filter) {
    this.setState({
      currentFilter: filter
    });
  }

  render() {
    const { tips } = this.props;
    const { currentFilter } = this.state;

    let tipsToDisplay;

    if (currentFilter === FILTERS.ALL) {
      tipsToDisplay = tips;
    } else {
      tipsToDisplay = tips.filter((tip) => (
        tip['badges'].includes(currentFilter)
      ))
    }

    return (
      <Container>
        <Row id='filter-row'>
          <Col>
            <>
              {
                Object.values(FILTERS).map((filter) => {
                  const badgeClass = filter === currentFilter ? 'active-filter' : '';
                  return (
                    <span>
                      <Badge pill className={badgeClass} variant='secondary' onClick={() => this.changeFilter(filter)}>
                        {filter}
                      </Badge>{' '}
                    </span>
                  );
                })
              }
            </>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              {
                tipsToDisplay.map((tip, index) => (
                  <Card key={index}>
                    <Card.Header>
                      <Toggle eventKey={index} title={tip['title']} badges={tip['badges']} />
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>{tip['description']}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))
              }
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
  }
}