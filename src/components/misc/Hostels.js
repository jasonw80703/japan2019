import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import {
  Tab,
  Row,
  Col,
  Nav,
} from 'react-bootstrap';
import './Hostels.css';

export default function Hostels() {
  return (
    <div>
      <MiscHeader currentMisc='Hostels' />
      <h2 className='misc-title'>{'Hostels'}</h2>
      <p id='hostels-description'>A list of the hostels I stayed at by city.</p>
      <hr id='hostels-divider'/>
      <div id="hostels-container">
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Sapporo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Hakodate</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>hi this is Sapporo</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>hi this is Hakodate</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
