import { Key, TextSnippet } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

import { InputDocument, IssuerKey } from "../../../types/issuer";
import { PlaygroundSideModalState } from "../../../types/verifiableCredentials";
import { LabelAndOverviewCard, VcElementHeader } from "../../molecules";

type Props = {
  inputDocument: InputDocument;
  issuerKey: IssuerKey;
  maxWidth?: number;
  onSelectElement: (elementType: PlaygroundSideModalState) => void;
};

const IssuerColumn: React.FC<Props> = ({
  inputDocument,
  issuerKey,
  maxWidth = 500,
  onSelectElement,
}) => {
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
          label={inputDocument.id}
          icon={<TextSnippet />}
          maxWidth={maxWidth}
          onClick={() => {
            onSelectElement("inputDocument");
          }}
        />
      </Box>
      <Box sx={{ px: 3 }}>
        <LabelAndOverviewCard
          title="Key"
          label={issuerKey.id}
          icon={<Key />}
          maxWidth={maxWidth}
          onClick={() => {
            onSelectElement("issuerKey");
          }}
        />
      </Box>
    </Stack>
  );
};

export default IssuerColumn;
