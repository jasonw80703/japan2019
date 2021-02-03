import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LocationHeader from 'components/locations/LocationHeader';
import { LOCATIONS } from 'constants/locations';
import map from 'assets/map/sanfrancisco.jpg';
import mapModalDetails from 'assets/map/sanfrancisco.json';

describe('<LocationHeader />', () => {
  let wrapper;

  const defaultProps = {
    location: LOCATIONS.SAN_FRANCISCO,
    map: map,
    mapModalDetails: mapModalDetails,
  };

  it('renders as expected', () => {
    const tree = renderer
      .create(<LocationHeader {...defaultProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when handleToggleMapModal() is called', () => {
    wrapper = shallow(<LocationHeader {...defaultProps} />);
    wrapper.instance().handleToggleMapModal();
    expect(wrapper.state('showMapModal')).toEqual(true);
    wrapper.instance().handleToggleMapModal();
    expect(wrapper.state('showMapModal')).toEqual(false);
  });
});
