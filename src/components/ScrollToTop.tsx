import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop =() => {
  const { pathname }= useLocation<string>();
  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [pathname]);
  console.log(pathname);
  return null;
};