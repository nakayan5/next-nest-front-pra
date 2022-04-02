import React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </RecoilRoot>
  );
}

export default MyApp;
