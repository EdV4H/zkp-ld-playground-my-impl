import { Grid } from "@mui/material";

import { VcElementHeader } from "../../molecules";
import IssuerColumn from "../IssuerColumn";

const VcElements: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <IssuerColumn maxWidth={500} />
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
