import "../styles/globals.css";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "@/pages/api/trpc/[trpc]";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
  config({ ctx: _ctx }) {
    const url = "http://localhost:3000/api/trpc";

    return {
      url,
    };
  },
})(MyApp);
