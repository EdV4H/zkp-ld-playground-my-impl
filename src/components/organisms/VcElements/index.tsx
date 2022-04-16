import { Grid } from "@mui/material";

import { VcElementHeader } from "../../molecules";

const VcElements: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <VcElementHeader
          elementType="issuer"
          badgeCount={0}
          onAction={() => {
            console.log("onAction");
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <VcElementHeader
          elementType="holder"
          badgeCount={0}
          onAction={() => {
            console.log("onAction");
          }}
        />
      </Grid>
      <Grid item xs={3}>
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
