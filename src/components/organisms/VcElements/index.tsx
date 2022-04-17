import { Grid } from "@mui/material";

import { InputDocument, IssuerKey } from "../../../types/issuer";
import { PlaygroundSideModalState } from "../../../types/verifiableCredentials";
import { VcElementHeader } from "../../molecules";
import IssuerColumn from "../IssuerColumn";

type Props = {
  inputDocument: InputDocument;
  issuerKey: IssuerKey;
  onSelectElement: (elementType: PlaygroundSideModalState) => void;
};

const VcElements: React.FC<Props> = ({
  inputDocument,
  issuerKey,
  onSelectElement,
}) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <IssuerColumn
          inputDocument={inputDocument}
          issuerKey={issuerKey}
          maxWidth={500}
          onSelectElement={onSelectElement}
        />
      </Grid>
      <Grid item xs={4}>
        <VcElementHeader
          elementType="holder"
          badgeCount={0}
          onAction={() => {
            console.log("onAction");
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <VcElementHeader
          elementType="verifier"
          badgeCount={0}
          onAction={() => {
            console.log("onAction");
          }}
        />
      </Grid>
    </Grid>
  );
};

export default VcElements;
