# Overview

In order to demonstrate communication between blockchains, we will first test the communication between two instances of `chora-chain`, and then between `chora-chain` and `regen-ledger`, both making use of the `ibc` module built with the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk).

Once we have demonstrated communication between blockchains, we will be testing the minting and exchanging of "eco credits" using the `ecocredit` module within `regen-ledger`.

## Prerequisites

In order to run blockchain clients built with the Cosmos SDK, you will need the following:

- [Go >= 1.15](https://golang.org/doc/install)

<!-- In order to run the `relayer` service, you will need the following:

- [Starport >= 0.15](https://github.com/tendermint/starport) -->

## Installation

Open your terminal and change to a working directory.

### Install Chora

From your working directory, clone the remote repository for [chora-chain](https://github.com/choraio/chora-chain).

```sh
git clone https://github.com/choraio/chora-chain
```

After you have cloned the remote repository, change to the local directory.

```sh
cd chora-chain
```

Within the local repository, run the following command to install the `chorad` binary.

```sh
make install
```

Now that the `chorad` binary is installed, you are ready to start and run `chora-chain`.

### Install Regen

From your working directory, clone the remote repository for [regen-ledger](https://github.com/regen-network/regen-ledger).

```sh
git clone https://github.com/regen-network/regen-ledger
```

After you have cloned the remote repository, change to the local directory.

```sh
cd regen-ledger
```

Within the local repository, switch to the latest release version (`v1.0.0-rc0`).

```sh
git checkout v1.0.0-rc0
```

After switching versions, run the following command to install the `regen` binary.

```sh
make install
```

Now that the `regen` binary is installed, you are ready to start and run `regen-ledger`.

### Install Relayer

From your working directory, clone the remote repository for [relayer](https://github.com/cosmos/relayer).

```sh
git clone https://github.com/cosmos/relayer
```

After you have cloned the remote repository, change to the local directory.

```sh
cd relayer
```

Within the local repository, switch to the latest release version (`v0.9.2`).

```sh
git checkout v0.9.2
```

After switching versions, run the following command to install the `rly` binary.

```sh
make install
```

Now that the `rly` binary is installed, you are ready to start and run the `relayer`.
