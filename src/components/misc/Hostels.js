import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import {
  Tab,
  Row,
  Col,
  Nav,
  Carousel,
} from 'react-bootstrap';
import hostels from 'assets/texts/hostels.json';
import lowerCaseRemoveSpaces from 'helpers/lowerCaseRemoveSpaces';
import { cleanTokyoTwoFolder } from 'helpers/cleanTokyoTwo';
import './Hostels.css';

function HostelImageCarousel({
  city,
  images,
}) {
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
          const source = require(`assets/images/hostels/${folder}/${imgName}.jpg`);

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

function HostelInfo({ info }) {
  return (
    <div>
      <h1><span className="fas fa-house-user fa-xs house-icon" />{info.name}</h1>
      <p><a href={info.link} target="_blank" rel="noopener noreferrer">{info.link}</a></p>
      {info.address && <p className="hostel-address">{info.address}</p>}
      {
        [...Array(info.rating)].map((_, i) => (
          <span className="fa fa-star checked" key={i} />
        ))
      }
      {
        [...Array(5 - info.rating)].map((_, i) => (
          <span className="fa fa-star" key={4 - i} />
        ))
      }
      <hr />
      <p>{info.description}</p>
      {info.images &&
        <HostelImageCarousel
          city={info.city}
          images={info.images}
        />
      }
    </div>
  );
}

export default function Hostels() {
  return (
    <div>
      <MiscHeader currentMisc='Hostels'>
        <i className="fas fa-house-user misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Hostels'}
        headerJp={'ホステル'}
        description={'A list of the hostels I stayed at by city.'}
      />
      <div id="hostels-container">
        <Tab.Container defaultActiveKey="sapporo">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column current-pill">
                {
                  Object.keys(hostels).map((location) => (
                    <Nav.Item key={location}>
                      <Nav.Link eventKey={location}>{hostels[location].city}</Nav.Link>
                    </Nav.Item>
                  ))
                }
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {
                  Object.keys(hostels).map((location) => (
                    <Tab.Pane eventKey={location} key={location}>
                      <HostelInfo
                        info={hostels[location]}
                      />
                    </Tab.Pane>
                  ))
                }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
