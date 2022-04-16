/**
 * @description Verifiable Credentials Elements
 *
 * | Element | Description |
 * |---------|-------------|
 * | `issuer` | Issuer of the credential |
 * | `holder` | Holder of the credential |
 * | `verifier` | Verifier of the credential |
 * | `verifiableDataRegistry` | Verifiable Data Registry of the credential |
 */
export type VerifiableCredentialsElements =
  | "issuer"
  | "holder"
  | "verifier"
  | "verifiableDataRegistry";
