# Chora <-> Regen

In this section, you will testing the `ibc` module using `chora-chain` and `regen-ledger`.

## Run Chora Chain

Using the `chorad` binary, you will need to initialize the node.

```sh
chorad init chora-node --chain-id chora
```

Once the node has been initialized, you will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=chora-validator

chorad keys add $KEY_NAME

MY_VALIDATOR_ADDRESS=$(chorad keys show $KEY_NAME -a)
```

Now that you have generated a validator keypair, you will need to add the public address to the genesis file along with an initial amount of stake.

```sh
chorad add-genesis-account $MY_VALIDATOR_ADDRESS 100000000stake
```

Then you will need to create the genesis transaction.

```sh
chorad gentx $KEY_NAME 1000000stake --chain-id chora
```

Once you have created the genesis transaction, you will need to write it to the genesis file.

```sh
chorad collect-gentxs
```

Now you are ready to start and run a local node and singleton chain using `chora-chain`.

```sh
chorad start
```

## Run Regen Chain

First, you will need to clone the remote repository for [regen-ledger](https://github.com/regen-network/regen-ledger).

```sh
git clone https://github.com/regen-network/regen-ledger
```

After you have cloned the remote repository, you will need to change into the local directory.

```sh
cd regen-ledger
```

Within the local repository, you will need to switch to the latest release candidate (`v1.0.0-rc0`).

```sh
git checkout v1.0.0-rc0
```

Once you have switched to the latest release candidate, you will need to install the `regen` binary.

```sh
make install
```

Using the `regen` binary, you will need to initialize the node.

```sh
regen init regen-node --chain-id regen
```

Once the node has been initialized, you will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=regen-validator

regen keys add $KEY_NAME

MY_VALIDATOR_ADDRESS=$(regen keys show $KEY_NAME -a)
```

Now that you have generated a validator keypair, you will need to add the public address to the genesis file along with an initial amount of stake.

```sh
regen add-genesis-account $MY_VALIDATOR_ADDRESS 100000000stake
```

Then you will need to create the genesis transaction.

```sh
regen gentx $KEY_NAME 1000000stake --chain-id regen
```

Once you have created the genesis transaction, you will need to write it to the genesis file.

```sh
regen collect-gentxs
```

Now you are ready to start and run a local node and singleton chain using `regen-ledger`. For this node, you will need to change the default ports using the appropriate flags.

```sh
regen start --grpc.address 0.0.0.0:9191 --p2p.laddr tcp://127.0.0.1:26658 --rpc.laddr tcp://127.0.0.1:26659 --rpc.pprof_laddr 127.0.0.1:6161
```

## Run Chain Relayer

...