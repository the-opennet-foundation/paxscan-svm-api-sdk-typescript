// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Search extends APIResource {
  /**
   * Search across blocks, transactions, accounts, and tokens. Automatically detects
   * query type based on format.
   */
  perform(query: string, options?: RequestOptions): APIPromise<SearchPerformResponse> {
    return this._client.get(path`/search/${query}`, options);
  }
}

export interface SearchPerformResponse {
  results?: Array<SearchPerformResponse.Result>;

  /**
   * Type of result found
   */
  type?: 'block' | 'transaction' | 'account' | 'token' | 'unknown';
}

export namespace SearchPerformResponse {
  export interface Result {
    data?: unknown;

    type?: string;
  }
}

export declare namespace Search {
  export { type SearchPerformResponse as SearchPerformResponse };
}
