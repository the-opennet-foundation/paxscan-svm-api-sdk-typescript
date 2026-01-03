// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BlocksAPI from './blocks';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Get account details
   */
  retrieve(pubkey: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/accounts/${pubkey}`, options);
  }

  /**
   * Get token transfers for this account
   */
  retrieveTokenTransfers(
    pubkey: string,
    query: AccountRetrieveTokenTransfersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TokenTransferList> {
    return this._client.get(path`/accounts/${pubkey}/token-transfers`, { query, ...options });
  }

  /**
   * Get token accounts owned by this account
   */
  retrieveTokens(pubkey: string, options?: RequestOptions): APIPromise<AccountRetrieveTokensResponse> {
    return this._client.get(path`/accounts/${pubkey}/tokens`, options);
  }

  /**
   * Get account transaction history
   */
  retrieveTransactions(
    pubkey: string,
    query: AccountRetrieveTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlocksAPI.TransactionList> {
    return this._client.get(path`/accounts/${pubkey}/transactions`, { query, ...options });
  }
}

export interface TokenTransferList {
  data?: Array<TokenTransferList.Data>;

  pagination?: BlocksAPI.Pagination;
}

export namespace TokenTransferList {
  export interface Data {
    amount?: string;

    blockTime?: number | null;

    createdAt?: string;

    decimals?: number;

    fromAddress?: string;

    fromOwner?: string;

    mint?: string;

    signature?: string;

    slot?: number;

    toAddress?: string;

    toOwner?: string;

    uiAmount?: number;
  }
}

export interface AccountRetrieveResponse {
  accountType?: 'system' | 'token' | 'program' | 'unknown';

  createdAt?: string;

  dataLength?: number;

  executable?: boolean;

  firstSeenSlot?: number;

  /**
   * Account balance in lamports
   */
  lamports?: number;

  lastUpdatedSlot?: number;

  /**
   * Owner program pubkey
   */
  owner?: string;

  /**
   * Account public key (base58)
   */
  pubkey?: string;

  rentEpoch?: number;

  transactionCount?: number;

  updatedAt?: string;
}

export interface AccountRetrieveTokensResponse {
  data?: Array<AccountRetrieveTokensResponse.Data>;
}

export namespace AccountRetrieveTokensResponse {
  export interface Data {
    address?: string;

    amount?: string;

    decimals?: number;

    mint?: string;

    owner?: string;

    uiAmount?: number;
  }
}

export interface AccountRetrieveTokenTransfersParams {
  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export interface AccountRetrieveTransactionsParams {
  /**
   * Get transactions after this signature
   */
  after?: string;

  /**
   * Get transactions before this signature
   */
  before?: string;

  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export declare namespace Accounts {
  export {
    type TokenTransferList as TokenTransferList,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountRetrieveTokensResponse as AccountRetrieveTokensResponse,
    type AccountRetrieveTokenTransfersParams as AccountRetrieveTokenTransfersParams,
    type AccountRetrieveTransactionsParams as AccountRetrieveTransactionsParams,
  };
}
