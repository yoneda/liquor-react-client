import { useState } from "react";

const useLegacyState = initState => {
  const [state, setState] = useState(initState);
  return [state, part => setState({ ...state, ...part })];
};

export default useLegacyState;