# Ecocredit Test 2

In this example, you will be testing the `ecocredit` module using `chora-chain`.

## Run Chora Chain

Start `chora-chain` from within the `chora-chain` repository using the following script.

```sh
./scripts/chora.sh
```

## Prepare Addresses

Save the `chora-validator` address.

```sh
VALIDATOR_ADDRESS=$(chorad keys show chora-validator -a --home .chora)
```

Create and save the `chora-user` address.

```sh
chorad keys add chora-user --home .chora

USER_ADDRESS=$(chorad keys show chora-user -a --home .chora)
```

## Ecocredit Testing

Create class...

```sh
chorad tx ecocredit create-class $VALIDATOR_ADDRESS $VALIDATOR_ADDRESS dGVzdCBkYXRh --from $VALIDATOR_ADDRESS --chain-id chora --home .chora
```

Query class...

```sh
chorad q ecocredit class-info 1 --home .chora
```

::: tip EXAMPLE OUTPUT
```
info:
  class_id: 18AV53K
  designer: chora1tgmalqagkhzdakhh4ja4ur5a8e8zzpdlvh8yyq
  issuers:
  - chora1tgmalqagkhzdakhh4ja4ur5a8e8zzpdlvh8yyq
  metadata: dGVzdCBkYXRh
```
:::

Create batch...

```sh
chorad tx ecocredit create-batch $VALIDATOR_ADDRESS 1 dGVzdCBkYXRh '[{recipient: '$VALIDATOR_ADDRESS', tradable_units: "10", retired_units: "0"}]' --from $VALIDATOR_ADDRESS --chain-id chora --home .chora
```

Query batch...

```sh
chorad q ecocredit batch-info [batch_denom] --home .chora
```

::: tip EXAMPLE OUTPUT
```
info:
  batch_denom: 1/1uXqqzN
  class_id: "1"
  issuer: chora1tgmalqagkhzdakhh4ja4ur5a8e8zzpdlvh8yyq
  metadata: dGVzdCBkYXRh
  total_units: "10"
```
:::

Check balance...

```sh
chorad q ecocredit balance [batch_denom] VALIDATOR_ADDRESS --home .chora
```

::: warning EMPTY
```
retired_units: "0"
tradable_units: "0"
```
:::

Send credits...

```sh
chorad tx ecocredit send $USER_ADDRESS '[{batch_denom: "[batch_denom]", tradable_units: "5", retired_units: "0"}]' --from $VALIDATOR_ADDRESS --chain-id chora --home .chora
```

Check balance...

```sh
chorad q ecocredit balance [batch_denom] USER_ADDRESS --home .chora
```

::: warning EMPTY
```
retired_units: "0"
tradable_units: "0"
```
:::

Retire credits...

```sh
chorad tx ecocredit retire '[{batch_denom: "[batch_denom]", units: "5"}]' --from $VALIDATOR_ADDRESS --chain-id chora --home .chora
```

Check supply...

```sh
chorad q ecocredit supply [batch_denom] --home .chora
```

::: tip EXAMPLE OUTPUT
```
retired_supply: "5"
tradable_supply: "5"
```
:::
