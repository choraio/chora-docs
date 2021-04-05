# Chora <-> Chora

In this section, you will testing the `ibc` module using two instances of `chora-chain`.

## Run First Chain

*Note: The following commands should be run from within the `chora-chain` repository, which is also being used as the `home` directory for the purpose of testing (i.e. `--home .chora-1`).*

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
chorad add-genesis-account $MY_VALIDATOR_ADDRESS 1000000stake --home .chora-1 
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

*Note: The following commands should be run from within the `chora-chain` repository, which is also being used as the `home` directory for the purpose of testing (i.e. `--home .chora-2`).*

Using the `chorad` binary, you will need to initialize the node for the second chain (`chain-2`).

```sh
chorad init node-2 --home .chora-2 --chain-id chora-2
```

Once the node has been initialized, you will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=chora-2-validator

chorad keys add $KEY_NAME --home .chora-2

MY_VALIDATOR_ADDRESS=$(chorad keys show $KEY_NAME --home .chora-2 -a)
```

Now that you have generated a validator key, you will need to add the public address to the genesis file along with an initial amount of stake.

```sh
chorad add-genesis-account $MY_VALIDATOR_ADDRESS 1000000stake --home .chora-2 
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

*Note: The following commands should be run from within the `chora-chain` repository, which is also being used as the `home` directory for the purpose of testing (i.e. `--home .relayer`).*

Using the `rly` binary, initialize the `relayer` service.

```sh
rly config init --home .relayer
```

Add `chains` to the `relayer` configuration.

```sh
rly config add-chains config/chains --home .relayer
```

Add keys for each chain for the `relayer`.

```sh
rly keys add chora-1 --home .relayer
rly keys add chora-2 --home .relayer
```

Add `paths` to the `relayer` configuration.

```sh
rly config add-paths config/paths --home .relayer
```

Initialize the light client for each chain.

```sh
rly light init chora-1 -f --home .relayer
rly light init chora-2 -f --home .relayer
```

Start the `relayer` service.

```sh
rly start blog --home .relayer
```

## Testing IBC

...