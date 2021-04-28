# Introduction

The [Green NFT Hackathon](https://gitcoin.co/hackathon/green-nft/onboard) was created to incentivize the development of open source solutions focused on reducing the carbon footprint of [NFTs](https://ethereum.org/en/nft/).

In parternship with [Regen Network](https://www.regen.network/), a project focused on building ecosystem services and credits, participants were also incentivized to research the integration of tokenized carbon credits that could be used to help offset the carbon footprint of NFTs (see [Regen Bounty](https://gitcoin.co/issue/GreenNFT/GreenNFTs/3/100025306)).

Without much prior knowledge of the Cosmos ecosystem, I decided to focus my initial research on developing a deeper understanding of the solutions being built to enable communication between blockchains and what it means to exchange assets between blockchains.

In addition, I created [examples](/development/testing/overview.html) for testing communication between Cosmos-based blockchains and I started writing the specification for a custom module that can be used to purchase tokenized carbon credits from other Cosmos-based blockchains (see [Ecodex Module](/research/green-nft/ecodex-module.html)).

The following is a brief summary of my initial research.

## Research Summary

:::warning please note
work in progess
:::

### Questions

How might tokenized carbon credits that are issued on the Regen Network blockchain be purchased on blockchains within the Cosmos ecosystem and on the Ethereum blockchain?

How might vouchers for tokenized carbon credits that are issued on the Regen Network be wrapped with NFTs on blockchains within the Cosmos ecosystem and on the Ethereum blockchain?

### Context

[Regen Network](https://www.regen.network/) is a project focused on building ecosystem services and credits using an application-specific blockchain. Regen Network's blockchain [`regen-ledger`](https://github.com/regen-network/regen-ledger) is built with the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk), which enables it to easily communicate with other blockchains in the Cosmos ecosystem.

Within the Cosmos ecosystem, blockchains are able to communicate with each other using a protocol called Inter-Blockchain Communication (or [IBC](https://ibcprotocol.org/)), which was recently implemented as a module in the Cosmos SDK and included as a new feature in the latest release.

Regen Network just launched their mainnet version of `regen-ledger`, which means `regen-ledger` will be able to communicate with other Cosmos-based blockchains once their community stakeholders have decided to enable the `ibc` module through an on-chain governance process.

Regen Network is developing a custom `ecocredit` module within `regen-ledger` that will allow for tokenized carbon credits to exist as assets on the blockchain. The credits are fractional NFTs linked to verifiable data that is directly related to positive ecological health.

Anyone looking to offset their carbon footprint will soon be able to purchase tokenized carbon credits that are being issued on the `regen-ledger` blockchain and, in combination with the `ibc` module, it should be possible to purchase and exchange those credits between blockchains.

<!-- ### Proof-of-Stake

"99% lower carbon footprint"

"Cosmos blockchains use an efficient Proof-of-Stake (PoS) consensus algorithm for securing the network. This PoS algorithm reduces the Cosmos carbon footprint by more than 99% compared to Proof-of-Work blockchains like Bitcoin that has a carbon footprint roughly the size of Switzerland." -->

### IBC Protocol

The [IBC protocol](https://ibcprotocol.org/) is described as "a reliable and secure inter-module communication protocol, where modules are deterministic processes that run on independent machines".

The IBC protocol was recently implemented as a module within the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk) and included as a new feature in the latest [Stargate](https://stargate.cosmos.network/) release. This initial implementation of the IBC protocol supports communication between Cosmos-based blockchains (blockchains built with the Cosmos SDK), or more specifically, communication between modules within Cosmos-based blockchains.

The IBC protocol can be implemented to support communication between any two blockchains that have "settlement finality". Cosmos-based blockchains are built on top of [Tendermint Core](https://github.com/tendermint/tendermint), which implements a Proof-of-Stake consensus algorithm that has "instant finality", and therefore a form of "settlement finality". This means there is a guarantee that a block of transactions will not be revoked once the block has been committed to the blockchain. In other words, the blockchain will not fork and the committed block is "final". This is not the case with current blockchains that implement a Proof-of-Work consensus algorithm; current blockchains that implement a Proof-of-Work consensus algorithm have "probabilistic finality", which means there is no guarantee that the block is "final".

If a blockhain's consensus algorithm has "fast finality", such as the proposed consensus algorithm for the next version of Ethereum (Ethereum 2.0), the IBC protocol can be adapted, but if a blockchain's consensus algorithm has "probabilistic finality", such as the consensus algorithm for Bitcoin and the current version of Ethereum (Ethereum 1.0), it is not possible to use the IBC protocol as a standalone solution but communication is still possible using a [Peg-Zone](#peg-zone) or a "bridge".

#### How does it work?

When two blockchains communicate using the IBC protocol, each blockchain runs a light client for the other blockchain. This allows each blockchain to track the block headers of the other blockchain. This is necessary because each blockchain will have a different validator set and each blockchain will need to verify proofs about the state of the other blockchain. For more information about the light clients and how they validate consensus state using block headers, see [Client Semantics](https://github.com/cosmos/ibc/tree/master/spec/core/ics-002-client-semantics).

The IBC protocol uses a packet relay model. The two blockchains do not directly communicate with each other over the network. Communication between the two blockchains happens through packets that are relayed using external relayer processes. The external relayer processes monitor the state of each blockchain for updates to paths that are reserved for packets specific to the IBC protocol. When the path is updated, the external relayer process then relays the packet to the other blockchain. For more information on external relayer processes, see [Relayer Algorithm](https://github.com/cosmos/ibc/tree/master/spec/relayer/ics-018-relayer-algorithms).

The relayed packets include information about where the packet is being sent and what action to take once the packet has been received. The information about where the packet is being sent is composed of channels and ports. Each channel is associated with a connection and each connection can have any number of channels. The port is the destination module. The packet instructs the receiving blockchain on what action to take but the logic itself is defined within the module receiving the packet. For more information on channels and packets, see [Channel and Packet Semantics](https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics).

An initial handshake between the two blockchains must take place before packets that are specific to the application can be relayed. This initial handshake allows the two blockchains to authenticate each other, ensure that they are using the correct identifiers, and then prepare to send and receive packets safely. The packets exchanged in the handshake include information and proofs about the state of the other blockchain that are then confirmed using the light client. The handshake is defined in four steps: ConnOpenInit, ConnOpenTry, ConnOpenAck, and ConnOpenConfirm.

In the case of transferring assets, the assets being transferred are locked on the original blockchain and a proof is created and communicated to the other blockchain proving that those assets are locked (or "bonded"). This proof is verified using the block headers that are being tracked by the light client. If the proof is valid, vouchers for the locked assets are created on the other blockchain. See [Fungible Token Transfer](https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer) for more information.

It is important to note that the vouchers are not the original assets. The vouchers only represent the original assets on the original blockchain; the vouchers are new assets that are created with the proof that there are locked assets on the original blockchain. The vouchers can also be exchanged (returned) for the original assets, in which case the proof is proving that the vouchers have been retired and are no longer valid, allowing for the original assets on the original blockchain to be unlocked.

<!-- #### What about tokenized carbon credits?

... -->

### Peg-Zone

<!-- "One idea is to connect each blockchain in the network with every other via direct IBC connections. The main problem with this approach is that the number of connections in the network grows quadratically with the number of blockchains. If there are 100 blockchains in the network and each needs to maintain an IBC connection with every other, that is 4950 connections. This quickly gets out of hand."

"To solve this, Cosmos proposes a modular architecture with two classes of blockchain: Hubs and Zones. Zones are regular heterogenous blockchains and Hubs are blockchains specifically designed to connect Zones together. When a Zone creates an IBC connection with a Hub, it can automatically access (i.e. send to and receive from) every other Zone that is connected to it. As a result, each Zone only needs to establish a limited number of connections with a restricted set of Hubs. Hubs also prevent double spending among Zones. This means that when a Zone receives a token from a Hub, it only needs to trust the origin Zone of this token and the Hub." -->

Although the IBC protocol does not support communication between a blockchain that has "instant finality", such as a Cosmos-based blockchain, and a blockchain that has "probabilistic finality", such as the current version of Ethereum, communication between the two blockchains is still possible using a third blockchain that acts as an intermediary blockchain called a "Peg-Zone".

The Peg-Zone needs to decide on a finality threshold for the blockchain with "probabilistic finality" in order to have "fast finality". This means the Peg-Zone decides on a number of blocks commited to the blockchain that are guaranteed to stay commited. The transactions within the blocks that are within the finality threshold are guaranteed (by the Peg-Zone) not to change or to be revoked. The finality threshold acts as a "pseudo-finality" for the blockchain with "probabilistic finality".

In the case of transferring assets from the current version of Ethereum, the assets are first sent to a smart contract and the smart contract locks the assets. The Peg-Zone tracks the events of the smart contract and waits for the finality threshold to be reached before communicating with the Cosmos-based blockchain using the IBC protocol. The vouchers for the locked assets are created on the Peg-Zone [and then again on the Cosmos-based blockchain?].

The Peg-Zone design is not limited to communication with the current version of Ethereum but it might be more challenging to implement without an account-based blockchain that supports smart contracts. The first implementation of the Peg-Zone design was called "Peggy" but the project has since changed their name to "Gravity Bridge" and expanded upon the design.

<!-- #### How does it work?

... -->

<!-- Components: 1. Ethereum Smart Contracts: There will be a set of Ethereum smart contracts acting as asset custodians, capable of taking custody of Ethereum native tokens and issuing Cosmos native tokens. 2. Witness: The witness component attests witness to events in Ethereum. It waits for 100 blocks, the finality threshold, and implements this pseudo-finality over the non-finality chain. It runs a fully validating Ethereum node in order to attest to state changes within Ethereum by submitting a WitnessTX to the peg zone. We use a shared security model here by taking the set of Cosmos Hub validators also to be peg zone Witnesses. 3. Peg zone: The peg zone is a translator blockchain, built on Tendermint, that allows users to perform and query transactions. This is how Cosmos communicates with Ethereum. 4. Signer: The signer signs messages using the secp256k1 signature scheme which Ethereum understands to make signatures efficiently verifiable by smart contracts. The signer component generates secp256k1 signatures via the SignTx message and posts it to the peg zone for relaying transactions for validation in the smart contract down the pipeline. 5. Relayer: The relayer component relays a batched list (array) of transactions—signed by the Signer component—and posts them to the Ethereum smart contract. -->

<!-- For example...
"You start at the Cosmos Hub. You move Photons via IBC to the peg zone. The peg zone receives an incoming IBC packet: a message containing a transaction for sending Photons. Signers monitoring the peg zone then sign those IBC transactions, effectively converting the signature scheme to Ethereum-understandable private keys, in secp256k1 format. Your transaction has just been signed on the peg zone.
 Relayers watching the peg zone are waiting until they see that +2/3 signers have signed the transaction before batching your signed transaction into a list of all the other transactions sent through IBC. They then relay the signature-appended list to the EVM where the Ethereum smart contract lives.
 The Ethereum smart contract now checks that the list of transactions are valid. For your Photons, the smart contract needs to generate an ERC20 version of it. After the smart contract generates ERC20 Photons, it then sends the ERC20 Photons to your destination address in Ethereum.
 At this point, converting your ERC20 Photons to ETH is as simple as using an ERC20 decentralized exchange (DEX) like the 0x protocol or OmiseGO." -->

<!-- "Regarding security. The Signer component will be the same shared set of Cosmos Validators securing the Cosmos Hub, so what we have is an accountable peg zone with the same safety guarantees as the hub itself. For a double spend attack to occur while a transaction is in flight between the Ethereum main chain and the peg zone, there must be >2/3 of the voting power taken from hostile validators. Regarding reorgs on the Ethereum main chain. In the event that a reorg occurs on the Ethereum chain past the finality threshold on the peg zone, we defer to governance for recovery." -->

 <!-- https://blog.cosmos.network/the-internet-of-blockchains-how-cosmos-does-interoperability-starting-with-the-ethereum-peg-zone-8744d4d2bc3f -->

### Gravity Bridge

[Gravity Bridge](https://github.com/cosmos/gravity-bridge) is a blockchain bridge between the Cosmos ecosystem and the Ethereum blockchain that supports the transfer of ERC20 tokens originating on Ethereum to a Cosmos-based blockchain and then back to Ethereum. The ability to transfer the equivelant of an ERC20 token originating on a Cosmos-based blockchain to an ERC20 token on Ethereum is currently in development.

<!-- The initial version of Gravity Bridge is designed for the Cosmos Hub and will soon be launched as an incentivized testnet... -->

<!-- #### How does it work?

... -->

<!-- #### What about tokenized carbon credits?

... -->

### References

- [https://docs.regen.network/](https://docs.regen.network/)
- [https://ibcprotocol.org/](https://ibcprotocol.org/)
- [https://v1.cosmos.network/intro](https://v1.cosmos.network/intro)
- [https://docs.cosmos.network/v0.42/ibc/](https://docs.cosmos.network/v0.42/ibc/)
- [https://github.com/cosmos/ibc/tree/master/spec](https://github.com/cosmos/ibc/tree/master/spec)
- [https://blog.cosmos.network/the-internet-of-blockchains-how-cosmos-does-interoperability-starting-with-the-ethereum-peg-zone-8744d4d2bc3f](https://blog.cosmos.network/the-internet-of-blockchains-how-cosmos-does-interoperability-starting-with-the-ethereum-peg-zone-8744d4d2bc3f)
- [https://blog.althea.net/gravity-bridge/](https://blog.althea.net/gravity-bridge/)
- [https://blog.althea.net/how-gravity-works/](https://blog.althea.net/how-gravity-works/)
- [https://github.com/cosmos/gravity-bridge](https://github.com/cosmos/gravity-bridge)
