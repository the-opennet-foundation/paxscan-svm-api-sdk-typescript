// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TpsAPI from './tps';
import { TpRetrieveHistoryParams, TpRetrieveHistoryResponse, Tps } from './tps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Stats extends APIResource {
  tps: TpsAPI.Tps = new TpsAPI.Tps(this._client);

  /**
   * Returns indexer health status
   */
  checkHealth(options?: RequestOptions): APIPromise<StatCheckHealthResponse> {
    return this._client.get('/stats/health', options);
  }

  /**
   * Get current epoch information
   */
  retrieveEpoch(options?: RequestOptions): APIPromise<StatRetrieveEpochResponse> {
    return this._client.get('/stats/epoch', options);
  }

  /**
   * Returns overall network stats including slot, TPS, block time
   */
  retrieveNetwork(options?: RequestOptions): APIPromise<StatRetrieveNetworkResponse> {
    return this._client.get('/stats/network', options);
  }

  /**
   * Returns circulating, total, and non-circulating supply
   */
  retrieveSupply(options?: RequestOptions): APIPromise<StatRetrieveSupplyResponse> {
    return this._client.get('/stats/supply', options);
  }

  /**
   * Get validator information
   */
  retrieveValidators(options?: RequestOptions): APIPromise<StatRetrieveValidatorsResponse> {
    return this._client.get('/stats/validators', options);
  }
}

export interface Validator {
  activatedStake?: number;

  commission?: number;

  epochCredits?: Array<Array<number>>;

  lastVote?: number;

  nodePubkey?: string;

  rootSlot?: number;

  votePubkey?: string;
}

export interface StatCheckHealthResponse {
  database?: string;

  redis?: string;

  rpc?: string;

  status?: string;

  timestamp?: string;

  version?: string;
}

export interface StatRetrieveEpochResponse {
  absoluteSlot?: number;

  blockHeight?: number;

  epoch?: number;

  slotIndex?: number;

  slotsInEpoch?: number;

  transactionCount?: number | null;
}

export interface StatRetrieveNetworkResponse {
  /**
   * Average block time in seconds
   */
  avgBlockTime?: number;

  blockHeight?: number;

  currentSlot?: number;

  epoch?: number;

  /**
   * Epoch progress percentage
   */
  epochProgress?: number;

  indexedSlot?: number;

  totalAccounts?: number;

  totalTokens?: number;

  totalTransactions?: number;

  /**
   * Current transactions per second
   */
  tps?: number;
}

export interface StatRetrieveSupplyResponse {
  /**
   * Circulating supply in lamports
   */
  circulating?: string;

  /**
   * Circulating supply in SOL/PXSOL
   */
  circulatingUi?: number;

  /**
   * Non-circulating supply in lamports
   */
  nonCirculating?: string;

  /**
   * Total supply in lamports
   */
  total?: string;

  /**
   * Total supply in SOL/PXSOL
   */
  totalUi?: number;
}

export interface StatRetrieveValidatorsResponse {
  current?: Array<Validator>;

  delinquent?: Array<Validator>;

  totalStake?: string;
}

Stats.Tps = Tps;

export declare namespace Stats {
  export {
    type Validator as Validator,
    type StatCheckHealthResponse as StatCheckHealthResponse,
    type StatRetrieveEpochResponse as StatRetrieveEpochResponse,
    type StatRetrieveNetworkResponse as StatRetrieveNetworkResponse,
    type StatRetrieveSupplyResponse as StatRetrieveSupplyResponse,
    type StatRetrieveValidatorsResponse as StatRetrieveValidatorsResponse,
  };

  export {
    Tps as Tps,
    type TpRetrieveHistoryResponse as TpRetrieveHistoryResponse,
    type TpRetrieveHistoryParams as TpRetrieveHistoryParams,
  };
}
