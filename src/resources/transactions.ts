// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransactionsAPI from './transactions';
import * as BlocksAPI from './blocks';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Get transaction by signature
   */
  retrieve(signature: string, options?: RequestOptions): APIPromise<Transaction> {
    return this._client.get(path`/transactions/${signature}`, options);
  }

  /**
   * Get paginated list of transactions
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlocksAPI.TransactionList> {
    return this._client.get('/transactions', { query, ...options });
  }

  /**
   * Get latest transactions
   */
  listLatest(
    query: TransactionListLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlocksAPI.TransactionList> {
    return this._client.get('/transactions/latest', { query, ...options });
  }

  /**
   * Search transactions by signature prefix
   */
  search(
    prefix: string,
    query: TransactionSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlocksAPI.TransactionList> {
    return this._client.get(path`/transactions/search/${prefix}`, { query, ...options });
  }
}

export interface Instruction {
  accounts?: Array<string>;

  data?: string;

  programId?: string;
}

export interface TokenBalance {
  accountIndex?: number;

  mint?: string;

  owner?: string;

  uiTokenAmount?: TokenBalance.UiTokenAmount;
}

export namespace TokenBalance {
  export interface UiTokenAmount {
    amount?: string;

    decimals?: number;

    uiAmount?: number | null;

    uiAmountString?: string;
  }
}

export interface Transaction {
  accountKeys?: Array<string>;

  blockTime?: number | null;

  computeUnitsConsumed?: number | null;

  createdAt?: string;

  err?: string | null;

  /**
   * Transaction fee in lamports
   */
  fee?: number;

  innerInstructions?: Array<Transaction.InnerInstruction>;

  instructions?: Array<Instruction>;

  logMessages?: Array<string>;

  postBalances?: Array<number>;

  postTokenBalances?: Array<TokenBalance>;

  preBalances?: Array<number>;

  preTokenBalances?: Array<TokenBalance>;

  recentBlockhash?: string;

  /**
   * Transaction signature (base58)
   */
  signature?: string;

  slot?: number;

  status?: 'success' | 'failed';
}

export namespace Transaction {
  export interface InnerInstruction {
    index?: number;

    instructions?: Array<TransactionsAPI.Instruction>;
  }
}

export interface TransactionListParams {
  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;

  /**
   * Filter by transaction status
   */
  status?: 'success' | 'failed';
}

export interface TransactionListLatestParams {
  limit?: number;
}

export interface TransactionSearchParams {
  /**
   * Number of results to return
   */
  limit?: number;
}

export declare namespace Transactions {
  export {
    type Instruction as Instruction,
    type TokenBalance as TokenBalance,
    type Transaction as Transaction,
    type TransactionListParams as TransactionListParams,
    type TransactionListLatestParams as TransactionListLatestParams,
    type TransactionSearchParams as TransactionSearchParams,
  };
}
