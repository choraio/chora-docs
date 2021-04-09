# IBC Test 2

In this example, you will be testing the `ibc` module using two instances of `chora-chain`.

This example essentially leads to the same results as the previous example ("IBC Test 1") but it does not use the simplified `starport` commands and configuration.

## Run First Chain

*Note: The following commands should be run from within the `chora-chain` repository, which is also being used as the `home` directory for the purpose of testing (i.e. `--home .chora-1`).*

Using the `chorad` binary, you will need to initialize the node for the first chain (`chora-1`).

```sh
chorad init node-1 --chain-id chora-1 --home .chora-1
```

Once the node has been initialized, you will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=chora-1-validator

chorad keys add $KEY_NAME --home .chora-1

VALIDATOR_ADDRESS=$(chorad keys show $KEY_NAME -a --home .chora-1)
```

Now that you have generated a validator key, you will need to add the public address to the genesis file along with an initial amount of stake.

```sh
chorad add-genesis-account $VALIDATOR_ADDRESS 5000000stake --home .chora-1 
```

Then you will need to create the genesis transaction.

```sh
chorad gentx $KEY_NAME 1000000stake --chain-id chora-1 --home .chora-1
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
chorad init node-2 --chain-id chora-2 --home .chora-2
```

Once the node has been initialized, you will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=chora-2-validator

chorad keys add $KEY_NAME --home .chora-2

VALIDATOR_ADDRESS=$(chorad keys show $KEY_NAME -a --home .chora-2)
```

Now that you have generated a validator key, you will need to add the public address to the genesis file along with an initial amount of stake.

```sh
chorad add-genesis-account $VALIDATOR_ADDRESS 5000000stake --home .chora-2 
```

Then you will need to create the genesis transaction.

```sh
chorad gentx $KEY_NAME 1000000stake --chain-id chora-2 --home .chora-2
```

Once you have created the genesis transaction, you will need to write it to the genesis file.

```sh
chorad collect-gentxs --home .chora-2
```

Now you are ready to start and run the node for the `chora-2` chain. For this node, you will need to change the default ports using the appropriate flags.

```sh
chorad start --grpc.address 0.0.0.0:9191 --p2p.laddr tcp://127.0.0.1:26658 --rpc.laddr tcp://127.0.0.1:26659 --rpc.pprof_laddr 127.0.0.1:6161 --home .chora-2
```

## Run Chain Relayer

*Note: The following commands should be run from within the `chora-chain` repository, which is also being used as the `home` directory for the purpose of testing (i.e. `--home .relayer`).*

Using the `rly` binary, initialize the `relayer` service.

```sh
rly config init --home .relayer
```

Add `chains` to the `relayer` configuration.

```sh
rly config add-chains config/chora-chora/chains --home .relayer
```

Add `paths` to the `relayer` configuration.

```sh
rly config add-paths config/chora-chora/paths --home .relayer
```

Add keys for each chain for the `relayer`. *Note that the same keys used for the validators are being used for the light client operators to simplify the number of steps for testing purposes.*

```sh
rly keys restore chora-1 chora-1-validator "[mnemonic]" --home .relayer
rly keys restore chora-2 chora-2-validator "[mnemonic]" --home .relayer
```

Initialize a light client database for each chain.

```sh
rly light init chora-1 -f --home .relayer
rly light init chora-2 -f --home .relayer
```

Link paths between chains and complete `relayer` configuration.

```sh
rly tx link transfer --home .relayer
```

Start the `relayer` service.

```sh
rly start transfer --home .relayer
```

## Test Transfer

...
