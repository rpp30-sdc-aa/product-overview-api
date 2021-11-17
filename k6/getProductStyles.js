import http from 'k6/http';
import { sleep, check } from 'k6';

// Common things
const BASEURL = 'http://localhost:3333';

export const options = {
  // stages: [
  //   { duration: '2m', target: 500 },
  //   { duration: '30s', target: 500 },
  //   { duration: '1m', target: 200 },
  //   { duration: '1m', target: 50 },
  //   { duration: '1m', target: 0 },
  // ],
  // stages: [
  //   { duration: '2m', target: 700 }, // Load testing
  //   { duration: '30s', target: 500 },
  //   { duration: '1m', target: 200 },
  //   { duration: '1m', target: 50 },
  //   { duration: '1m', target: 0 },
  // ],
  // stages: [
  //   { duration: '2m', target: 1000 }, // Load testing
  //   { duration: '30s', target: 500 },
  //   { duration: '1m', target: 200 },
  //   { duration: '1m', target: 50 },
  //   { duration: '1m', target: 0 },
  // ],
  stages: [
    { duration: '2m', target: 1500 }, // Stress testing
    { duration: '1m', target: 500 },
    { duration: '1m', target: 200 },
    { duration: '1m', target: 50 },
    { duration: '1m', target: 0 },
  ],
  // vus: 1500,
  // duration: '1m',
};

// Test scenario
export default () => {
  const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const PRODUCT_ID = randomInteger(900000, 1000000);

  // GET product styles endpoint
  const getProductStylesResponse = http.get(`${BASEURL}/products/${PRODUCT_ID}/styles`);
  check(getProductStylesResponse, {
    'GET /products/:product_id/styles status code is 200': (r) => r.status === 200,
  });
  // short break between iterations
  sleep(0.5);
};
