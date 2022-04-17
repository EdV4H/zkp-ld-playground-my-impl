import { Grid } from "@mui/material";
import { useState } from "react";

import {
  ExampleDocumentDictionary,
  ExampleKeyDictionary,
  InputDocument,
  IssuerKey,
} from "../../../types/issuer";
import { PlaygroundSideModalState } from "../../../types/verifiableCredentials";
import InputDocumentEditor from "../../organisms/InputDocumentEditor";
import IssuerKeyEditor from "../../organisms/IssuerKeyEditor";
import VcElements from "../../organisms/VcElements";
import ZkpLdPgAppBar from "../../organisms/ZkpLdPgAppBar";

type Props = {
  theme: "light" | "dark";
  onThemeChange: (newTheme: "light" | "dark") => void;
  exampleDocuments: ExampleDocumentDictionary;
  exampleKeys: ExampleKeyDictionary;
  inputDocument: InputDocument;
  issuerKey: IssuerKey;
  onSelectInputDocument: (key: string) => void;
  onChangeInputDocument: (content: string) => void;
  onSelectIssuerKey: (key: string) => void;
  onChangeIssuerKey: (content: string) => void;
};

const ZkpLdPlayground: React.FC<Props> = ({
  theme,
  onThemeChange,
  exampleDocuments,
  exampleKeys,
  inputDocument,
  issuerKey,
  onSelectInputDocument,
  onChangeInputDocument,
  onSelectIssuerKey,
  onChangeIssuerKey,
}) => {
  const [modalState, setModalState] =
    useState<PlaygroundSideModalState>("inputDocument");

  return (
    <>
      <ZkpLdPgAppBar theme={theme} onThemeChange={onThemeChange} />
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <VcElements
            inputDocument={inputDocument}
            issuerKey={issuerKey}
            onSelectElement={(elementType) => setModalState(elementType)}
          />
        </Grid>
        <Grid item xs={5}>
          {modalState === "inputDocument" && (
            <InputDocumentEditor
              exampleDocuments={exampleDocuments}
              inputDocument={inputDocument}
              onSelectInputDocument={onSelectInputDocument}
              onChangeInputDocument={onChangeInputDocument}
            />
          )}
          {modalState === "issuerKey" && (
            <IssuerKeyEditor
              exampleKeys={exampleKeys}
              issuerKey={issuerKey}
              onSelectIssuerKey={onSelectIssuerKey}
              onChangeIssuerKey={onChangeIssuerKey}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ZkpLdPlayground;
