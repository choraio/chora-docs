# Overview

The current focus of the project is research and development for the [Green NFT Hackathon](https://gitcoin.co/hackathon/green-nft/onboard).

In response to concerns around the carbon footprint of minting and exchanging NFTs on the current Proof-of-Work version of Ethereum, conscientious artists and platforms are looking for ways to offset their carbon footprint or to make use of infrastructure that is more energy efficient.

Within the Ethereum ecosystem, there are several scaling solutions currently being implemented and there are plans to switch Ethereum to a Proof-of-Stake consensus mechanism. Although significantly less energy will be consumed with such improvements, there will always be an energy cost.

## Regen Network

[Regen Network](https://www.regen.network/) is a project focused on building ecosystem services and credits using an application specific blockchain. Regen Network's blockchain [`regen-ledger`](https://github.com/regen-network/regen-ledger) is built with the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) and will be a Cosmos zone within the Cosmos ecosystem.

Within the Cosmos ecosystem, blockchains are able to communicate with each other using a protocol known as "inter-blockchain communication protocol" (or [IBC](https://ibcprotocol.org/)), which has recently been added as a module within the Cosmos SDK. Regen Network recently launched their mainnet version of `regen-ledger` with the `ibc` module implemented, which means other Cosmos-based blockchains with the `ibc` module enabled will soon be able to communicate with `regen-ledger` once the `ibc` module has been enabled as part of an upgrade through an on-chain governance process.

Regen Network is developing a custom `ecocredit` module within `regen-ledger` that will link "eco credits" to verifiable data directly related to ecological health. Anyone looking to offset their carbon footprint will be able to purchase "eco credits" on the `regen-ledger` blockchain and, in combination with the `ibc` module, anyone could potentially purchase "eco credits" (or more specifically vouchers for locked "eco credits") from `regen-ledger` through other Cosmos-based blockchains.

---

*Note: Like the `ibc` module, the `ecocredit` module will not be enabled at the time of launch but rather it will be enabled as part of an upgrade through an on-chain governance process.*

---

## Gravity Bridge

What about the purchasing of "eco credits" from Ethereum?

[Gravity Bridge](https://github.com/cosmos/gravity-bridge) is a blockchain bridge between the Cosmos ecosystem and the Ethereum blockchain that supports the transfer of ERC20 tokens originating on Ethereum to a Cosmos-based blockchain and then back to Ethereum. The ability to transfer the equivelant of an ERC20 token originating on a Cosmos-based blockchain to an ERC20 token on Ethereum is currently in development.

How might Gravity Bridge be extended to support the purchasing of "eco credits"?

## Chora Chain

In order to better understand communication between blockchains within the Cosmos ecosytem, we are currently experimenting with our own application specific blockchain called `chora-chain`, which is also being built with the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk).

We are currently working on a proof-of-concept for a custom `ecodex` module that will allow for the purchasing of "eco credits" (or more specifically vouchers for locked "eco credits") minted on `regen-ledger` from other Cosmos-based blockchains.

Please see [development](/development) for more information.
