import lowerCaseRemoveSpaces from 'helpers/lowerCaseRemoveSpaces';

describe('lowerCaseRemoveSpaces()', () => {
  it('should lower case and remove spaces', () => {
    const str = 'San Francisco';
    const expectedResult = 'sanfrancisco';
    expect(lowerCaseRemoveSpaces(str)).toEqual(expectedResult);
  });
});
