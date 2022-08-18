import "../styles/globals.css";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "@/server/routers/app";
import superjson from "superjson";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
  config({ ctx: _ctx }) {
    const url = "http://localhost:3000/api/trpc";

    return {
      url,
      transformer: superjson,
      queryClientConfig: {
        defaultOptions: {
          queries: { suspense: true },
        },
      },
    };
  },
})(MyApp);
