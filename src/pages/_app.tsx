import { type AppType } from "next/app";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Layout from "~/components/Layout/Layout";
import { Toaster } from "~/components/ui/toaster";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </main>
  );
};

export default api.withTRPC(MyApp);
