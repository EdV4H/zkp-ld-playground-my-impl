export type CredAndReveal = {
  index: number;
  cred: Credential;
  reveal: Reveal;
  checked: boolean;
};

export type Credential = {
  value: string;
  validated: boolean;
  status: VerificationStatus;
};

export type Reveal = {
  value: string;
  validated: boolean;
};

export type VerificationStatus =
  | "Accepted"
  | "Rejected"
  | "Unverified"
  | "Disabled";
