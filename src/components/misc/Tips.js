import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import { MISC_OPTIONS } from 'constants/miscOptions';
import {
  Accordion,
  Badge,
  Card,
  Container,
  Col,
  Row,
  useAccordionToggle,
 } from 'react-bootstrap';
import tipsList from 'assets/texts/tips.json';
import './Tips.css';

function getBadgeVariant(badge) {
  switch (badge) {
    case 'Travel':
      return 'success';
    case 'Food':
      return 'primary';
    case 'Culture':
      return 'warning';
    case 'Important':
      return 'info';
    default:
      return 'secondary';
  }
}

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
                  <Badge pill variant={getBadgeVariant(badge)}>{badge}</Badge>{' '}
                </span>
              ))
            }
          </Col>
        }
      </Row>
    </Container>
  )
}

export default function Tips() {
  const tips = tipsList.tips;

  return (
    <div>
      <MiscHeader currentMisc={MISC_OPTIONS['tips']}>
        <i className="fas fa-hiking misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Travel Tips'}
        headerJp={'旅行のヒント'}
      />
      <Container>
        <Row>
          <Col>
          <Accordion>
            {
              tips.map((tip, index) => (
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
    </div>
  );
}
