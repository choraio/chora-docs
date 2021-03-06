# Introduction

The chora project is a research project. All tools and services being built within the chora project are prototypes and proof-of-concepts and they are all subject to change.

## Chora Chain

[`chora-chain`](https://github.com/choraio/chora-chain) is an experimental blockchain built with [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) and [Starport](https://github.com/tendermint/starport).

## Chora Modules

[`chora-chain`](https://github.com/choraio/chora-chain) includes custom modules that can be used by other Cosmos-based blockchains.

### Ecodex Module

The `ecodex` module was originally built from the [interchange exchange tutorial](https://tutorials.cosmos.network/interchain-exchange/tutorial/00-intro.html) and is currently being modified to support the exchanging of tokens for "eco credits" (or more specifically vouchers for locked "eco credits") from [`regen-ledger`](https://github.com/regen-network/regen-ledger) through other Cosmos-based blockchains.
