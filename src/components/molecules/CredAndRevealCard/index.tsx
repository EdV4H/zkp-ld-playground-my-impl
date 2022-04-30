import {
  Check,
  DoNotDisturb,
  ErrorOutline,
  HelpOutline,
} from "@mui/icons-material";
import {
  Card,
  CardContent,
  Checkbox,
  Chip,
  ChipProps,
  Typography,
} from "@mui/material";

import type { VerificationStatus } from "../../../types/holder";

const VerificationStatusColorMap: Record<string, ChipProps["color"]> = {
  Accepted: "success",
  Rejected: "error",
  Unverified: "warning",
  Disabled: "default",
};

const VerificationStatusIconMap: Record<string, JSX.Element> = {
  Accepted: <Check />,
  Rejected: <ErrorOutline />,
  Unverified: <HelpOutline />,
  Disabled: <DoNotDisturb />,
};

type Props = {
  verificationStatus: VerificationStatus;
};

const CredAndRevealCard: React.FC<Props> = ({ verificationStatus }) => {
  return (
    <Card>
      <CardContent>
        <Checkbox />
        <Chip
          label={verificationStatus}
          icon={VerificationStatusIconMap[verificationStatus]}
          color={VerificationStatusColorMap[verificationStatus]}
        />
        <Typography variant="subtitle1">Document</Typography>
      </CardContent>
    </Card>
  );
};

export default CredAndRevealCard;
