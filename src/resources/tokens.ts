// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as BlocksAPI from './blocks';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tokens extends APIResource {
  /**
   * Get token details by mint address
   */
  retrieve(mint: string, options?: RequestOptions): APIPromise<Token> {
    return this._client.get(path`/tokens/${mint}`, options);
  }

  /**
   * Get paginated list of tokens
   */
  list(query: TokenListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TokenList> {
    return this._client.get('/tokens', { query, ...options });
  }

  /**
   * Get token holders
   */
  listHolders(
    mint: string,
    query: TokenListHoldersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TokenListHoldersResponse> {
    return this._client.get(path`/tokens/${mint}/holders`, { query, ...options });
  }

  /**
   * Get top tokens by holder count
   */
  listTop(
    query: TokenListTopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TokenList> {
    return this._client.get('/tokens/top', { query, ...options });
  }

  /**
   * Get token transfer history
   */
  listTransfers(
    mint: string,
    query: TokenListTransfersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TokenTransferList> {
    return this._client.get(path`/tokens/${mint}/transfers`, { query, ...options });
  }
}

export interface Token {
  createdAt?: string;

  decimals?: number;

  freezeAuthority?: string | null;

  holderCount?: number;

  isInitialized?: boolean;

  logoUri?: string | null;

  /**
   * Token mint address (base58)
   */
  mint?: string;

  mintAuthority?: string | null;

  name?: string | null;

  /**
   * Total supply as string
   */
  supply?: string;

  symbol?: string | null;

  transferCount?: number;
}

export interface TokenList {
  data?: Array<Token>;

  pagination?: BlocksAPI.Pagination;
}

export interface TokenListHoldersResponse {
  data?: Array<TokenListHoldersResponse.Data>;

  pagination?: BlocksAPI.Pagination;
}

export namespace TokenListHoldersResponse {
  export interface Data {
    amount?: string;

    owner?: string;

    /**
     * Percentage of total supply
     */
    percentage?: number;

    tokenAccount?: string;

    uiAmount?: number;
  }
}

export interface TokenListParams {
  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;

  /**
   * Sort order
   */
  sort?: 'holders' | 'supply' | 'created';
}

export interface TokenListHoldersParams {
  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export interface TokenListTopParams {
  limit?: number;
}

export interface TokenListTransfersParams {
  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export declare namespace Tokens {
  export {
    type Token as Token,
    type TokenList as TokenList,
    type TokenListHoldersResponse as TokenListHoldersResponse,
    type TokenListParams as TokenListParams,
    type TokenListHoldersParams as TokenListHoldersParams,
    type TokenListTopParams as TokenListTopParams,
    type TokenListTransfersParams as TokenListTransfersParams,
  };
}
