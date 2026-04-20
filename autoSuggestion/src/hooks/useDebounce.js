

import { useRef } from "react";

function useDebounce(fn, delay = 1000) {
  const timerRef = useRef(null); 

  return function (...args) {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      fn.apply(this, args);
    }, delay);
  };
}

export default useDebounce;