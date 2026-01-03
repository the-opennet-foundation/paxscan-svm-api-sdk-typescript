// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransactionsAPI from './transactions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Blocks extends APIResource {
  /**
   * Get block by slot or blockhash
   */
  retrieve(slotOrHash: string, options?: RequestOptions): APIPromise<Block> {
    return this._client.get(path`/blocks/${slotOrHash}`, options);
  }

  /**
   * Returns blocks ordered by slot descending
   */
  list(query: BlockListParams | null | undefined = {}, options?: RequestOptions): APIPromise<BlockList> {
    return this._client.get('/blocks', { query, ...options });
  }

  /**
   * Returns the most recent blocks
   */
  listLatest(
    query: BlockListLatestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlockList> {
    return this._client.get('/blocks/latest', { query, ...options });
  }

  /**
   * Get transactions in a block
   */
  listTransactions(
    slot: number,
    query: BlockListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionList> {
    return this._client.get(path`/blocks/${slot}/transactions`, { query, ...options });
  }
}

export interface Block {
  /**
   * Block hash (base58)
   */
  blockhash?: string;

  blockHeight?: number | null;

  /**
   * Unix timestamp
   */
  blockTime?: number | null;

  createdAt?: string;

  /**
   * Leader validator pubkey
   */
  leader?: string | null;

  parentBlockhash?: string;

  parentSlot?: number;

  rewards?: Array<Block.Reward>;

  /**
   * Block slot number
   */
  slot?: number;

  transactionCount?: number;
}

export namespace Block {
  export interface Reward {
    commission?: number | null;

    lamports?: number;

    postBalance?: number;

    pubkey?: string;

    rewardType?: string;
  }
}

export interface BlockList {
  data?: Array<Block>;

  pagination?: Pagination;
}

export interface Pagination {
  hasMore?: boolean;

  limit?: number;

  offset?: number;

  total?: number;
}

export interface TransactionList {
  data?: Array<TransactionsAPI.Transaction>;

  pagination?: Pagination;
}

export interface BlockListParams {
  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export interface BlockListLatestParams {
  limit?: number;
}

export interface BlockListTransactionsParams {
  /**
   * Number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip
   */
  offset?: number;
}

export declare namespace Blocks {
  export {
    type Block as Block,
    type BlockList as BlockList,
    type Pagination as Pagination,
    type TransactionList as TransactionList,
    type BlockListParams as BlockListParams,
    type BlockListLatestParams as BlockListLatestParams,
    type BlockListTransactionsParams as BlockListTransactionsParams,
  };
}
