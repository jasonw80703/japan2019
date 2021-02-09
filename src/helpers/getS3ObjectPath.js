/**
 * URL to fetch .jpg from public S3 bucket
 * @param {String} path object path
 */
export function getS3ObjectImagePath(path) {
  return `https://solo-japan-2019.s3-us-west-1.amazonaws.com/${path}.jpg`;
}
