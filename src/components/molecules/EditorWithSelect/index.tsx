import Editor from "@monaco-editor/react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {
  title: string;
  label: string;
  menus: { [key: string]: object };
  editorContent: string;
  maxWidth?: number;
  onClick?: () => void;
};

const EditorWithSelect: React.FC<Props> = ({
  title,
  label,
  menus,
  editorContent,
  maxWidth = 600,
}) => {
  const [selected, setSelected] = useState<string>("");

  const handleChangeSelected = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelected(value);
  };

  return (
    <Stack spacing={1} sx={{ maxWidth: maxWidth }}>
      <Typography variant="subtitle1">{title}</Typography>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={selected}
          label={label}
          onChange={(event) => handleChangeSelected(event)}
        >
          {Object.keys(menus).map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Editor height={500} language="json" value={editorContent} />
    </Stack>
  );
};

export default EditorWithSelect;
