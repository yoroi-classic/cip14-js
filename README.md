# CIP14-JS

On the Cardano blockchain, native assets are uniquely identified by both their _policy id_ and _asset name_. Neither the policy id nor the asset name are intended to be human-readable data. [CIP14](https://github.com/cardano-foundation/CIPs/pull/64) introduces an _asset fingerprint_ which is a short(er) and human-readable identifier for assets that user can recognize and refer to when talking about assets.

More specifically, CIP14 defines a user-facing asset fingerprint as a bech32-encoded blake2b-160 digest of the concatenation of the policy id and the asset name.

This package is a Typescript implementation of CIP14.

## Install

``` sh
npm i github:yoroi-classic/cip14-js#master --save
```

For reproducible application builds, pin the dependency to a release tag or commit:

```json
{
  "dependencies": {
    "@yoroi-classic/cip14-js": "github:yoroi-classic/cip14-js#<tag-or-commit>"
  }
}
```

## Usage

The package currently emits CommonJS. TypeScript or transpiled ES modules can
use the default import:

```ts
import AssetFingerprint from '@yoroi-classic/cip14-js';

// initialize class with policyId, assetName
const assetFingerprint = AssetFingerprint.fromParts(
  Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
  Buffer.from('504154415445', 'hex'),
);

const fingerprintHash = assetFingerprint.hash();
const bech32Fingerprint = assetFingerprint.fingerprint();
```

CommonJS:

```js
const cip14 = require('@yoroi-classic/cip14-js');
const AssetFingerprint = cip14.default || cip14;

// initialize class with policyId, assetName
const assetFingerprint = AssetFingerprint.fromParts(
  Buffer.from('1e349c9bdea19fd6c147626a5260bc44b71635f398b67c59881df209', 'hex'),
  Buffer.from('504154415445', 'hex'),
);

const fingerprintHash = assetFingerprint.hash();
const bech32Fingerprint = assetFingerprint.fingerprint();

// initialize class with bech32
const parsedFingerprint = AssetFingerprint.fromBech32('asset1rjklcrnsdzqp65wjgrg55sy9723kw09mlgvlc3');

const parsedHash = parsedFingerprint.hash();
const prefix = parsedFingerprint.prefix();
```

Native ES modules can use the same interop fallback with Node's CommonJS bridge:

```js
import cip14 from '@yoroi-classic/cip14-js';

const AssetFingerprint = cip14.default || cip14;
```
