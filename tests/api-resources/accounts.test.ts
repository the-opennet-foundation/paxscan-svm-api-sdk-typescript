// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxscanSvmAPISDK from '@paxeer-network/paxscan-svm-api-sdk';

const client = new PaxscanSvmAPISDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.accounts.retrieve('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveTokenTransfers', async () => {
    const responsePromise = client.accounts.retrieveTokenTransfers('pubkey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveTokenTransfers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.retrieveTokenTransfers(
        'pubkey',
        { limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxscanSvmAPISDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveTokens', async () => {
    const responsePromise = client.accounts.retrieveTokens('pubkey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveTransactions', async () => {
    const responsePromise = client.accounts.retrieveTransactions('pubkey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveTransactions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.retrieveTransactions(
        'pubkey',
        { after: 'after', before: 'before', limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxscanSvmAPISDK.NotFoundError);
  });
});
