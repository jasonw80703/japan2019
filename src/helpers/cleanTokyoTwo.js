const TOKYO_TWO_DISPLAY = 'Tokyo (Round 2)';
const TOKYO_TWO_FOLDER = 'tokyo_two';

/**
 * Single helper to map Tokyo Two to a usable kebab case
 * @param {String} city 
 */
export function cleanTokyoTwoFolder(city) {
  if (city === TOKYO_TWO_DISPLAY) {
    return TOKYO_TWO_FOLDER;
  }
  return city;
}