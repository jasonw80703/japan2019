import React from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import { MISC_OPTIONS } from 'constants/miscOptions';
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
import './Hostels.scss';

const DEFAULT_ACTIVE_KEY = 'sapporo';

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
          const source = getS3ObjectImagePath(`hostels/${folder}/${imgName}`);

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

function HostelInfo({ location, info }) {
  const cityLink = '/' + lowerCaseRemoveSpaces(location);

  return (
    <>
      <h1 className="hostel-info-header">
        <span className="fas fa-house-user fa-xs house-icon" />{info.name}
        <a href={cityLink} className='city-link'><i className="fas fa-city"></i></a>
      </h1>
      <p><a href={info.link} className="hostel-info-link" target="_blank" rel="noopener noreferrer">{info.link}</a></p>
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
      <p className="hostel-info-desc">{info.description}</p>
      {info.images &&
        <HostelImageCarousel
          city={info.city}
          images={info.images}
        />
      }
    </>
  );
}

export default function Hostels() {
  return (
    <>
      <MiscHeader currentMisc={MISC_OPTIONS['hostels']}>
        <i className="fas fa-house-user misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Hostels'}
        headerJp={'ホステル'}
        description={'A list of the hostels I stayed at by city.'}
      />
      <div id="hostels-container">
        <Tab.Container defaultActiveKey={DEFAULT_ACTIVE_KEY}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
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
                        location={location}
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
    </>
  );
}
