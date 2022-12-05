import { useState, useEffect } from "react";
import "../styles/globals.css";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    );
  }
}

export default MyApp;
