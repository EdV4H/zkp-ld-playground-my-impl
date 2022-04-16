import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {
  title: string;
  label: string;
  menus: { [key: string]: object };
  maxWidth?: number;
};

const ObjectSelectCard: React.FC<Props> = ({
  title,
  label,
  menus,
  maxWidth = 300,
}) => {
  const [selected, setSelected] = useState<string>("");

  return (
    <Card sx={{ maxWidth: maxWidth, padding: 2 }}>
      <Typography variant="subtitle1" sx={{ pb: 1 }}>
        {title}
      </Typography>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={selected} label={label}>
          {Object.keys(menus).map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Card>
  );
};

export default ObjectSelectCard;
