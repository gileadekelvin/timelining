import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import NewTimeline from "~/components/NewTimeline";
import { type TimelineModel } from "~/components/TimelineInput/TimelineInput";

import Loading from "~/components/ui/loading";
import { api } from "../../utils/api";

type CloneProps = {
  timelineId: string;
};

const Clone = (props: CloneProps) => {
  const timeline = api.timeline.getTimeline.useQuery({
    id: props.timelineId,
  });

  if (timeline.isLoading) {
    return <Loading />;
  }

  if (timeline.error) {
    return (
      <div
        className="mb-4 flex rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="mr-3 inline h-5 w-5 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Error!</span> Timeline not found.
        </div>
      </div>
    );
  }

  return <NewTimeline defaultValues={timeline.data as unknown as TimelineModel} />;
};

const ClonePage: NextPage = () => {
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
          {id && typeof id === "string" && <Clone timelineId={id} />}
        </div>
      </main>
    </>
  );
};

export default ClonePage;
