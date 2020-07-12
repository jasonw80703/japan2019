import React, { Component } from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
import Image from 'components/blog/Image';
import ImageSlide from 'components/blog/ImageSlide';
import TextBlock from 'components/blog/TextBlock';
import TextHeader from 'components/blog/TextHeader';
import Modal from 'react-bootstrap/Modal';
import { Image as ReactImage } from 'react-bootstrap';
import { LOCATIONS } from 'constants/locations';

// Map
import map from 'assets/map/ishinomaki.jpg';
import mapModalDetails from 'assets/map/ishinomaki.json';

// Texts
import ishinomakiText from 'assets/texts/ishinomaki.json';
import captions from 'assets/images/ishinomaki/captions.json';

const LOCATION = LOCATIONS.ISHINOMAKI;

export default class Ishinomaki extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }

    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
    });
  }

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <LocationHeader
          location={LOCATION}
          map={map}
          mapModalDetails={mapModalDetails}
        />
        <Page location={LOCATION}>
          <TextBlock text={ishinomakiText.intro} />
          <Image source={getS3ObjectImagePath('ishinomaki/intro')} location={LOCATION['en']} caption={captions.intro} />

          <TextHeader header={ishinomakiText.headers.manga} />
          <Image source={getS3ObjectImagePath('ishinomaki/manga_1')} location={LOCATION['en']} caption={captions.manga_declaration} />
          <TextBlock text={ishinomakiText.manga_1} />
          <TextBlock text={ishinomakiText.manga_2} />
          <ImageSlide
            images={[
              getS3ObjectImagePath('ishinomaki/manga_2'),
              getS3ObjectImagePath('ishinomaki/manga_3'),
              getS3ObjectImagePath('ishinomaki/manga_4'),
              getS3ObjectImagePath('ishinomaki/manga_5'),
              getS3ObjectImagePath('ishinomaki/manga_6'),
              getS3ObjectImagePath('ishinomaki/manga_7'),
              getS3ObjectImagePath('ishinomaki/manga_8'),
              getS3ObjectImagePath('ishinomaki/manga_9')
            ]}
            location={LOCATION['en']}
          />
          <TextBlock text={ishinomakiText.manga_3} />
          <ImageSlide
            images={[
              getS3ObjectImagePath('ishinomaki/manga_10'),
              getS3ObjectImagePath('ishinomaki/manga_11'),
              getS3ObjectImagePath('ishinomaki/manga_12'),
              getS3ObjectImagePath('ishinomaki/manga_13'),
              getS3ObjectImagePath('ishinomaki/manga_14'),
              getS3ObjectImagePath('ishinomaki/manga_15'),
              getS3ObjectImagePath('ishinomaki/manga_16'),
              getS3ObjectImagePath('ishinomaki/manga_17'),
              getS3ObjectImagePath('ishinomaki/manga_18'),
              getS3ObjectImagePath('ishinomaki/manga_19'),
              getS3ObjectImagePath('ishinomaki/manga_20')
            ]}
            location={LOCATION['en']}
          />

          <TextHeader header={ishinomakiText.headers.park} />
          <TextBlock text={ishinomakiText.park_1} />
          <Image source={getS3ObjectImagePath('ishinomaki/park_1')} location={LOCATION['en']} size='sm' caption={captions.cats} />
          <TextBlock text={ishinomakiText.park_2} />
          <ImageSlide
            images={[
              getS3ObjectImagePath('ishinomaki/park_2'),
              getS3ObjectImagePath('ishinomaki/park_3'),
              getS3ObjectImagePath('ishinomaki/park_4'),
              getS3ObjectImagePath('ishinomaki/park_5'),
              getS3ObjectImagePath('ishinomaki/park_6'),
              getS3ObjectImagePath('ishinomaki/park_7'),
              getS3ObjectImagePath('ishinomaki/park_8')
            ]}
            location={LOCATION['en']}
          />
          <TextBlock
            text={ishinomakiText.park_3}
            source={getS3ObjectImagePath('ishinomaki/park_9')}
            location={LOCATION['en']}
          />

          <TextHeader header={ishinomakiText.headers.dam} />
          <TextBlock text={ishinomakiText.dam_1} />
          <TextBlock text={ishinomakiText.dam_2} />
          <Image source={getS3ObjectImagePath('ishinomaki/dam_1')} location={LOCATION['en']} />
          <TextBlock text={ishinomakiText.dam_3} />
          <Image source={getS3ObjectImagePath('ishinomaki/dam_2')} location={LOCATION['en']} size='lg' />
        </Page>
        <button type="button" className="hideme" onClick={this.handleToggleModal}/>
        {showModal && (
          <Modal show={showModal} onHide={this.handleToggleModal} className='modal-container'>
            <Modal.Header closeButton>
              <Modal.Title>YeYe</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ishinomakiText.yeye_1}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_2}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_3}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_4}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_5}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_6}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_7}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_8}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_9}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_10}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_11}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_12}</Modal.Body>
            <Modal.Body>{ishinomakiText.yeye_13}</Modal.Body>
            <Modal.Body><ReactImage src={getS3ObjectImagePath('ishinomaki/dfly')} fluid /></Modal.Body>
          </Modal>
        )}
      </div>
    )
  }
}
