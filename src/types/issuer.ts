export type ExampleDocumentDictionary = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [key: string]: {};
};

export type ExampleKeyDictionary = {
  [key: string]: IssuerKeyContents;
};

export type InputDocument = {
  id: string;
  contents: string;
};

export type IssuerKey = {
  id: string;
  contents: string;
};

export type IssuerKeyContents = {
  id: string;
  controller: string;
  privateKeyBase58: string;
};
