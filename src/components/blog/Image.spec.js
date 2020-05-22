import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from './Image';

Enzyme.configure({ adapter: new Adapter() });

describe('<Image />', () => {
  let wrapper;

  const defaultProps = {
    caption: 'caption caption caption',
    location: 'San Francisco',
    source: '/static/media/sf11111.jpg',
  };

  it('renders as expected', () => {
    const tree = renderer
      .create(<Image {...defaultProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when handleToggleImageModal() is called', () => {
    wrapper = shallow(<Image {...defaultProps} />);
    wrapper.instance().handleToggleImageModal();
    expect(wrapper.state('showImageModal')).toEqual(true);
    wrapper.instance().handleToggleImageModal();
    expect(wrapper.state('showImageModal')).toEqual(false);
  });
});