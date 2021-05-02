import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import LocationFoods from 'components/misc/food-pics/LocationFoods';
import { MISC_OPTIONS } from 'constants/miscOptions';
import {
  Tab,
  Row,
  Col,
  Nav,
} from 'react-bootstrap';
import foodCities from 'assets/texts/foods.json';
import './Foods.scss';

function LocationTab() {
  return (
    <div id="foods-container">
      <Tab.Container defaultActiveKey="sapporo">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {
                Object.keys(foodCities).map((location) => (
                  <Nav.Item key={location}>
                    <Nav.Link eventKey={location}>{foodCities[location].city}</Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {
                Object.keys(foodCities).map((location) => (
                  <Tab.Pane eventKey={location} key={location}>
                    <LocationFoods
                      city={location}
                      foods={foodCities[location].foods}
                    />
                  </Tab.Pane>
                ))
              }
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default function Foods() {
  return (
    <>
      <MiscHeader currentMisc={MISC_OPTIONS['foods']}>
        <i className="fas fa-fish misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Food Pics'}
        headerJp={'食べ物の写真'}
        description={'A list of the food I enjoyed by city.'}
      />
      <LocationTab />
    </>
  );
}
