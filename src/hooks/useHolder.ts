import { useState } from "react";

import { CredAndReveal } from "../types/holder";

const useHolder = () => {
  const [credAndReveals, setCredAndReveals] = useState<CredAndReveal[]>([]);

  return {
    credAndReveals,
  };
};

export default useHolder;
