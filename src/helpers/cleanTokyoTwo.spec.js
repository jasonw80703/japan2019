import { cleanTokyoTwoFolder } from 'helpers/cleanTokyoTwo';

describe('cleanTokyoTwoFolder', () => {
  it('should return the correct tokyo two folder is display is tokyo two', () => {
    const city = 'Tokyo (Round 2)';
    const expectedFolder = 'tokyo_two';
    expect(cleanTokyoTwoFolder(city)).toEqual(expectedFolder);
  });

  it('should return the city otherwise', () => {
    const city = 'Tokyo';
    expect(cleanTokyoTwoFolder(city)).toEqual(city);
  });
});
