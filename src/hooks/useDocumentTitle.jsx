import { useRef, useEffect } from "react";

export default function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);
  const titleSufix = " | HiMovie";

  useEffect(() => {
    document.title = title + titleSufix;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    }
    },[defaultTitle.current]);
}
