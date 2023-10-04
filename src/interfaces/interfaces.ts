export interface IHeaderComponentProps {
  title: string;
}

export interface INavBarComponentId {
  navId: string;
}

export type IActivityType = "rest" | "work" | "hobby";

export interface IActivity {
  id: string;
  title: string;
  description: string;
  hour: string;
  activityType: IActivityType;
  imageUrl: string;
  isComplete: boolean;
}

export interface IActivityContextModel {
  activities: IActivity[];
  addActivity: (
    title: string,
    description: string,
    hour: string,
    activityType: IActivityType
  ) => void;
  completeActivity: (activityId: string) => void;
  deleteActivity: (activityId:string) => void;
}

export interface IActivityListComponentProps {
  activity: IActivity;
}

export interface IActivityFormProps {
  onSubmit: (activityData: {
    activityType: IActivityType;
    title: string;
    description: string;
    hour: string;
  }) => void;
}

export interface IEmptyFieldAlertProps {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  message:string;
  buttons:string
}

export interface ICompleteModalProps{
  activity: IActivity,
  dismissModal: () => void
}