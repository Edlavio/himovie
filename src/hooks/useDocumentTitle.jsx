import { useRef, useEffect } from "react";

export default function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);
  const titlePrefix = "HiMovie | ";

  useEffect(() => {
    document.title = titlePrefix + title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    }
    },[defaultTitle.current]);
}
