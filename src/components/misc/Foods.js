import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import {
  Tabs,
  Tab,
  Row,
  Col,
  Nav,
  Carousel,
  Container,
} from 'react-bootstrap';
import foodCities from 'assets/texts/foods.json';
import lowerCaseRemoveSpaces from 'helpers/lowerCaseRemoveSpaces';
import { cleanTokyoTwoFolder } from 'helpers/cleanTokyoTwo';
import './Foods.css';

function FoodImageCarousel({ city, images }) {
  return (
    <Carousel
      className='carousel-container'
      nextIcon={<span className="fa fa-angle-right fa-3x arrow-icon" />}
      prevIcon={<span className="fa fa-angle-left fa-3x arrow-icon" />}
    >
      {
        images.map((imgName) => {
          const folder = lowerCaseRemoveSpaces(cleanTokyoTwoFolder(city));
          const source = require(`assets/images/foods/${folder}/${imgName}.jpg`);

          return (
            <Carousel.Item key={imgName}>
              <img
                src={source}
                alt={imgName}
                className='carousel-img'
              />
            </Carousel.Item>
          );
        })
      }
    </Carousel>
  )
}

function LocationFoods({ city, foods }) {
  return (
    <Tabs defaultActiveKey={0}>
      {
        foods.map((food, index) => (
          <Tab eventKey={index} title={food['name']} key={index}>
            <div className='location-foods-div'>
              <h1>{food['name']} <span className='header-jp'>{food['name_jp']}</span></h1>
              <p className='location-food-restaurant'>
                {food['restaurant']}
                {food['website'] && <span><a href={food['website']} target="_blank" rel="noopener noreferrer"> {food['website']}</a></span>}
              </p>
              <p className='location-food-address'>{food['address']}</p>
              {
                [...Array(food['rating'])].map((_, i) => (
                  <span className="fa fa-star checked" key={i} />
                ))
              }
              {
                [...Array(5 - food['rating'])].map((_, i) => (
                  <span className="fa fa-star" key={4 - i} />
                ))
              }
              <hr />
              {food['images'] &&
                <Container>
                  <Row>
                    <Col sm={4}>
                      <p>{food['review']}</p>
                    </Col>
                    <Col sm={8}>
                      <FoodImageCarousel
                        city={city}
                        images={food['images']}
                      />
                    </Col>
                  </Row>
                </Container>
              }
              {!food['images'] && <p>{food['review']}</p>}
            </div>
          </Tab>
        ))
      }
    </Tabs>
  );
}

function LocationTab() {
  return (
    <div id="foods-container">
      <Tab.Container defaultActiveKey="sapporo">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column current-pill">
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
    <div>
      <MiscHeader currentMisc='Food Pics'>
        <i className="fas fa-fish misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Food Pics'}
        headerJp={'食物'}
      />
      <LocationTab />
    </div>
  );
}
