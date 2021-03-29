# Chora <-> Regen

In this section, we will be testing communication between `chora-chain` and `regen-ledger` using the `ibc` module and then minting and exchanging a token using the `ecocredit` module.

## Prerequisites

In order to run blockchain clients built with the Cosmos SDK, we will need the following:

- [Go >= 1.15](https://golang.org/doc/install)

<!-- In order to run the `chora-chain` client, we will need the following:

- [Starport >= 0.15](https://github.com/tendermint/starport) -->

## Run Chora Chain

First, we will need to clone the remote repository for [chora-chain](https://github.com/choraio/chora-chain).

```sh
git clone https://github.com/choraio/chora-chain
```

After we have cloned the remote repository, we will need to change into the local directory.

```sh
cd chora-chain
```

Once we are inside the local repository, we will need to install the `chora` binary.

```sh
make install
```

Using the `chorad` binary, we will need to initialize the node.

```sh
chorad init chora-node --chain-id chora-local
```

Once the node has been initialized, we will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=chora-validator

chorad keys add $KEY_NAME

MY_VALIDATOR_ADDRESS=$(chorad keys show $KEY_NAME -a)
```

Now that we have generated a validator keypair, we will need to add the public address to the genesis file along with an initial amount of stake.

```sh
chorad add-genesis-account $MY_VALIDATOR_ADDRESS 100000000stake
```

Then we will need to create the genesis transaction.

```sh
chorad gentx $KEY_NAME 1000000stake --chain-id chora-local
```

Once we have created the genesis transaction, we will need to write it to the genesis file.

```sh
chorad collect-gentxs
```

Now we are ready to start and run a local node and singleton chain using `chora-chain`.

```sh
chorad start
```

## Run Regen Ledger

First, we will need to clone the remote repository for [regen-ledger](https://github.com/regen-network/regen-ledger).

```sh
git clone https://github.com/regen-network/regen-ledger
```

After we have cloned the remote repository, we will need to change into the local directory.

```sh
cd regen-ledger
```

Within the local repository, we will need to switch to the latest release candidate (`v1.0.0-rc0`).

```sh
git checkout v1.0.0-rc0
```

Once we have switched to the latest release candidate, we will need to install the `regen` binary.

```sh
make install
```

Using the `regen` binary, we will need to initialize the node.

```sh
regen init regen-node --chain-id regen-local
```

Once the node has been initialized, we will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=regen-validator

regen keys add $KEY_NAME

MY_VALIDATOR_ADDRESS=$(regen keys show $KEY_NAME -a)
```

Now that we have generated a validator keypair, we will need to add the public address to the genesis file along with an initial amount of stake.

```sh
regen add-genesis-account $MY_VALIDATOR_ADDRESS 100000000stake
```

Then we will need to create the genesis transaction.

```sh
regen gentx $KEY_NAME 1000000stake --chain-id regen-local
```

Once we have created the genesis transaction, we will need to write it to the genesis file.

```sh
regen collect-gentxs
```

Now we are ready to start and run a local node and singleton chain using `regen-ledger`. For this node, we will need to change the default ports using the appropriate flags.

```sh
regen start --grpc.address 0.0.0.0:9191 --p2p.laddr tcp://127.0.0.1:26658 --rpc.laddr tcp://127.0.0.1:26659 --rpc.pprof_laddr 127.0.0.1:6161
```