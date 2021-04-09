# IBC Test 1

In this example, you will be testing the `ibc` module using two instances of `chora-chain`.

`chora-chain` was scaffolded using `starport`, so this first example will be relatively simple as most of the configuration and setup is already done for you.

## Run First Chain

*Note: The following commands should be run from within the `chora-chain` repository.*

Initialize and start the node for the first chain (`chora-1`).

```sh
starport serve -c config/chora-chora/starport/chora-1.yml
```

## Run Second Chain

*Note: The following commands should be run from within the `chora-chain` repository.*

Initialize and start the node for the second chain (`chora-2`).

```sh
starport serve -c config/chora-chora/starport/chora-2.yml
```

## Run Chain Relayer

Configure the `relayer` using the `advanced` flag option.

```sh
starport relayer configure --advanced --source-rpc "http://0.0.0.0:26657" --source-faucet "http://0.0.0.0:4500" --source-port "transfer" --source-version "ics20-1" --target-rpc "http://0.0.0.0:26659" --target-faucet "http://0.0.0.0:4501" --target-port "transfer" --target-version "ics20-1"
```

Start the `relayer` and begin communication between chains.

```sh
starport relayer connect
```

## Test Transfer

...
