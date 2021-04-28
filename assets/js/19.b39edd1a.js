(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{375:function(e,t,o){"use strict";o.r(t);var n=o(45),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://gitcoin.co/hackathon/green-nft/onboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Green NFT Hackathon"),o("OutboundLink")],1),e._v(" was created to incentivize the development of open source solutions focused on reducing the carbon footprint of "),o("a",{attrs:{href:"https://ethereum.org/en/nft/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NFTs"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("In parternship with "),o("a",{attrs:{href:"https://www.regen.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regen Network"),o("OutboundLink")],1),e._v(", a project focused on building ecosystem services and credits, participants were also incentivized to research the integration of tokenized carbon credits that could be used to help offset the carbon footprint of NFTs (see "),o("a",{attrs:{href:"https://gitcoin.co/issue/GreenNFT/GreenNFTs/3/100025306",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regen Bounty"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("p",[e._v("Without much prior knowledge of the Cosmos ecosystem, I decided to focus my initial research on developing a deeper understanding of the solutions being built to enable communication between blockchains and what it means to exchange assets between blockchains.")]),e._v(" "),o("p",[e._v("In addition, I created "),o("RouterLink",{attrs:{to:"/development/testing/overview.html"}},[e._v("examples")]),e._v(" for testing communication between Cosmos-based blockchains and I started writing the specification for a custom module that can be used to purchase tokenized carbon credits from other Cosmos-based blockchains (see "),o("RouterLink",{attrs:{to:"/research/green-nft/ecodex-module.html"}},[e._v("Ecodex Module")]),e._v(").")],1),e._v(" "),o("p",[e._v("The following is a brief summary of my initial research.")]),e._v(" "),o("h2",{attrs:{id:"research-summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#research-summary"}},[e._v("#")]),e._v(" Research Summary")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("please note")]),e._v(" "),o("p",[e._v("work in progess")])]),e._v(" "),o("h3",{attrs:{id:"questions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[e._v("#")]),e._v(" Questions")]),e._v(" "),o("p",[e._v("How might tokenized carbon credits that are issued on the Regen Network blockchain be purchased on blockchains within the Cosmos ecosystem and on the Ethereum blockchain?")]),e._v(" "),o("p",[e._v("How might vouchers for tokenized carbon credits that are issued on the Regen Network be wrapped with NFTs on blockchains within the Cosmos ecosystem and on the Ethereum blockchain?")]),e._v(" "),o("h3",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.regen.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regen Network"),o("OutboundLink")],1),e._v(" is a project focused on building ecosystem services and credits using an application-specific blockchain. Regen Network's blockchain "),o("a",{attrs:{href:"https://github.com/regen-network/regen-ledger",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("regen-ledger")]),o("OutboundLink")],1),e._v(" is built with the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),o("OutboundLink")],1),e._v(", which enables it to easily communicate with other blockchains in the Cosmos ecosystem.")]),e._v(" "),o("p",[e._v("Within the Cosmos ecosystem, blockchains are able to communicate with each other using a protocol called Inter-Blockchain Communication (or "),o("a",{attrs:{href:"https://ibcprotocol.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC"),o("OutboundLink")],1),e._v("), which was recently implemented as a module in the Cosmos SDK and included as a new feature in the latest release.")]),e._v(" "),o("p",[e._v("Regen Network just launched their mainnet version of "),o("code",[e._v("regen-ledger")]),e._v(", which means "),o("code",[e._v("regen-ledger")]),e._v(" will be able to communicate with other Cosmos-based blockchains once their community stakeholders have decided to enable the "),o("code",[e._v("ibc")]),e._v(" module through an on-chain governance process.")]),e._v(" "),o("p",[e._v("Regen Network is developing a custom "),o("code",[e._v("ecocredit")]),e._v(" module within "),o("code",[e._v("regen-ledger")]),e._v(" that will allow for tokenized carbon credits to exist as assets on the blockchain. The credits are fractional NFTs linked to verifiable data that is directly related to positive ecological health.")]),e._v(" "),o("p",[e._v("Anyone looking to offset their carbon footprint will soon be able to purchase tokenized carbon credits that are being issued on the "),o("code",[e._v("regen-ledger")]),e._v(" blockchain and, in combination with the "),o("code",[e._v("ibc")]),e._v(" module, it should be possible to purchase and exchange those credits between blockchains.")]),e._v(" "),o("h3",{attrs:{id:"ibc-protocol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibc-protocol"}},[e._v("#")]),e._v(" IBC Protocol")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://ibcprotocol.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC protocol"),o("OutboundLink")],1),e._v(' is described as "a reliable and secure inter-module communication protocol, where modules are deterministic processes that run on independent machines".')]),e._v(" "),o("p",[e._v("The IBC protocol was recently implemented as a module within the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),o("OutboundLink")],1),e._v(" and included as a new feature in the latest "),o("a",{attrs:{href:"https://stargate.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stargate"),o("OutboundLink")],1),e._v(" release. This initial implementation of the IBC protocol supports communication between Cosmos-based blockchains (blockchains built with the Cosmos SDK), or more specifically, communication between modules within Cosmos-based blockchains.")]),e._v(" "),o("p",[e._v('The IBC protocol can be implemented to support communication between any two blockchains that have "settlement finality". Cosmos-based blockchains are built on top of '),o("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Core"),o("OutboundLink")],1),e._v(', which implements a Proof-of-Stake consensus algorithm that has "instant finality", and therefore a form of "settlement finality". This means there is a guarantee that a block of transactions will not be revoked once the block has been committed to the blockchain. In other words, the blockchain will not fork and the committed block is "final". This is not the case with current blockchains that implement a Proof-of-Work consensus algorithm; current blockchains that implement a Proof-of-Work consensus algorithm have "probabilistic finality", which means there is no guarantee that the block is "final".')]),e._v(" "),o("p",[e._v('If a blockhain\'s consensus algorithm has "fast finality", such as the proposed consensus algorithm for the next version of Ethereum (Ethereum 2.0), the IBC protocol can be adapted, but if a blockchain\'s consensus algorithm has "probabilistic finality", such as the consensus algorithm for Bitcoin and the current version of Ethereum (Ethereum 1.0), it is not possible to use the IBC protocol as a standalone solution but communication is still possible using a '),o("a",{attrs:{href:"#peg-zone"}},[e._v("Peg-Zone")]),e._v(' or a "bridge".')]),e._v(" "),o("h4",{attrs:{id:"how-does-it-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work"}},[e._v("#")]),e._v(" How does it work?")]),e._v(" "),o("p",[e._v("When two blockchains communicate using the IBC protocol, each blockchain runs a light client for the other blockchain. This allows each blockchain to track the block headers of the other blockchain. This is necessary because each blockchain will have a different validator set and each blockchain will need to verify proofs about the state of the other blockchain. For more information about the light clients and how they validate consensus state using block headers, see "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-002-client-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("Client Semantics"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The IBC protocol uses a packet relay model. The two blockchains do not directly communicate with each other over the network. Communication between the two blockchains happens through packets that are relayed using external relayer processes. The external relayer processes monitor the state of each blockchain for updates to paths that are reserved for packets specific to the IBC protocol. When the path is updated, the external relayer process then relays the packet to the other blockchain. For more information on external relayer processes, see "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/relayer/ics-018-relayer-algorithms",target:"_blank",rel:"noopener noreferrer"}},[e._v("Relayer Algorithm"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The relayed packets include information about where the packet is being sent and what action to take once the packet has been received. The information about where the packet is being sent is composed of channels and ports. Each channel is associated with a connection and each connection can have any number of channels. The port is the destination module. The packet instructs the receiving blockchain on what action to take but the logic itself is defined within the module receiving the packet. For more information on channels and packets, see "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("Channel and Packet Semantics"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("An initial handshake between the two blockchains must take place before packets that are specific to the application can be relayed. This initial handshake allows the two blockchains to authenticate each other, ensure that they are using the correct identifiers, and then prepare to send and receive packets safely. The packets exchanged in the handshake include information and proofs about the state of the other blockchain that are then confirmed using the light client. The handshake is defined in four steps: ConnOpenInit, ConnOpenTry, ConnOpenAck, and ConnOpenConfirm.")]),e._v(" "),o("p",[e._v('In the case of transferring assets, the assets being transferred are locked on the original blockchain and a proof is created and communicated to the other blockchain proving that those assets are locked (or "bonded"). This proof is verified using the block headers that are being tracked by the light client. If the proof is valid, vouchers for the locked assets are created on the other blockchain. See '),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fungible Token Transfer"),o("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),o("p",[e._v("It is important to note that the vouchers are not the original assets. The vouchers only represent the original assets on the original blockchain; the vouchers are new assets that are created with the proof that there are locked assets on the original blockchain. The vouchers can also be exchanged (returned) for the original assets, in which case the proof is proving that the vouchers have been retired and are no longer valid, allowing for the original assets on the original blockchain to be unlocked.")]),e._v(" "),o("h3",{attrs:{id:"peg-zone"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#peg-zone"}},[e._v("#")]),e._v(" Peg-Zone")]),e._v(" "),o("p",[e._v('Although the IBC protocol does not support communication between a blockchain that has "instant finality", such as a Cosmos-based blockchain, and a blockchain that has "probabilistic finality", such as the current version of Ethereum, communication between the two blockchains is still possible using a third blockchain that acts as an intermediary blockchain called a "Peg-Zone".')]),e._v(" "),o("p",[e._v('The Peg-Zone needs to decide on a finality threshold for the blockchain with "probabilistic finality" in order to have "fast finality". This means the Peg-Zone decides on a number of blocks commited to the blockchain that are guaranteed to stay commited. The transactions within the blocks that are within the finality threshold are guaranteed (by the Peg-Zone) not to change or to be revoked. The finality threshold acts as a "pseudo-finality" for the blockchain with "probabilistic finality".')]),e._v(" "),o("p",[e._v("In the case of transferring assets from the current version of Ethereum, the assets are first sent to a smart contract and the smart contract locks the assets. The Peg-Zone tracks the events of the smart contract and waits for the finality threshold to be reached before communicating with the Cosmos-based blockchain using the IBC protocol. The vouchers for the locked assets are created on the Peg-Zone [and then again on the Cosmos-based blockchain?].")]),e._v(" "),o("p",[e._v('The Peg-Zone design is not limited to communication with the current version of Ethereum but it might be more challenging to implement without an account-based blockchain that supports smart contracts. The first implementation of the Peg-Zone design was called "Peggy" but the project has since changed their name to "Gravity Bridge" and expanded upon the design.')]),e._v(" "),o("h3",{attrs:{id:"gravity-bridge"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gravity-bridge"}},[e._v("#")]),e._v(" Gravity Bridge")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/cosmos/gravity-bridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gravity Bridge"),o("OutboundLink")],1),e._v(" is a blockchain bridge between the Cosmos ecosystem and the Ethereum blockchain that supports the transfer of ERC20 tokens originating on Ethereum to a Cosmos-based blockchain and then back to Ethereum. The ability to transfer the equivelant of an ERC20 token originating on a Cosmos-based blockchain to an ERC20 token on Ethereum is currently in development.")]),e._v(" "),o("h3",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.regen.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.regen.network/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://ibcprotocol.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ibcprotocol.org/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://v1.cosmos.network/intro",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://v1.cosmos.network/intro"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.cosmos.network/v0.42/ibc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.cosmos.network/v0.42/ibc/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/cosmos/ibc/tree/master/spec"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://blog.cosmos.network/the-internet-of-blockchains-how-cosmos-does-interoperability-starting-with-the-ethereum-peg-zone-8744d4d2bc3f",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.cosmos.network/the-internet-of-blockchains-how-cosmos-does-interoperability-starting-with-the-ethereum-peg-zone-8744d4d2bc3f"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://blog.althea.net/gravity-bridge/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.althea.net/gravity-bridge/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://blog.althea.net/how-gravity-works/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.althea.net/how-gravity-works/"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/gravity-bridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/cosmos/gravity-bridge"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);