import { useEffect } from "react";

function useOutsideClick(ref, cb, exceptionId) {
  useEffect(() => {
    function handleOutside(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.id !== exceptionId
      ) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [ref, cb]);
}

export default useOutsideClick;
