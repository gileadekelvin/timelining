import Timeline from "./TimelineInput";
import type { TimelineModel } from "./TimelineInput/TimelineInput";

import { api } from "../utils/api";
import { useToast } from "~/hooks/use-toast";
import { ToastAction } from "./ui/toast";

type NewTimelineProps = {
  defaultValues?: TimelineModel | null;
};

const NewTimeline = (props: NewTimelineProps) => {
  const { toast } = useToast();

  const createTimeline = api.timeline.createTimeline.useMutation();

  const handleCreate = (timeline: TimelineModel) => {
    createTimeline.mutate(timeline, {
      onSuccess: (data) => {
        const origin =
          typeof window !== "undefined" && window.location.origin
            ? window.location.origin
            : "";
        const url = `${origin}/timeline/${data.id}`;
        toast({
          title: "Your timeline has been created",
          description: "Now you can copy the link and share to the world!",
          action: (
            <ToastAction
              altText="Copy link"
              onClick={() => {
                void navigator.clipboard.writeText(url);
                toast({
                  description: "Link copied to clipboard!",
                  action: (
                    <ToastAction
                      altText="Visit link"
                      onClick={() => {
                        typeof window !== "undefined" &&
                          window.open(url, "_blank")?.focus();
                      }}
                    >
                      Visit Link
                    </ToastAction>
                  ),
                });
              }}
            >
              Copy link
            </ToastAction>
          ),
        });
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `There was a problem with your request. ${error.message}`,
        });
      },
    });
  };

  return (
    <Timeline
      defaultValues={
        props.defaultValues ?? {
          title: "",
          events: [{ date: null, title: "", description: null }],
        }
      }
      handleSave={handleCreate}
      loading={createTimeline.isLoading}
    />
  );
};

export default NewTimeline;
