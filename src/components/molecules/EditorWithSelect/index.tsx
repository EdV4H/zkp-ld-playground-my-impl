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

type Props = {
  title: string;
  label: string;
  selected: string;
  menus: { [key: string]: object };
  editorContent: string;
  maxWidth?: number;
  onSelect: (key: string) => void;
  onChangeContent: (content: string) => void;
};

const EditorWithSelect: React.FC<Props> = ({
  title,
  label,
  selected,
  menus,
  editorContent,
  maxWidth = 600,
  onSelect,
  onChangeContent,
}) => {
  const handleChangeSelected = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    onSelect(value);
  };

  const handleChangeEditorContent = (content?: string) => {
    if (content) onChangeContent(content);
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: maxWidth }}>
      <Typography variant="h4">{title}</Typography>
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
      <Editor
        height={500}
        language="json"
        value={editorContent}
        onChange={(value) => handleChangeEditorContent(value)}
      />
    </Stack>
  );
};

export default EditorWithSelect;
