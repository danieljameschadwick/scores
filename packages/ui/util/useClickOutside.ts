import { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useClickOutside = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return [
    ref,
  ];
};
