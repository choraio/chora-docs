# Overview

In this section, you will be testing communication between `chora-chain` and `regen-ledger` using the `ibc` module *(and then minting and exchanging eco credits using the `ecocredit` module?)*.

## Prerequisites

In order to run blockchain clients built with the Cosmos SDK, you will need the following:

- [Go >= 1.15](https://golang.org/doc/install)

In order to run the `relayer` service, you will need the following:

- [Starport >= 0.15](https://github.com/tendermint/starport)

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

Now that the `chorad` binary is installed, change back to your working directory.

```sh
cd ../../
```

### Install Regen

From your working directory, clone the remote repository for [regen-ledger](https://github.com/regen-network/regen-ledger).

```sh
git clone https://github.com/regen-network/regen-ledger
```

After you have cloned the remote repository, change to the local directory.

```sh
cd regen-ledger
```

Within the local repository, switch to the latest release candidate (`v1.0.0-rc0`).

```sh
git checkout v1.0.0-rc0
```

After switching versions, run the following command to install the `regen` binary.

```sh
make install
```

Now that you have the binaries installed for running `chora-chain` and `regen-ledger` (`chorad` and `regen` respectively), you are ready to begin testing the `ibc` module.