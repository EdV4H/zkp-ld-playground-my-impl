import { Warning } from "@mui/icons-material";
import { AppBar, Toolbar, Tooltip, Typography } from "@mui/material";

import { ThemeSwitcher } from "../../molecules";

const ZkpLdPgAppBar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ZKP-LD Playground
          <Tooltip title="Experimental: Do not use in production. Possibly be updated or closed without notification.">
            <Warning color="warning" />
          </Tooltip>
        </Typography>
        <ThemeSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default ZkpLdPgAppBar;
