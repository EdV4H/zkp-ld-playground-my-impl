import { Paper } from "@mui/material";

import {
  ExampleDocumentDictionary,
  InputDocument,
} from "../../../types/issuer";
import { EditorWithSelect } from "../../molecules";

type Props = {
  exampleDocuments: ExampleDocumentDictionary;
  inputDocument: InputDocument;
  onSelectInputDocument: (key: string) => void;
  onChangeInputDocument: (content: string) => void;
};

const InputDocumentEditor: React.FC<Props> = ({
  exampleDocuments,
  inputDocument,
  onSelectInputDocument,
  onChangeInputDocument,
}) => {
  return (
    <Paper elevation={0} sx={{ padding: 2 }}>
      <EditorWithSelect
        title="Input Document"
        label="Example"
        selected={inputDocument.id}
        menus={exampleDocuments}
        editorContent={inputDocument.contents}
        maxWidth={1000}
        onSelect={onSelectInputDocument}
        onChangeContent={onChangeInputDocument}
      />
    </Paper>
  );
};

export default InputDocumentEditor;
