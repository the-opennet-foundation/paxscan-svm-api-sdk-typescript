// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Tps extends APIResource {
  /**
   * Get TPS history
   */
  retrieveHistory(
    query: TpRetrieveHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TpRetrieveHistoryResponse> {
    return this._client.get('/stats/tps/history', { query, ...options });
  }
}

export interface TpRetrieveHistoryResponse {
  data?: Array<TpRetrieveHistoryResponse.Data>;
}

export namespace TpRetrieveHistoryResponse {
  export interface Data {
    timestamp?: string;

    tps?: number;

    transactionCount?: number;
  }
}

export interface TpRetrieveHistoryParams {
  /**
   * Number of hours of history
   */
  hours?: number;
}

export declare namespace Tps {
  export {
    type TpRetrieveHistoryResponse as TpRetrieveHistoryResponse,
    type TpRetrieveHistoryParams as TpRetrieveHistoryParams,
  };
}
