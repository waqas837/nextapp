import React, { useEffect } from "react";
import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // step1:
    // for material ui ssr we will remove the ssr styles
    // firs we find the dom element
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      // then inside the parent element remove this child node in dom
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
