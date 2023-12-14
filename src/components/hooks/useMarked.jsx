import { useMemo } from "react";

export default function useMarked(arr) {
  function checkMarked(show) {
    return show.marked === true;
  }

  const bookMarked = useMemo(() => {
    return arr ? arr.filter(checkMarked) : null;
  }, [arr]);

  return bookMarked;
}
