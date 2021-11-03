import http from 'k6/http';
import { sleep, check } from 'k6';

// Common things
const BASEURL = 'http://localhost:3333';

export const options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '1m', target: 40 },
    { duration: '12m', target: 20 },
    { duration: '1m', target: 0 },
  ],
};

// Test scenario
export default () => {
  // GET all products endpoint
  const getProductsResponse = http.get(`${BASEURL}/products`);
  check(getProductsResponse, {
    'GET /products status code is 200': (r) => r.status === 200,
  });
  // short break between iterations
  sleep(0.5);
};
