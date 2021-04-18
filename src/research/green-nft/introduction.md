# Introduction

The [Green NFT Hackathon](https://gitcoin.co/hackathon/green-nft/onboard) was created to incentivize the development of open source solutions focused on reducing the carbon footprint of [NFTs](https://ethereum.org/en/nft/).

In parternship with [Regen Network](https://www.regen.network/), a project focused on building ecosystem services and credits, participants were also incentivized to research the integration of tokenized carbon credits that could be used to help offset the carbon footprint of NFTs (see [Regen Bounty](https://gitcoin.co/issue/GreenNFT/GreenNFTs/3/100025306)).

Without my own platform to integrate tokenized carbon credits, and without prior knowledge of Regen Network and the Cosmos ecosystem, I decided to focus my research on developing a deeper understanding of solutions being built to enable communication between blockchains and what it means to exchange assets between blockchains.

In addition, I created [examples](/development/testing/overview.html) for testing communication between Cosmos-based blockchains and I started writing the specification for a custom module that can be used to exchange tokenized carbon credits between Cosmos-based blockchains (see [Ecodex Module](/research/green-nft/ecodex-module.html)).

The following is a brief summary of my initial research.

## Research Summary

:::warning please note
work in progess
:::

### Questions

How would tokenized carbon credits issued on the Regen Network blockchain be represented as an asset on another blockchain within the Cosmos ecosystem and on the Ethereum blockchain?

What would it mean to "exchange" tokenized carbon credits between blockchains? What would it mean to purchase vouchers for locked credits?

### Context

[Regen Network](https://www.regen.network/) is a project focused on building ecosystem services and credits using an application specific blockchain. Regen Network's blockchain [`regen-ledger`](https://github.com/regen-network/regen-ledger) is built with the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk), which enables it to easily communicate with other blockchains in the Cosmos ecosystem.

Within the Cosmos ecosystem, blockchains are able to communicate with each other using a protocol called "inter-blockchain communication protocol" (or [IBC](https://ibcprotocol.org/)), which has recently been implemented as a module and included as a new feature in the latest release of the Cosmos SDK.

Regen Network just launched their mainnet version of `regen-ledger`, which means Regen Network will be able to communicate with other Cosmos-based blockchains once their community stakeholders have enabled the `ibc` module through an on-chain governance process.

Regen Network is developing a custom `ecocredit` module within `regen-ledger` that will allow for tokenized carbon credits to exist on the blockchain. The tokens are fractional NFTs linked to verifiable data that relates to measureable positive ecological health.

Anyone looking to offset their carbon footprint will soon be able to purchase tokenized carbon credits that are being issued on the `regen-ledger` blockchain. In combination with the `ibc` module, there might also be opportunities to purchase and exchange "eco credits" through other blockchains.

### IBC Protocol

*How are assets exchanged using the IBC protocol?*

### Gravity Bridge

*How are assets exchanged using Gravity Bridge?*

[Gravity Bridge](https://github.com/cosmos/gravity-bridge) is a blockchain bridge between the Cosmos ecosystem and the Ethereum blockchain that supports the transfer of ERC20 tokens originating on Ethereum to a Cosmos-based blockchain and then back to Ethereum. The ability to transfer the equivelant of an ERC20 token originating on a Cosmos-based blockchain to an ERC20 token on Ethereum is currently in development.

*How might Gravity Bridge be extended to support the purchasing of "eco credits"?*
