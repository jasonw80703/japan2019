import React from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import RecommendationBadge from 'components/misc/food-pics/RecommendationBadge';
import {
  Tabs,
  Tab,
  Row,
  Col,
  Carousel,
  Container,
} from 'react-bootstrap';
import lowerCaseRemoveSpaces from 'helpers/lowerCaseRemoveSpaces';
import { cleanTokyoTwoFolder } from 'helpers/cleanTokyoTwo';
import './LocationFoods.scss';

function FoodImage({ city, imgName }) {
  const folder = lowerCaseRemoveSpaces(cleanTokyoTwoFolder(city));
  const source = getS3ObjectImagePath(`foods/${folder}/${imgName}`);

  return (
    <img
      src={source}
      alt={imgName}
      className='food-img'
    />
  );
}

function FoodImageCarousel({ city, images }) {
  return (
    <Carousel
      className='carousel-container'
      nextIcon={<span className="fa fa-angle-right fa-3x arrow-icon" />}
      prevIcon={<span className="fa fa-angle-left fa-3x arrow-icon" />}
      interval={null}
    >
      {
        images.map((imgName) => {
          const folder = lowerCaseRemoveSpaces(cleanTokyoTwoFolder(city));
          const source = getS3ObjectImagePath(`foods/${folder}/${imgName}`);

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

export default function LocationFoods({ city, foods }) {
  const cityLink = '/' + lowerCaseRemoveSpaces(city);

  return (
    <Tabs defaultActiveKey={0}>
      {
        foods.map((food, index) => (
          <Tab eventKey={index} title={food['name']} key={index}>
            <div className='location-foods-div'>
              <h1 className='location-food-name'>
                {food['name']} <span className='misc-jp'>{food['name_jp']}</span> {food['recommend'] && <RecommendationBadge />}
                <a href={cityLink} className='city-link'><i className="fas fa-city"></i></a>
              </h1>
              <p className='location-food-restaurant'>
                {food['restaurant']}
                {food['website'] && <span><a href={food['website']} target="_blank" rel="noopener noreferrer"> {food['website']}</a></span>}
              </p>
              {food['address'] && <p className='location-food-address'>{food['address']}</p>}
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
                <Container fluid>
                  <Row>
                    <Col sm={4} className='first-col'>
                      <p className='location-food-desc'>{food['review']}</p>
                    </Col>
                    <Col sm={8}>
                      {food['images'].length === 1 &&
                        <FoodImage city={city} imgName={food['images'][0]} isCarousel={false} />
                      }
                      {food['images'].length > 1 &&
                        <FoodImageCarousel
                          city={city}
                          images={food['images']}
                        />
                      }
                      </Col>
                  </Row>
                </Container>
              }
              {!food['images'] && <p className='location-food-desc'>{food['review']}</p>}
            </div>
          </Tab>
        ))
      }
    </Tabs>
  );
}