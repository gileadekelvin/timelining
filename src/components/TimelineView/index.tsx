import { Button } from "~/components/ui/button";

import { type TimelineViewProps } from "./TimelineView";
import { type TimelineModel } from "../TimelineInput/TimelineInput";
import { api } from "../../utils/api";
import Loading from "~/components/ui/loading";

const TimelineView = (props: TimelineViewProps) => {
  const { timelineId } = props;

  const timeline = api.timeline.getTimeline.useQuery({
    id: timelineId,
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

  return (
    <div className="flex flex-col gap-4">
      {timeline.data?.title && (
        <div>
          <p
            placeholder="Title"
            className="h-auto border-none p-0 text-2xl font-semibold focus:ring-transparent dark:border-none dark:focus:ring-transparent dark:focus:ring-offset-transparent dark:focus-visible:outline-none md:min-w-[600px]"
          >
            {timeline.data?.title}
          </p>
        </div>
      )}
      <div className="flex flex-col pl-4 md:min-w-[600px]">
        <ol className="max-w-xs border-l border-gray-300 md:max-w-3xl">
          {(timeline.data?.events as TimelineModel["events"])?.map(
            (item, index) => (
              <li
                key={`${index}-${item.title}`}
                className="flex flex-row gap-8"
              >
                <div>
                  {item.date && (
                    <div className="flex-start flex items-center pt-3">
                      <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
                      <p
                        placeholder="Date"
                        className="h-auto border-none p-0 text-sm text-gray-500 focus:ring-transparent focus-visible:outline-none dark:border-none dark:focus:ring-transparent dark:focus:ring-offset-transparent dark:focus-visible:outline-none md:min-w-[600px]"
                      >
                        {item.date}
                      </p>
                    </div>
                  )}
                  <div className="mt-0.5 ml-4 mb-6 flex flex-col">
                    <div className="flex flex-col">
                      <p className="mb-0 h-auto resize-none border-none p-0 text-xl font-semibold text-gray-800 focus:ring-transparent focus-visible:outline-none md:min-w-[600px]">
                        {item.title}
                      </p>
                    </div>
                    {item.description && (
                      <p className="text-md mb-3 h-auto resize-none border-none p-0 text-gray-500 focus:ring-transparent focus-visible:outline-none md:min-w-[600px]">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            )
          )}
        </ol>
      </div>
      <Button className="my-8 w-fit" type="submit" disabled>
        Fork
      </Button>
    </div>
  );
};

export default TimelineView;
