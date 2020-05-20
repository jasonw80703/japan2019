/**
 * Takes location string, lower cases and removes spaces
 * @param {String} str 
 */
export default function lowerCaseRemoveSpaces(str) {
  return str.toLowerCase().replace(/\s/g, '');
};