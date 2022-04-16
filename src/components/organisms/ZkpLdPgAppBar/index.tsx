import { Warning } from "@mui/icons-material";
import { AppBar, Toolbar, Tooltip, Typography } from "@mui/material";

import { ThemeSwitcher } from "../../molecules";

type Props = {
  theme: "light" | "dark";
  onThemeChange: (theme: "light" | "dark") => void;
};

const ZkpLdPgAppBar: React.FC<Props> = ({ theme, onThemeChange }) => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ZKP-LD Playground
          <Tooltip title="Experimental: Do not use in production. Possibly be updated or closed without notification.">
            <Warning color="warning" />
          </Tooltip>
        </Typography>
        <ThemeSwitcher theme={theme} onChange={onThemeChange} />
      </Toolbar>
    </AppBar>
  );
};

export default ZkpLdPgAppBar;
