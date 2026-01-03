// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PaxscanSvmAPISDK } from '../client';

export abstract class APIResource {
  protected _client: PaxscanSvmAPISDK;

  constructor(client: PaxscanSvmAPISDK) {
    this._client = client;
  }
}
