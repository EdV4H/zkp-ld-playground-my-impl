import Editor from "@monaco-editor/react";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

type Props = {
  documents: Map<string, string>;
  onChange: () => void;
};

const EditorWithSideList: React.FC<Props> = ({ documents, onChange }) => {
  const [selected, setSelected] = useState<string>("");

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <List
          dense
          sx={{
            maxHeight: 500,
            overflow: "auto",
          }}
        >
          {Array.from(documents.keys()).map((key) => (
            <ListItem key={key}>
              <ListItemButton
                selected={selected === key}
                onClick={() => setSelected(key)}
              >
                <ListItemText primary={key} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={8}>
        <Editor
          language="json"
          value={documents.get(selected)}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
};

export default EditorWithSideList;
