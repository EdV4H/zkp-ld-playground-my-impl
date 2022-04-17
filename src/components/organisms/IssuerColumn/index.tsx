import { Key, TextSnippet } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

import { LabelAndOverviewCard, VcElementHeader } from "../../molecules";

type Props = {
  maxWidth?: number;
};

const IssuerColumn: React.FC<Props> = ({ maxWidth = 500 }) => {
  return (
    <Stack spacing={2} sx={{ maxWidth: maxWidth }}>
      <VcElementHeader
        elementType="issuer"
        badgeCount={0}
        onAction={() => {
          console.log("Issue");
        }}
      />
      <Box sx={{ px: 3 }}>
        <LabelAndOverviewCard
          title="Input Document"
          label="Person1"
          icon={<TextSnippet />}
          maxWidth={maxWidth}
        />
      </Box>
      <Box sx={{ px: 3 }}>
        <LabelAndOverviewCard
          title="Key"
          label="did:exmaple:issuer1#bbs-bls-key1"
          icon={<Key />}
          maxWidth={maxWidth}
        />
      </Box>
    </Stack>
  );
};

export default IssuerColumn;
