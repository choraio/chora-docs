# Installation

## Prerequisites

In order to run blockchain clients built with the Cosmos SDK, you will need the following:

- [Go >= 1.15](https://golang.org/doc/install)
- [Starport >= 0.15](https://github.com/tendermint/starport)

## Install Chora

From a working directory, clone the remote repository for [chora-chain](https://github.com/choraio/chora-chain).

```sh
git clone https://github.com/choraio/chora-chain
```

After you have cloned the remote repository, change to the local directory.

```sh
cd chora-chain
```

From the local directory, run the following command to install the `chorad` binary.

```sh
make install
```

Now that the `chorad` binary is installed, you are ready to start and run `chora-chain`.

## Install Regen

From a working directory, clone the remote repository for [regen-ledger](https://github.com/regen-network/regen-ledger).

```sh
git clone https://github.com/regen-network/regen-ledger
```

After you have cloned the remote repository, change to the local directory.

```sh
cd regen-ledger
```

From the local directory, switch to the latest release version (`v1.0.0`).

```sh
git checkout v1.0.0
```

After switching versions, run the following command to install the `regen` binary. *Note the use of the `EXPERIMENTAL=true` option here, which enables the custom modules built within `regen-ledger`.*

```sh
EXPERIMENTAL=true make install
```

Now that the `regen` binary is installed, you are ready to start and run `regen-ledger`.

## Install Relayer

From a working directory, clone the remote repository for [relayer](https://github.com/cosmos/relayer).

```sh
git clone https://github.com/cosmos/relayer
```

After you have cloned the remote repository, change to the local directory.

```sh
cd relayer
```

From the local directory, switch to the latest release version (`v0.9.2`).

```sh
git checkout v0.9.2
```

After switching versions, run the following command to install the `rly` binary.

```sh
make install
```

Now that the `rly` binary is installed, you are ready to start and run `relayer`.
