import { type NextPage } from "next";
import Head from "next/head";

import { Button } from "~/components/ui/button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Timelining</title>
        <meta name="description" content="Create and share timelines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          <Button>Create timeline</Button>
        </div>
      </main>
    </>
  );
};

export default Home;
