# Overview

The current focus of the project is research and development for the [Green NFT Hackathon](https://gitcoin.co/hackathon/green-nft/onboard).

In response to concerns around the carbon footprint of minting and exchanging NFTs on the current Proof-of-Work version of Ethereum, conscientious artists and platforms are looking for ways to offset their carbon footprint or make use of infrastructure that is more energy efficient.

Within the Ethereum ecosystem, there are scaling solutions that will reduce the energy cost as well as plans to switch Ethereum to a Proof-of-Stake consensus mechanism, which means partial solutions are already underway. Although significantly less energy will be consumed with such improvements, there will still always be an energy cost, which is where the purchasing of "eco credits" comes in.

## Regen Network

[Regen Network](https://www.regen.network/) is a project focused on building ecosystem services and credits using an application specific blockchain. Regen Network's blockchain [`regen-ledger`](https://github.com/regen-network/regen-ledger) is built with [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) and will be a Cosmos zone within the Cosmos ecosystem.

Within the Cosmos ecosystem, blockchains are able to communicate with each other using a protocol known as "interblockchain communication protocol" or [IBC](https://github.com/cosmos/ibc-go), which is defined as a module within the Cosmos SDK. Regen Network will be launching their mainnet version of `regen-ledger` mid-April with the `ibc` module enabled, which means other blockchains with the `ibc` module enabled will be able to communicate with Regen Network to integrate and purchase "eco credits".

---

*Note: The `ecocredit` module will not be enabled by default but rather it will be enabled as part of an upgrade through an on-chain governance process.*

---

## Gravity Bridge

What about the purchase of "eco credits" from outside the Cosmos ecosystem?

[Gravity Bridge](https://github.com/cosmos/gravity-bridge) is a blockchain bridge between the Cosmos ecosystem and Ethereum that currently supports the transfer of ERC20 assets originating on Ethereum to a Cosmos-based blockchain and back to Ethereum. The ability to transfer the equivelant of an ERC20 asset originating on a Cosmos-based blockchain to an ERC20 representation on Ethereum is currently in development.

...

## Chora Chain

In order to better understand communication between blockchains within the Cosmos ecosytem, we will be experimenting with our own application specific blockchain called `chora-chain`, which is also built with the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk). See [development](/development) for more information.

...
