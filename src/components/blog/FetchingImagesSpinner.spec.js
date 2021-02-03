import React from 'react';
import FetchingImagesSpinner from './FetchingImagesSpinner';
import renderer from 'react-test-renderer';

describe('<FetchingImagesSpinner />', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should render as expected', () => {
    const tree = renderer
      .create(<FetchingImagesSpinner />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});