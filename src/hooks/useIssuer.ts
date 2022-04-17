import { useState } from "react";

import { City, Person1, Person2, Place } from "../data/doc";
import {
  exampleBls12381KeyPair1,
  exampleBls12381KeyPair2,
  exampleBls12381KeyPair3,
} from "../data/key";
import {
  ExampleDocumentDictionary,
  ExampleKeyDictionary,
  InputDocument,
  IssuerKey,
} from "../types/issuer";

const useIssuer = () => {
  const exampleDocuments: ExampleDocumentDictionary = {
    Person1: Person1,
    Person2: Person2,
    City: City,
    Place: Place,
  };
  const exampleKeys: ExampleKeyDictionary = {
    "did:example:issuer1#bbs-bls-key1": exampleBls12381KeyPair1,
    "did:example:issuer1#bbs-bls-key2": exampleBls12381KeyPair2,
    "did:example:issuer1#bbs-bls-key3": exampleBls12381KeyPair3,
  };
  const [inputDocument, setInputDocument] = useState<InputDocument>({
    id: "Person1",
    contents: JSON.stringify(exampleDocuments["Person1"], null, 2),
  });
  const [issuerKey, setIssuerKey] = useState<IssuerKey>({
    id: "did:example:issuer1#bbs-bls-key1",
    contents: JSON.stringify(
      exampleKeys["did:example:issuer1#bbs-bls-key1"],
      null,
      2
    ),
  });

  const handleInputDocumentChange = (value: string) => {
    setInputDocument({ ...inputDocument, contents: value });
  };

  const handleInputDocumentSelect = (
    keyId: keyof ExampleDocumentDictionary
  ) => {
    setInputDocument({
      id: keyId as string,
      contents: JSON.stringify(exampleDocuments[keyId], null, 2),
    });
  };

  const handleIssuerKeyChange = (value: string) => {
    setIssuerKey({ ...issuerKey, contents: value });
  };

  const handleIssuerKeySelect = (keyId: keyof ExampleKeyDictionary) => {
    setIssuerKey({
      id: keyId as string,
      contents: JSON.stringify(exampleKeys[keyId], null, 2),
    });
  };

  return {
    exampleDocuments,
    exampleKeys,
    inputDocument,
    issuerKey,
    handleInputDocumentChange,
    handleInputDocumentSelect,
    handleIssuerKeyChange,
    handleIssuerKeySelect,
  };
};

export default useIssuer;
