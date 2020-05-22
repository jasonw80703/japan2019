import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  let wrapper;

  it('renders as expected', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when handleToggleModal() is called', () => {
    wrapper = shallow(<Home />);
    wrapper.instance().handleToggleModal();
    expect(wrapper.state('showModal')).toEqual(true);
    wrapper.instance().handleToggleModal();
    expect(wrapper.state('showModal')).toEqual(false);
  });

  describe('when handleToggleLucy() is called', () => {
    wrapper = shallow(<Home />);
    wrapper.instance().handleToggleLucy();
    expect(wrapper.state('showLucy')).toEqual(true);
    wrapper.instance().handleToggleLucy();
    expect(wrapper.state('showLucy')).toEqual(false);
  });
});