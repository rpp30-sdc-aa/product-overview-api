const axios = require('axios');
const mongoose = require('mongoose');

const baseUrl = 'http://localhost:3333';

describe('Test routes', () => {
  test('it returns all the products', () => axios.get(`${baseUrl}/products`)
    .then((result) => {
      expect(result.data.length).toBe(5);
    }));

  test('it returns feature information about a product', () => axios.get(`${baseUrl}/products/2`)
    .then((result) => {
      expect(result.data.features.length).toBeGreaterThan(0);
      expect(result.data.id).not.toBe(undefined);
      expect(result.data.id).toBe(2);
    }));

  test('it returns styles a product', () => axios.get(`${baseUrl}/products/2/styles`)
    .then((result) => {
      expect(result.data.product_id).not.toBe(undefined);
      expect(result.data.product_id).toBe(2);
      expect(Array.isArray(result.data.results)).toBe(true);
    }));
  test('it returns relatedIDs a product', () => axios.get(`${baseUrl}/products/2/related`)
    .then((result) => {
      expect(result.data.product_id).not.toBe(undefined);
      expect(result.data.product_id).toBe(2);
      expect(Array.isArray(result.data.results)).toBe(true);
    }));
});

afterAll(() => {
  mongoose.connection.close();
});
