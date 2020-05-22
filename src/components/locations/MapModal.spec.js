import React from 'react';
import EnzymeToJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import MapModal from './MapModal';

describe('<MapModal />', () => {
  const defaultProps = {
    handleToggleModal: () => {},
    location: 'San Francisco',
    showModal: true,
    source: '/static/media/sf11111.jpg',
  };

  it('renders as expected', () => {
    const tree = mount(<MapModal {...defaultProps} />)
    expect(EnzymeToJson(tree)).toMatchSnapshot();
  });
});