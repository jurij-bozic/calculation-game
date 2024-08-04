import { useState, useEffect } from "react";

export const useDebounce = (operation: number | boolean | null, delay: number) => {
  const [debouncedOperation, setDebouncedOperation] = useState(operation);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedOperation(operation)
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [operation, delay]);

  return debouncedOperation;
};