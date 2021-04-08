# IBC Test 3

In this section, you will testing the `ibc` module using `chora-chain` and `regen-ledger`. At the moment, `regen-ledger` is not set up to be used with `starport`, which means we will need to do a setup like we did in the previous test ("IBC Test 2").

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
chorad add-genesis-account $MY_VALIDATOR_ADDRESS 1000000stake
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
regen add-genesis-account $MY_VALIDATOR_ADDRESS 1000000stake
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

## Testing IBC

...
