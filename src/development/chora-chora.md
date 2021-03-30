# Chora <-> Chora

In this section, you will testing the `ibc` module using two instances of `chora-chain`.

## Run First Chain

Using the `chorad` binary, you will need to initialize the node for the first chain (`chora-1`).

```sh
chorad init node-1 --home .chora-1 --chain-id chora-1
```

Once the node has been initialized, you will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=chora-1-validator

chorad keys add $KEY_NAME --home .chora-1

MY_VALIDATOR_ADDRESS=$(chorad keys show $KEY_NAME --home .chora-1 -a)
```

Now that you have generated a validator key, you will need to add the public address to the genesis file along with an initial amount of stake.

```sh
chorad add-genesis-account $MY_VALIDATOR_ADDRESS 100000000stake --home .chora-1 
```

Then you will need to create the genesis transaction.

```sh
chorad gentx $KEY_NAME 1000000stake --home .chora-1 --chain-id chora-1
```

Once you have created the genesis transaction, you will need to write it to the genesis file.

```sh
chorad collect-gentxs --home .chora-1
```

Now you are ready to start and run the node for the `chora-1` chain.

```sh
chorad start --home .chora-1
```

## Run Second Chain

Using the `chorad` binary, you will need to initialize the node for the second chain (`chain-2`).

```sh
chorad init node-2 --home .chora-2 --chain-id chain-2
```

Once the node has been initialized, you will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=chora-2-validator

chorad keys add $KEY_NAME --home .chora-2

MY_VALIDATOR_ADDRESS=$(chorad keys show $KEY_NAME --home .chora-2 -a)
```

Now that you have generated a validator key, you will need to add the public address to the genesis file along with an initial amount of stake.

```sh
chorad add-genesis-account $MY_VALIDATOR_ADDRESS 100000000stake --home .chora-2 
```

Then you will need to create the genesis transaction.

```sh
chorad gentx $KEY_NAME 1000000stake --home .chora-2 --chain-id chora-2
```

Once you have created the genesis transaction, you will need to write it to the genesis file.

```sh
chorad collect-gentxs --home .chora-2
```

Now you are ready to start and run the node for the `chora-2` chain.

```sh
chorad start --home .chora-2 --grpc.address 0.0.0.0:9191 --p2p.laddr tcp://127.0.0.1:26658 --rpc.laddr tcp://127.0.0.1:26659 --rpc.pprof_laddr 127.0.0.1:6161
```

## Run Chain Relayer

...