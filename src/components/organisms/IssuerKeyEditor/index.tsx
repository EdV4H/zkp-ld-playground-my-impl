import { Paper } from "@mui/material";

import { ExampleKeyDictionary, IssuerKey } from "../../../types/issuer";
import { EditorWithSelect } from "../../molecules";

type Props = {
  exampleKeys: ExampleKeyDictionary;
  issuerKey: IssuerKey;
  onSelectIssuerKey: (key: string) => void;
  onChangeIssuerKey: (content: string) => void;
};

const IssuerKeyEditor: React.FC<Props> = ({
  exampleKeys,
  issuerKey,
  onSelectIssuerKey,
  onChangeIssuerKey,
}) => {
  return (
    <Paper elevation={0} sx={{ padding: 2 }}>
      <EditorWithSelect
        title="Key"
        label="Signing Key"
        selected={issuerKey.id}
        menus={exampleKeys}
        editorContent={issuerKey.contents}
        maxWidth={1000}
        onSelect={onSelectIssuerKey}
        onChangeContent={onChangeIssuerKey}
      />
    </Paper>
  );
};

export default IssuerKeyEditor;
