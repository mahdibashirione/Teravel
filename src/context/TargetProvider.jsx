import { createContext, useContext, useState } from "react";

const TargetContext = createContext();
const TargetContextDispatch = createContext();

const TargetProvider = ({ children }) => {
  const [target, setTarget] = useState("Stays");

  return (
    <TargetContext.Provider value={target}>
      <TargetContextDispatch.Provider value={setTarget}>
        {children}
      </TargetContextDispatch.Provider>
    </TargetContext.Provider>
  );
};

export default TargetProvider;

export function useTarget() {
  return useContext(TargetContext);
}
export function useTargetActions() {
  const target = useContext(TargetContext);
  const setTarget = useContext(TargetContextDispatch);

  function handleChangeTarget(text) {
    if (text === target) return;
    setTarget(text);
  }

  return { handleChangeTarget };
}
