// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxscanSvmAPISDK from 'paxscan-svm-api-sdk';

const client = new PaxscanSvmAPISDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource blocks', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.blocks.retrieve('slotOrHash');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.blocks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.blocks.list({ limit: 1, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxscanSvmAPISDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listLatest', async () => {
    const responsePromise = client.blocks.listLatest();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listLatest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.blocks.listLatest({ limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxscanSvmAPISDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listTransactions', async () => {
    const responsePromise = client.blocks.listTransactions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listTransactions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.blocks.listTransactions(0, { limit: 1, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PaxscanSvmAPISDK.NotFoundError);
  });
});
