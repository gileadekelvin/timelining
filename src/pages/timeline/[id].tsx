import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import TimelineView from "~/components/TimelineView";

const Timeline: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Timelining</title>
        <meta name="description" content="Create and share timelines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          {id && typeof id === "string" && <TimelineView timelineId={id} />}
        </div>
      </main>
    </>
  );
};

export default Timeline;
