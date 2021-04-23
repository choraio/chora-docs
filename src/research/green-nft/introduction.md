# Introduction

The [Green NFT Hackathon](https://gitcoin.co/hackathon/green-nft/onboard) was created to incentivize the development of open source solutions focused on reducing the carbon footprint of [NFTs](https://ethereum.org/en/nft/).

In parternship with [Regen Network](https://www.regen.network/), a project focused on building ecosystem services and credits, participants were also incentivized to research the integration of tokenized carbon credits that could be used to help offset the carbon footprint of NFTs (see [Regen Bounty](https://gitcoin.co/issue/GreenNFT/GreenNFTs/3/100025306)).

Without prior knowledge of Regen Network and the Cosmos ecosystem, I decided to focus my initial research on developing a deeper understanding of solutions being built to enable communication between blockchains and what it means to exchange assets between blockchains.

In addition, I created [examples](/development/testing/overview.html) for testing communication between Cosmos-based blockchains and I started writing the specification for a custom module that can be used to exchange tokenized carbon credits between Cosmos-based blockchains (see [Ecodex Module](/research/green-nft/ecodex-module.html)).

The following is a brief summary of my initial research.

## Research Summary

:::warning please note
work in progess
:::

### Questions

How might tokenized carbon credits issued on the Regen Network blockchain be represented as an asset on another blockchain within the Cosmos ecosystem and on the Ethereum blockchain?

What would it mean to exchange tokenized carbon credits between blockchains? What would it mean to purchase vouchers for locked credits from the Regen Network blockchain?

### Context

[Regen Network](https://www.regen.network/) is a project focused on building ecosystem services and credits using an application specific blockchain. Regen Network's blockchain [`regen-ledger`](https://github.com/regen-network/regen-ledger) is built with the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk), which enables it to easily communicate with other blockchains in the Cosmos ecosystem.

Within the Cosmos ecosystem, blockchains are able to communicate with each other using a protocol called Inter-Blockchain Communication (or [IBC](https://ibcprotocol.org/)), which was recently implemented as a module in the Cosmos SDK and included as a feature in the latest release.

Regen Network just launched their mainnet version of `regen-ledger`, which means `regen-ledger` will be able to communicate with other Cosmos-based blockchains once community stakeholders have decided to enable the `ibc` module through an on-chain governance process.

Regen Network is developing a custom `ecocredit` module within `regen-ledger` that will allow for tokenized carbon credits to exist as assets on the blockchain. The credits are fractional NFTs linked to verifiable data that is directly related to positive ecological health.

Anyone looking to offset their carbon footprint will soon be able to purchase tokenized carbon credits that are being issued on the `regen-ledger` blockchain and, in combination with the `ibc` module, it should also be possible to purchase and exchange those credits between blockchains.

<!-- ### Proof-of-Stake

"99% lower carbon footprint"

"Cosmos blockchains use an efficient Proof-of-Stake (PoS) consensus algorithm for securing the network. This PoS algorithm reduces the Cosmos carbon footprint by more than 99% compared to Proof-of-Work blockchains like Bitcoin that has a carbon footprint roughly the size of Switzerland." -->

### IBC Protocol

<!-- *What is the IBC protocol?* -->

Within the Cosmos ecosystem, Cosmos-based blockchains are able to freely exchange assets and data using a protocol called Inter-Blockchain Communication (or [IBC](https://ibcprotocol.org/)). The IBC protocol is described as "a reliable and secure inter-module communication protocol, where modules are deterministic processes that run on independent machines".

The IBC protocol was recently implemented as a module within the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) and included as a feature in the latest [Stargate](https://stargate.cosmos.network/) release. Although this initial implementation of the IBC protocol was designed to support communication between Cosmos-based blockchains (blockchains built with the Cosmos SDK), the IBC protocol can be adapted to support communication between blockchains that exist outside the Cosmos ecosystem.

In order to be compatible with the initial implementation of the IBC protocol in the Cosmos SDK, the consensus layer of the blockchain needs to have "instant finality". Cosmos-based blockchains are built on top of [Tendermint Core](https://github.com/tendermint/tendermint), which implements a consensus algorithm that has "instant finality".

If a blockchain has "fast finality", which is how the consensus algorithm is defined for the next version of Ethereum (Ethereum 2.0), the IBC Protocol can be easily adapted. If a blockchain has "probabilistic finality" such as Bitcoin or the current version of Ethereum (Ethereum 1.0), the IBC protocol cannot be used directly but rather in communication with a "Peg-Zone".

<!-- #### How does it work? -->

When two blockchains communicate using the IBC protocol, each blockchain runs a light-client for the other blockchain, allowing each blockchain to track the block headers of the other blockchain. This is necessary because each blockchain will have a different validator set and each blockchain will need to verify proofs that are created on the other blockchain.

The communication between blockchains happens through packets (or messages) that includes logic used to update the state of each blockchain. An initial handshake between the blockchains must take place before the two blockchains can send and receive packets of code that trigger state transition functions. "This handshake consists of a series of transactions submitted to each blockchain, where each transaction contains information and proofs about the state of the other chain."

<!-- "The handshake serves to allow both chains to authenticate each other, ensure that they are using the correct identifiers, and prepare to send and receive packets safely." -->

In the case of transferring assets, the assets being transferred are locked on the original blockchain and a proof is created and communicated to the other blockchain proving that those assets are locked (or "bonded"). This proof is verified using the block headers that are being tracked by the light client. If the proof is valid, vouchers for the locked assets are created on the other blockchain.

It is important to note that the vouchers are not the original assets. The vouchers only represent the original assets on the original blockchain. The vouchers are new assets that are created with the proof that there are locked assets on the original blockchain. The vouchers can also be exchanged (returned) for the original assets, in which case the proof is proving that the vouchers have been retired and are no longer valid, allowing for the original assets on the original blockchain to be unlocked.

<!-- The minting and burning of tokens... -->

<!-- Each Cosmos-based blockchain has the option to connect to other Cosmos-based blockchains using the IBC protocol, which means it is important to only enable IBC with trusted blockchains. -->

<!-- "One idea is to connect each blockchain in the network with every other via direct IBC connections. The main problem with this approach is that the number of connections in the network grows quadratically with the number of blockchains. If there are 100 blockchains in the network and each needs to maintain an IBC connection with every other, that is 4950 connections. This quickly gets out of hand."

"To solve this, Cosmos proposes a modular architecture with two classes of blockchain: Hubs and Zones. Zones are regular heterogenous blockchains and Hubs are blockchains specifically designed to connect Zones together. When a Zone creates an IBC connection with a Hub, it can automatically access (i.e. send to and receive from) every other Zone that is connected to it. As a result, each Zone only needs to establish a limited number of connections with a restricted set of Hubs. Hubs also prevent double spending among Zones. This means that when a Zone receives a token from a Hub, it only needs to trust the origin Zone of this token and the Hub." -->

### Peg-Zone

Although the IBC protocol does not support communication between a Cosmos-based blockchain that has "instant finality" and another blockchain that has "probabilistic finality", communication between the two blockchains is still possible using a third blockchain that acts as an intermediary or "bridge". In the Cosmos ecosystem, this intermediary blockchain is called a "Peg-Zone".

A Peg-Zone tracks the state of the blockchain that has "probabilistic finality". The Peg-Zone has "fast finality", which makes it compatible with the IBC protocol. The Peg-Zone needs to decide on a finality threshold for the blockchain with "probabilistic finality" in order to achieve "fast finality".

Tokens are sent to a smart contract deployed on the blockchain that has "probabilistic finality". The contract locks the assets and then, once the finality threshold is reached, the vouchers for the locked assets are created on the Peg-Zone, which can then be represented as vouchers on the Cosmos-based blockchain. Each Peg-Zone must be customized for the non-Tendermint blockchain.

### Gravity Bridge

[Gravity Bridge](https://github.com/cosmos/gravity-bridge) is a blockchain bridge between the Cosmos ecosystem and the Ethereum blockchain that supports the transfer of ERC20 tokens originating on Ethereum to a Cosmos-based blockchain and then back to Ethereum. The ability to transfer the equivelant of an ERC20 token originating on a Cosmos-based blockchain to an ERC20 token on Ethereum is currently in development.

<!-- *How are assets exchanged using Gravity Bridge?* -->

<!-- "Backed by billions of dollars of ATOM staked on the Cosmos Hub, the Gravity Bridge will be the most secure, efficient, and decentralized cross chain bridge to Ethereum. It will enable Cosmos assets to flow into the Ethereum ecosystem as ERC-20 tokens and, conversely, native ERC-20 tokens to flow in the Cosmos ecosystem." -->

<!-- *How might Gravity Bridge be extended to support the purchasing of "eco credits"?* -->

#### References

- [https://docs.regen.network/](https://docs.regen.network/)
- [https://ibcprotocol.org/](https://ibcprotocol.org/)
- [https://v1.cosmos.network/intro](https://v1.cosmos.network/intro)
- [https://github.com/cosmos/gravity-bridge](https://github.com/cosmos/gravity-bridge)
