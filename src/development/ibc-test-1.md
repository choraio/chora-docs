# IBC Test 1

In this section, you will be testing the `ibc` module and two instances of `chora-chain`. The `chora-chain` application was scaffolded using `starport`, so this first test will be relatively simple as most of the configuration and startup steps are done for you.

## Run First Chain

*Note: The following commands should be run from within the `chora-chain` repository.*

Initialize and start the node for the first chain (`chora-1`).

```sh
starport serve -c config/starport/chora-1.yml
```

## Run Second Chain

*Note: The following commands should be run from within the `chora-chain` repository.*

Initialize and start the node for the second chain (`chora-2`).

```sh
starport serve -c config/starport/chora-2.yml
```

## Run Chain Relayer

*Note: The following commands should be run from within the `chora-chain` repository.*

Configure the `relayer` using the `advanced` flap option.

```sh
starport relayer configure --advanced --source-rpc "http://0.0.0.0:26657" --source-faucet "http://0.0.0.0:4500" --source-port "ecodex" --source-version "ecodex-1" --target-rpc "http://0.0.0.0:26659" --target-faucet "http://0.0.0.0:4501" --target-port "ecodex" --target-version "ecodex-1"
```

Start the `relayer` and begin communication between chains.

```sh
starport relayer connect
```

## Testing IBC

...
