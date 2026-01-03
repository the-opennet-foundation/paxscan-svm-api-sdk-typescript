# Blocks

Types:

- <code><a href="./src/resources/blocks.ts">Block</a></code>
- <code><a href="./src/resources/blocks.ts">BlockList</a></code>
- <code><a href="./src/resources/blocks.ts">Pagination</a></code>
- <code><a href="./src/resources/blocks.ts">TransactionList</a></code>

Methods:

- <code title="get /blocks/{slotOrHash}">client.blocks.<a href="./src/resources/blocks.ts">retrieve</a>(slotOrHash) -> Block</code>
- <code title="get /blocks">client.blocks.<a href="./src/resources/blocks.ts">list</a>({ ...params }) -> BlockList</code>
- <code title="get /blocks/latest">client.blocks.<a href="./src/resources/blocks.ts">listLatest</a>({ ...params }) -> BlockList</code>
- <code title="get /blocks/{slot}/transactions">client.blocks.<a href="./src/resources/blocks.ts">listTransactions</a>(slot, { ...params }) -> TransactionList</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">Instruction</a></code>
- <code><a href="./src/resources/transactions.ts">TokenBalance</a></code>
- <code><a href="./src/resources/transactions.ts">Transaction</a></code>

Methods:

- <code title="get /transactions/{signature}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(signature) -> Transaction</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionList</code>
- <code title="get /transactions/latest">client.transactions.<a href="./src/resources/transactions.ts">listLatest</a>({ ...params }) -> TransactionList</code>
- <code title="get /transactions/search/{prefix}">client.transactions.<a href="./src/resources/transactions.ts">search</a>(prefix, { ...params }) -> TransactionList</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">TokenTransferList</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveTokensResponse</a></code>

Methods:

- <code title="get /accounts/{pubkey}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(pubkey) -> AccountRetrieveResponse</code>
- <code title="get /accounts/{pubkey}/token-transfers">client.accounts.<a href="./src/resources/accounts.ts">retrieveTokenTransfers</a>(pubkey, { ...params }) -> TokenTransferList</code>
- <code title="get /accounts/{pubkey}/tokens">client.accounts.<a href="./src/resources/accounts.ts">retrieveTokens</a>(pubkey) -> AccountRetrieveTokensResponse</code>
- <code title="get /accounts/{pubkey}/transactions">client.accounts.<a href="./src/resources/accounts.ts">retrieveTransactions</a>(pubkey, { ...params }) -> TransactionList</code>

# Tokens

Types:

- <code><a href="./src/resources/tokens.ts">Token</a></code>
- <code><a href="./src/resources/tokens.ts">TokenList</a></code>
- <code><a href="./src/resources/tokens.ts">TokenListHoldersResponse</a></code>

Methods:

- <code title="get /tokens/{mint}">client.tokens.<a href="./src/resources/tokens.ts">retrieve</a>(mint) -> Token</code>
- <code title="get /tokens">client.tokens.<a href="./src/resources/tokens.ts">list</a>({ ...params }) -> TokenList</code>
- <code title="get /tokens/{mint}/holders">client.tokens.<a href="./src/resources/tokens.ts">listHolders</a>(mint, { ...params }) -> TokenListHoldersResponse</code>
- <code title="get /tokens/top">client.tokens.<a href="./src/resources/tokens.ts">listTop</a>({ ...params }) -> TokenList</code>
- <code title="get /tokens/{mint}/transfers">client.tokens.<a href="./src/resources/tokens.ts">listTransfers</a>(mint, { ...params }) -> TokenTransferList</code>

# Stats

Types:

- <code><a href="./src/resources/stats/stats.ts">Validator</a></code>
- <code><a href="./src/resources/stats/stats.ts">StatCheckHealthResponse</a></code>
- <code><a href="./src/resources/stats/stats.ts">StatRetrieveEpochResponse</a></code>
- <code><a href="./src/resources/stats/stats.ts">StatRetrieveNetworkResponse</a></code>
- <code><a href="./src/resources/stats/stats.ts">StatRetrieveSupplyResponse</a></code>
- <code><a href="./src/resources/stats/stats.ts">StatRetrieveValidatorsResponse</a></code>

Methods:

- <code title="get /stats/health">client.stats.<a href="./src/resources/stats/stats.ts">checkHealth</a>() -> StatCheckHealthResponse</code>
- <code title="get /stats/epoch">client.stats.<a href="./src/resources/stats/stats.ts">retrieveEpoch</a>() -> StatRetrieveEpochResponse</code>
- <code title="get /stats/network">client.stats.<a href="./src/resources/stats/stats.ts">retrieveNetwork</a>() -> StatRetrieveNetworkResponse</code>
- <code title="get /stats/supply">client.stats.<a href="./src/resources/stats/stats.ts">retrieveSupply</a>() -> StatRetrieveSupplyResponse</code>
- <code title="get /stats/validators">client.stats.<a href="./src/resources/stats/stats.ts">retrieveValidators</a>() -> StatRetrieveValidatorsResponse</code>

## Tps

Types:

- <code><a href="./src/resources/stats/tps.ts">TpRetrieveHistoryResponse</a></code>

Methods:

- <code title="get /stats/tps/history">client.stats.tps.<a href="./src/resources/stats/tps.ts">retrieveHistory</a>({ ...params }) -> TpRetrieveHistoryResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchPerformResponse</a></code>

Methods:

- <code title="get /search/{query}">client.search.<a href="./src/resources/search.ts">perform</a>(query) -> SearchPerformResponse</code>
