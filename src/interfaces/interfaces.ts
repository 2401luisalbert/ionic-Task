export interface HeaderComponentProps {
  title: string;
}

export interface NavBarComponentId {
  navId: string;
}

export type ActivityType = "rest" | "work" | "hobby";

export interface Activity {
  id: string;
  title: string;
  description: string;
  hour: string;
  activityType: ActivityType;
  imageUrl: string;
  isComplete: boolean;
}

export interface ActivityContextModel {
  activities: Activity[];
  addActivity: (
    title: string,
    description: string,
    hour: string,
    activityType: ActivityType
  ) => void;
  completeActivity: (activityId: string) => void;
  deleteActivity: (activityId:string) => void;
}

export interface ActivityListComponentProps {
  activity: Activity;
}

export interface ActivityFormProps {
  onSubmit: (activityData: {
    activityType: ActivityType;
    title: string;
    description: string;
    hour: string;
  }) => void;
}

export interface EmptyFieldAlertProps {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  message:string;
  buttons:string
}

export interface CompleteModalProps{
  activity: Activity,
  dismissModal: () => void
}