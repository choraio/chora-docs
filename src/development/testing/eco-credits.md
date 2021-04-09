# Eco Credits

In this example, you will testing the `ecocredit` module using `regen-ledger`.

## Run Regen Chain

Start `regen-ledger` from within the `chora-chain` repository using the following script.

```sh
./scripts/regen.sh
```

## Prepare Addresses

Save the `regen-validator` address.

```sh
VALIDATOR_ADDRESS=$(regen keys show regen-validator -a --home .regen)
```

Create and save the `regen-user` address.

```sh
regen keys add regen-user --home .regen

USER_ADDRESS=$(regen keys show regen-user -a --home .regen)
```

## Ecocredit Testing

Create class...

```sh
regen tx ecocredit create-class $VALIDATOR_ADDRESS $VALIDATOR_ADDRESS dGVzdCBkYXRh --from $VALIDATOR_ADDRESS --chain-id regen
```

Query class...

```sh
regen q ecocredit class-info 1
```

::: tip EXAMPLE OUTPUT
```
info:
  class_id: 18AV53K
  designer: regen1tgmalqagkhzdakhh4ja4ur5a8e8zzpdlvh8yyq
  issuers:
  - regen1tgmalqagkhzdakhh4ja4ur5a8e8zzpdlvh8yyq
  metadata: dGVzdCBkYXRh
```
:::

Create batch...

```sh
regen tx ecocredit create-batch $VALIDATOR_ADDRESS 1 dGVzdCBkYXRh '[{recipient: '$VALIDATOR_ADDRESS', tradable_units: "10", retired_units: "0"}]' --from $VALIDATOR_ADDRESS --chain-id regen
```

Query batch...

```sh
regen q ecocredit batch-info [batch_denom]
```

::: tip EXAMPLE OUTPUT
```
info:
  batch_denom: 1/1uXqqzN
  class_id: "1"
  issuer: regen1tgmalqagkhzdakhh4ja4ur5a8e8zzpdlvh8yyq
  metadata: dGVzdCBkYXRh
  total_units: "10"
```
:::

Check balance...

```sh
regen q ecocredit balance [batch_denom] VALIDATOR_ADDRESS
```

::: warning EMPTY
```
retired_units: "0"
tradable_units: "0"
```
:::

Send credits...

```sh
regen tx ecocredit send $USER_ADDRESS '[{batch_denom: "[batch_denom]", tradable_units: "5", retired_units: "0"}]' --from $VALIDATOR_ADDRESS --chain-id regen
```

Check balance...

```sh
regen q ecocredit balance [batch_denom] USER_ADDRESS
```

::: warning EMPTY
```
retired_units: "0"
tradable_units: "0"
```
:::

Retire credits...

```sh
regen tx ecocredit retire '[{batch_denom: "[batch_denom]", units: "5"}]' --from $VALIDATOR_ADDRESS --chain-id regen
```

Check supply...

```sh
regen q ecocredit supply [batch_denom]
```

::: tip EXAMPLE OUTPUT
```
retired_supply: "5"
tradable_supply: "5"
```
:::
