// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxscanSvmAPISDK from '@paxeer-network/paxscan-svm-api-sdk';

const client = new PaxscanSvmAPISDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // Prism tests are disabled
  test.skip('perform', async () => {
    const responsePromise = client.search.perform('xxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
