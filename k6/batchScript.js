import http from 'k6/http';
import { check } from 'k6';

// Common things
const BASEURL = 'http://localhost:3333';

export const options = {
  stages: [
    { duration: '2m', target: 1000 },
    { duration: '1m', target: 500 },
    { duration: '1m', target: 100 },
    { duration: '1m', target: 0 },
  ],

};

export default () => {
  const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const PRODUCT_ID = randomInteger(900000, 1000000);
  const getProductsEndpoint = {
    method: 'GET',
    url: `${BASEURL}/products`,
  };

  const getProductInformationEndpoint = {
    method: 'GET',
    url: `${BASEURL}/products/${PRODUCT_ID}`,
  };

  const getProductStyleEndpoint = {
    method: 'GET',
    url: `${BASEURL}/products/${PRODUCT_ID}/styles`,
  };

  const getRelatedProductEndpoint = {
    method: 'GET',
    url: `${BASEURL}/products/${PRODUCT_ID}/related`,
  };

  const responses = http.batch([
    getProductsEndpoint,
    getProductInformationEndpoint,
    getProductStyleEndpoint,
    getRelatedProductEndpoint,
  ]);

  responses.forEach((response) => {
    check(response, {
      'Status Code was 200': (res) => res.status === 200,
    });
  });
};
