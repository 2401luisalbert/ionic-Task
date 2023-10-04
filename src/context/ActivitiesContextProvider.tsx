import React, { useState } from "react";
import {
  Activity,
  ActivityContextModel,
  ActivityType,
} from "../interfaces/interfaces";
import { activitiesData } from "../db/dbActivity";


export const ActivitiesContextCreate = React.createContext<ActivityContextModel>({
  activities: [],
  addActivity: () => {},
  completeActivity: () => {},
  deleteActivity: () => {}
});

const ActivitiesContextProvider = (props: any) => {
  const [activities, setActivities] = useState<Activity[]>(activitiesData);

  const addActivity = (
    title: string,
    description: string,
    hour: string,
    activityType: ActivityType
  ) => {
    let imageUrl = "";
    switch (activityType) {
      case "rest":
        imageUrl= "/src/assets/images/sleep.jpg";
        break;
      case "work":
        imageUrl = "/src/assets/images/work.jpg";
        break;
      case "hobby":
        imageUrl = "/src/assets/images/hobby.jpg";
        break;
    }

    const newActivity: Activity = {
      id: Math.random().toString(),
      title,
      description,
      hour,
      activityType,
      imageUrl,
      isComplete: false,
    };

    setActivities((currentActivities) => {
      return [...currentActivities, newActivity];
    });
  };

  const completeActivity = (activityId: string) => {
    setActivities((currentActivities) => {
      const updateActivities = [...currentActivities];
      const selectActivity = activities.findIndex(
        (act) => act.id === activityId
      );
      const updateActivity = {
        ...updateActivities[selectActivity],
        isComplete: true,
      };
      updateActivities[selectActivity] = updateActivity;
      return updateActivities;
    });
  };

  const deleteActivity = (activityId: string) =>{
    const updatedActivities = activities.filter((activity) => activity.id !== activityId);
    setActivities(updatedActivities);
  }

  const activitiesContext: ActivityContextModel = {
    activities,
    addActivity,
    completeActivity,
    deleteActivity
  };

  return (
    <ActivitiesContextCreate.Provider value={activitiesContext}>
      {props.children}
    </ActivitiesContextCreate.Provider>
  );
};

export default ActivitiesContextProvider;
