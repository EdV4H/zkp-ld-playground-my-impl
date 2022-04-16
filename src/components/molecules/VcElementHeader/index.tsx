import { Archive, Create, GppGood, PhoneAndroid } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Button,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { VerifiableCredentialsElements } from "../../../types/verifiableCredentials";

const VcElementColorMap: Record<VerifiableCredentialsElements, string> = {
  issuer: "#ff9800",
  holder: "#3f51b5",
  verifier: "#4caf50",
  verifiableDataRegistry: "#f44336",
};

const VcElementIconMap: Record<VerifiableCredentialsElements, JSX.Element> = {
  issuer: <Create />,
  holder: <PhoneAndroid />,
  verifier: <GppGood />,
  verifiableDataRegistry: <Archive />,
};

const VcElementLabelMap: Record<VerifiableCredentialsElements, string> = {
  issuer: "Issuer",
  holder: "Holder",
  verifier: "Verifier",
  verifiableDataRegistry: "Verifiable Data Registry",
};

const VcElementActionMap: Record<VerifiableCredentialsElements, string> = {
  issuer: "issue",
  holder: "present",
  verifier: "verify",
  verifiableDataRegistry: "",
};

type Props = {
  elementType: VerifiableCredentialsElements;
  badgeCount: number;
  onAction: () => void;
};

const VcElementHeader: React.FC<Props> = ({
  elementType,
  badgeCount,
  onAction,
}) => {
  return (
    <Toolbar>
      <Tooltip title={VcElementLabelMap[elementType]}>
        <Badge
          badgeContent={badgeCount}
          color="primary"
          overlap="circular"
          sx={{ mr: 2 }}
        >
          <Avatar
            area-aria-label={elementType}
            sx={{ backgroundColor: elementType + ".main" }}
          >
            {VcElementIconMap[elementType]}
          </Avatar>
        </Badge>
      </Tooltip>
      <Typography sx={{ color: elementType + ".main", flexGrow: 1 }}>
        {VcElementLabelMap[elementType]}
      </Typography>
      {elementType !== "verifiableDataRegistry" && (
        <Button variant="contained" color={elementType} onClick={onAction}>
          {VcElementActionMap[elementType]}
        </Button>
      )}
    </Toolbar>
  );
};

export default VcElementHeader;
