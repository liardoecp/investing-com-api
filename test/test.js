/* eslint-disable max-len */
const assert = require('assert');
const { investing } = require('../index');
const { mapResponse } = require('../functions');

const mockData = [
  [1587340800000, 230.7, 0, 0],
  [1587427200000, 259.4, 0, 0],
  [1587513600000, 246.2, 0, 0],
  [1587945600000, 218, 0, 0],
];

describe('Tests for Investing.com unofficial APIs', () => {

  it('should map an array of arrays to array of objects', () => {
    const mappedResponse = mapResponse(mockData);
    assert.strictEqual(mockData[0][0], mappedResponse[0].date);
    assert.strictEqual(mockData[0][1], mappedResponse[0].value);
    assert.strictEqual(mockData[1][0], mappedResponse[1].date);
    assert.strictEqual(mockData[1][1], mappedResponse[1].value);
  });


  it('should return undefined and print error if no input is given', async () => {
    const response = await investing();
    assert.strictEqual(response, undefined);
  });

  it('should return undefined and print error if input is invalid', async () => {
    const response = await investing('currencies/invalid');
    assert.strictEqual(response, undefined);
  });

  it('should return error with invalid period', async () => {
    const response = await investing('currencies/eur-usd', '1M');
    assert.strictEqual(response, undefined);
  });

  it('should return error with invalid interval', async () => {
    const response = await investing('currencies/eur-usd', 'P1M', '15M');
    assert.strictEqual(response, undefined);
  });

  it('should return error with invalid pointscount', async () => {
    const response = await investing('currencies/eur-usd', 'P1M', 'P1D', 20);
    assert.strictEqual(response, undefined);
  });

});
