import Timeline from "./Timeline";
import type { TimelineModel } from "./Timeline/Timeline";

import { api } from "../utils/api";
import ErrorAlert from "./ErrorAlert";

const NewTimeline = () => {
  const createTimeline = api.timeline.createTimeline.useMutation();

  const handleCreate = (timeline: TimelineModel) => {
    createTimeline.mutate(timeline);
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
      {createTimeline.error && <ErrorAlert />}
    </>
  );
};

export default NewTimeline;
