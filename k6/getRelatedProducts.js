import http from 'k6/http';
import { sleep, check } from 'k6';

// Common things
const BASEURL = 'http://localhost:3333';

export const options = {
  stages: [
    { duration: '2m', target: 10 },
    { duration: '1m', target: 10 },
    { duration: '12m', target: 40 },
    { duration: '1m', target: 0 },
  ],
};

// Test scenario
export default () => {
  const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const PRODUCT_ID = randomInteger(900000, 1000000);

  // GET related products endpoint
  const getRelatedProductResponse = http.get(`${BASEURL}/products/${PRODUCT_ID}/related`);
  check(getRelatedProductResponse, {
    'GET /products/:product_id/related status code is 200': (r) => r.status === 200,
  });
  // short break between iterations
  sleep(0.5);
};
