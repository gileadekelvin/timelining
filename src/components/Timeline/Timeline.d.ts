export type TimelineModel = {
  title: string;
  events: Array<{
    date: string | null;
    title: string;
    description: string | null;
  }>;
};

export type TimelineProps = {
  defaultValues: TimelineModel;
  handleSave: (timeline: TimelineModel) => void;
  loading?: boolean;
};
