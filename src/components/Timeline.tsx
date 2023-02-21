import { Trash2, Plus } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

const Timeline = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Title"
        className="h-auto border-none p-0 text-2xl font-semibold focus:ring-transparent"
      />
      <div className="flex flex-col pl-4">
        <ol className="max-w-xs border-l border-gray-300 md:max-w-3xl">
          <li className="flex flex-row gap-8">
            <div>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
                <Input
                  placeholder="Date"
                  className="h-auto border-none p-0 text-sm text-gray-500 focus:ring-transparent"
                />
              </div>
              <div className="mt-0.5 ml-4 mb-6 flex flex-col">
                <TextareaAutosize
                  placeholder="Event"
                  className="mb-1 h-auto resize-none border-none p-0 text-xl font-semibold text-gray-800 focus:ring-transparent focus-visible:outline-none"
                  rows={1}
                />
                <TextareaAutosize
                  placeholder="Description"
                  className="text-md mb-3 h-auto resize-none border-none p-0 text-gray-500 focus:ring-transparent focus-visible:outline-none"
                  rows={1}
                />
              </div>
            </div>
            <div className="flex items-start justify-center mt-4">
              <Button
                variant="outline"
                className="w-10 rounded-full border-red-200 p-0 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 text-red-600" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </li>
        </ol>
        <div className="-m-5 mt-2">
          <Button variant="outline" className="w-10 rounded-full p-0">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
