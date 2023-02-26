import { Plus } from "lucide-react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Button } from "~/components/ui/button";

const TimelineExample = () => {
  return (
    <div className="mx-auto flex flex-col justify-center gap-4 py-8">
      <p className="h-auto border-none p-0 text-2xl font-semibold focus:ring-transparent dark:border-none dark:focus:ring-transparent dark:focus:ring-offset-transparent dark:focus-visible:outline-none md:min-w-[200px]">
        Fill the title
      </p>
      <div className="flex flex-col pl-4 md:min-w-[200px]">
        <ol className="max-w-xs border-l border-gray-300 md:max-w-3xl">
          <li className="flex flex-row gap-8">
            <div>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
                <p className="h-auto border-none p-0 text-sm text-gray-500 focus:ring-transparent focus-visible:outline-none dark:border-none dark:focus:ring-transparent dark:focus:ring-offset-transparent dark:focus-visible:outline-none md:min-w-[200px]">
                  Then you could add a date
                </p>
              </div>
              <div className="mt-0.5 ml-4 mb-6 flex flex-col">
                <div className="flex flex-col">
                  <p className="mb-0 h-auto resize-none border-none p-0 text-xl font-semibold text-gray-800 focus:ring-transparent focus-visible:outline-none md:min-w-[200px]">
                    Name your event
                  </p>
                </div>
                <p className="text-md mb-3 h-auto resize-none border-none p-0 text-gray-500 focus:ring-transparent focus-visible:outline-none md:min-w-[200px]">
                  add a description
                </p>
              </div>
            </div>
          </li>
        </ol>
        <div className="-m-5 mt-2 flex flex-row items-center gap-4">
          <Button variant="outline" className="w-10 rounded-full p-0">
            <Plus className="h-4 w-4 text-gray-800" />
            <span className="sr-only">Add</span>
          </Button>
          <span>Add more events</span>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Timelining</title>
        <meta name="description" content="Create and share timelines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center gap-12 pt-24">
        <p className="text-6xl font-extrabold text-black md:text-8xl">
          Timelining
        </p>
        <div className="flex flex-col justify-center gap-12">
          <p className="text-center text-2xl text-gray-600">
            Bring your stories to life with easy-to-create timelines
          </p>

          <TimelineExample />
          <div className="flex flex-row justify-center gap-6">
            <Link href="/new">
              <Button className="border border-black hover:border hover:border-black hover:bg-white hover:text-black">
                Create a new timeline
              </Button>
            </Link>
            <a
              href="https://github.com/gileadekelvin/timelining"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="link">
                <span>View github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ml-1 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
