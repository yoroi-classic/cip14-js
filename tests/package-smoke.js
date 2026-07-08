const imported = require("..");

const AssetFingerprint = imported.default || imported;

const fingerprint = AssetFingerprint.fromParts(
  Buffer.from("7eae28af2208be856f7a119668ae52a49b73725e326dc16579dcc373", "hex"),
  Buffer.from("", "hex")
);

if (
  fingerprint.fingerprint() !==
  "asset1rjklcrnsdzqp65wjgrg55sy9723kw09mlgvlc3"
) {
  throw new Error("Asset fingerprint smoke test failed");
}

const reconstructed = AssetFingerprint.fromBech32(
  "asset1rjklcrnsdzqp65wjgrg55sy9723kw09mlgvlc3"
);

if (reconstructed.hash() !== "1cadfc0e7068801d51d240d14a4085f2a3673cbb") {
  throw new Error("Asset fingerprint bech32 smoke test failed");
}
