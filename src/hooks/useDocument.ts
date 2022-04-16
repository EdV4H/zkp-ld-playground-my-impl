import { useState } from "react";

import { builtinContexts } from "../data";

const useDocument = () => {
  const [context, setContext] = useState(builtinContexts);

  const handleContextChange = (id: string, value: string) => {
    setContext(new Map(context.set(id, value)));
  };

  return {
    context,
    handleContextChange,
  };
};

export default useDocument;
