(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{372:function(a,e,s){"use strict";s.r(e);var t=s(45),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ecocredit-test-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecocredit-test-1"}},[a._v("#")]),a._v(" Ecocredit Test 1")]),a._v(" "),s("p",[a._v("In this example, you will be testing the "),s("code",[a._v("ecocredit")]),a._v(" module using "),s("code",[a._v("regen-ledger")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"run-regen-chain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-regen-chain"}},[a._v("#")]),a._v(" Run Regen Chain")]),a._v(" "),s("p",[a._v("Start "),s("code",[a._v("regen-ledger")]),a._v(" from within the "),s("code",[a._v("chora-chain")]),a._v(" repository using the following script.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("./scripts/regen.sh\n")])])]),s("h2",{attrs:{id:"prepare-addresses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-addresses"}},[a._v("#")]),a._v(" Prepare Addresses")]),a._v(" "),s("p",[a._v("Save the "),s("code",[a._v("regen-validator")]),a._v(" address.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("VALIDATOR_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("regen keys show regen-validator -a --home .regen"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),s("p",[a._v("Create and save the "),s("code",[a._v("regen-user")]),a._v(" address.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("regen keys "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" regen-user --home .regen\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("USER_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("regen keys show regen-user -a --home .regen"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),s("h2",{attrs:{id:"ecocredit-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecocredit-testing"}},[a._v("#")]),a._v(" Ecocredit Testing")]),a._v(" "),s("p",[a._v("Create class...")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("regen tx ecocredit create-class "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VALIDATOR_ADDRESS")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VALIDATOR_ADDRESS")]),a._v(" dGVzdCBkYXRh --from "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VALIDATOR_ADDRESS")]),a._v(" --chain-id regen --home .regen\n")])])]),s("p",[a._v("Query class...")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("regen q ecocredit class-info "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --home .regen\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("EXAMPLE OUTPUT")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("info:\n  class_id: 18AV53K\n  designer: regen1tgmalqagkhzdakhh4ja4ur5a8e8zzpdlvh8yyq\n  issuers:\n  - regen1tgmalqagkhzdakhh4ja4ur5a8e8zzpdlvh8yyq\n  metadata: dGVzdCBkYXRh\n")])])])]),a._v(" "),s("p",[a._v("Create batch...")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("regen tx ecocredit create-batch "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VALIDATOR_ADDRESS")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" dGVzdCBkYXRh "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[{recipient: '")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VALIDATOR_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\', tradable_units: "10", retired_units: "0"}]\'')]),a._v(" --from "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VALIDATOR_ADDRESS")]),a._v(" --chain-id regen --home .regen\n")])])]),s("p",[a._v("Query batch...")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("regen q ecocredit batch-info "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("batch_denom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" --home .regen\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("EXAMPLE OUTPUT")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('info:\n  batch_denom: 1/1uXqqzN\n  class_id: "1"\n  issuer: regen1tgmalqagkhzdakhh4ja4ur5a8e8zzpdlvh8yyq\n  metadata: dGVzdCBkYXRh\n  total_units: "10"\n')])])])]),a._v(" "),s("p",[a._v("Check balance...")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("regen q ecocredit balance "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("batch_denom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" VALIDATOR_ADDRESS --home .regen\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("EMPTY")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('retired_units: "0"\ntradable_units: "0"\n')])])])]),a._v(" "),s("p",[a._v("Send credits...")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("regen tx ecocredit send "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$USER_ADDRESS")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'[{batch_denom: "[batch_denom]", tradable_units: "5", retired_units: "0"}]\'')]),a._v(" --from "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VALIDATOR_ADDRESS")]),a._v(" --chain-id regen --home .regen\n")])])]),s("p",[a._v("Check balance...")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("regen q ecocredit balance "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("batch_denom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" USER_ADDRESS --home .regen\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("EMPTY")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('retired_units: "0"\ntradable_units: "0"\n')])])])]),a._v(" "),s("p",[a._v("Retire credits...")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("regen tx ecocredit retire "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'[{batch_denom: "[batch_denom]", units: "5"}]\'')]),a._v(" --from "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$VALIDATOR_ADDRESS")]),a._v(" --chain-id regen --home .regen\n")])])]),s("p",[a._v("Check supply...")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("regen q ecocredit supply "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("batch_denom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" --home .regen\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("EXAMPLE OUTPUT")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('retired_supply: "5"\ntradable_supply: "5"\n')])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);