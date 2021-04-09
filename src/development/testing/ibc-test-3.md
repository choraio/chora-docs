# IBC Test 3

In this example, you will be testing the `ibc` module using `chora-chain` and `regen-ledger`.

At the moment, `regen-ledger` is not set up to be used with `starport`, which means the setup process will be similar to the previous example ("IBC Test 2").

## Run Chora Chain

*Note: The following commands should be run from within the `chora-chain` repository, which is also being used as the `home` directory for the purpose of testing (i.e. `--home .chora`).*

Using the `chorad` binary, you will need to initialize the node.

```sh
chorad init chora-node --chain-id chora --home .chora
```

Once the node has been initialized, you will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=chora-validator

chorad keys add $KEY_NAME --home .chora

VALIDATOR_ADDRESS=$(chorad keys show $KEY_NAME -a --home .chora)
```

Now that you have generated a validator keypair, you will need to add the public address to the genesis file along with an initial amount of stake.

```sh
chorad add-genesis-account $VALIDATOR_ADDRESS 5000000stake --home .chora
```

Then you will need to create the genesis transaction.

```sh
chorad gentx $KEY_NAME 1000000stake --chain-id chora --home .chora
```

Once you have created the genesis transaction, you will need to write it to the genesis file.

```sh
chorad collect-gentxs --home .chora
```

Now you are ready to start and run a local node and singleton chain using `chora-chain`.

```sh
chorad start --home .chora
```

## Run Regen Chain

*Note: The following commands should be run from within the `chora-chain` repository, which is also being used as the `home` directory for the purpose of testing (i.e. `--home .regen`).*

Using the `regen` binary, you will need to initialize the node.

```sh
regen init regen-node --chain-id regen --home .regen
```

Once the node has been initialized, you will need to create a validator key and then store the address of the validator for later use.

```sh
KEY_NAME=regen-validator

regen keys add $KEY_NAME --home .regen

VALIDATOR_ADDRESS=$(regen keys show $KEY_NAME -a --home .regen)
```

Now that you have generated a validator keypair, you will need to add the public address to the genesis file along with an initial amount of stake.

```sh
regen add-genesis-account $VALIDATOR_ADDRESS 5000000stake --home .regen
```

Then you will need to create the genesis transaction.

```sh
regen gentx $KEY_NAME 1000000stake --chain-id regen --home .regen
```

Once you have created the genesis transaction, you will need to write it to the genesis file.

```sh
regen collect-gentxs --home .regen
```

Now you are ready to start and run the node for `regen-ledger`. For this node, you will need to change the default ports using the appropriate flags.

```sh
regen start --grpc.address 0.0.0.0:9191 --p2p.laddr tcp://127.0.0.1:26658 --rpc.laddr tcp://127.0.0.1:26659 --rpc.pprof_laddr 127.0.0.1:6161 --home .regen
```

## Run Chain Relayer

*Note: The following commands should be run from within the `chora-chain` repository, which is also being used as the `home` directory for the purpose of testing (i.e. `--home .relayer`).*

Using the `rly` binary, initialize the `relayer` service.

```sh
rly config init --home .regen
```

Add `chains` to the `relayer` configuration.

```sh
rly config add-chains config/chora-regen/chains --home .regen
```

Add `paths` to the `relayer` configuration.

```sh
rly config add-paths config/chora-regen/paths --home .regen
```

Add keys for each chain for the `relayer`. *Note that the same keys used for the validators are being used for the light client operators to simplify the number of steps for testing purposes.*

```sh
rly keys restore chora chora-validator "[mnemonic]" --home .regen
rly keys restore regen regen-validator "[mnemonic]" --home .regen
```

Initialize a light client database for each chain.

```sh
rly light init chora -f --home .regen
rly light init regen -f --home .regen
```

Link paths between chains and complete `relayer` configuration.

```sh
rly tx link transfer --home .regen
```

Start the `relayer` service.

```sh
rly start transfer --home .regen
```

## Test Transfer

...
