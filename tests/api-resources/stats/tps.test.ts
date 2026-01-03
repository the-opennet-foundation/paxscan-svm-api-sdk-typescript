// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxscanSvmAPISDK from 'paxscan-svm-api-sdk';

const client = new PaxscanSvmAPISDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tps', () => {
  // Prism tests are disabled
  test.skip('retrieveHistory', async () => {
    const responsePromise = client.stats.tps.retrieveHistory();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveHistory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stats.tps.retrieveHistory({ hours: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxscanSvmAPISDK.NotFoundError);
  });
});
