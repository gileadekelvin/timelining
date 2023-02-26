import Timeline from "./Timeline";
import type { TimelineModel } from "./Timeline/Timeline";

import { api } from "../utils/api";
import { useToast } from "~/hooks/use-toast";
import { ToastAction } from "./ui/toast";

const NewTimeline = () => {
  const { toast } = useToast();

  const createTimeline = api.timeline.createTimeline.useMutation();

  const handleCreate = (timeline: TimelineModel) => {
    createTimeline.mutate(timeline, {
      onSuccess: (data) => {
        toast({
          title: "Your timeline has been created",
          description: "Now you can copy the link and share to the world!",
          action: (
            <ToastAction
              altText="Copy link"
              onClick={() => {
                const origin =
                  typeof window !== "undefined" && window.location.origin
                    ? window.location.origin
                    : "";
                const url = `${origin}/new?forkId=${data.id}`;
                void navigator.clipboard.writeText(url);
                toast({
                  description: "Link copied to clipboard!",
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
    <>
      <Timeline
        defaultValues={{
          title: "",
          events: [{ date: null, title: "", description: null }],
        }}
        handleSave={handleCreate}
        loading={createTimeline.isLoading}
      />
    </>
  );
};

export default NewTimeline;
