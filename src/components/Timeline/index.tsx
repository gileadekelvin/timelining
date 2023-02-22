/* eslint-disable @typescript-eslint/no-misused-promises */
import { Trash2, Plus } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { useFieldArray, useForm } from "react-hook-form";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import { type TimelineModel, type TimelineProps } from "./Timeline";

const Timeline = (props: TimelineProps) => {
  const { defaultValues, handleSave, loading } = props;

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<TimelineModel>({
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "events",
  });

  const onSubmit = handleSubmit((data) => handleSave(data));

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <div>
        <Input
          placeholder="Title"
          className="h-auto md:min-w-[600px] border-none p-0 text-2xl font-semibold focus:ring-transparent"
          {...register("title", {
            required: true,
          })}
        />
        {errors.title?.type === "required" && (
          <p className="text-sm text-red-600">Title is required</p>
        )}
      </div>
      <div className="flex md:min-w-[600px] flex-col pl-4">
        <ol className="max-w-xs border-l border-gray-300 md:max-w-3xl">
          {fields.map((item, index) => (
            <li key={item.id} className="flex flex-row gap-8">
              <div>
                <div className="flex-start flex items-center pt-3">
                  <div className="-ml-1 mr-3 h-2 w-2 rounded-full bg-gray-300"></div>
                  <Input
                    placeholder="Date"
                    className="h-auto md:min-w-[600px] border-none p-0 text-sm text-gray-500 focus:ring-transparent"
                    {...register(`events.${index}.date`)}
                  />
                </div>
                <div className="mt-0.5 ml-4 mb-6 flex flex-col">
                  <div className="flex flex-col">
                    <TextareaAutosize
                      placeholder="Event"
                      className="mb-0 h-auto md:min-w-[600px] resize-none border-none p-0 text-xl font-semibold text-gray-800 focus:ring-transparent focus-visible:outline-none"
                      rows={1}
                      {...register(`events.${index}.title`, {
                        required: true,
                      })}
                    />
                    {errors.events?.[index]?.title?.type === "required" && (
                      <span className="text-xs text-red-600">
                        Event is required
                      </span>
                    )}
                  </div>
                  <TextareaAutosize
                    placeholder="Description"
                    className="text-md mb-3 h-auto md:min-w-[600px] resize-none border-none p-0 text-gray-500 focus:ring-transparent focus-visible:outline-none"
                    rows={1}
                    {...register(`events.${index}.description`)}
                  />
                </div>
              </div>
              <div className="mt-4 flex items-start justify-center">
                <Button
                  variant="outline"
                  className="w-10 rounded-full border-red-200 p-0 hover:bg-red-50"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4 text-red-600" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </li>
          ))}
        </ol>
        <div className="-m-5 mt-2">
          <Button
            variant="outline"
            className="w-10 rounded-full p-0"
            onClick={() => append({ date: null, description: null, title: "" })}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add</span>
          </Button>
        </div>
      </div>
      <Button
        className="my-8 w-fit min-w-[184px]"
        type="submit"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save and Share Link"}
      </Button>
    </form>
  );
};

export default Timeline;
