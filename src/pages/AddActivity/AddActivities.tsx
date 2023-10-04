import React, { useContext, useState } from "react";
import {
  IonContent,
  IonPage,
  IonToast,
} from "@ionic/react";
import HeaderComponent from "../../components/Globals/HeaderComponent";
import { ActivitiesContextCreate } from "../../context/ActivitiesContextProvider";
import { ActivityType } from "../../interfaces/interfaces";
import ActivityForm from '../../components/AddActivity/ActivityForm';
import { useHistory } from "react-router-dom";

interface AddActivitiesProps {}

const AddActivities: React.FC<AddActivitiesProps> = () => {
  const history = useHistory();
  const activitiesCtxt = useContext(ActivitiesContextCreate);
  const [isOpenToast, setIsOpenToast] = useState<boolean>(false);

  const handleFormSubmit = (activityData: {
    activityType: ActivityType;
    title: string;
    description: string;
    hour: string;
  }) => {
    const { activityType, title, description, hour } = activityData;

    if (activityType && title && description && hour) {
      activitiesCtxt.addActivity(hour, title, description, activityType);
      history.replace("/");
      setIsOpenToast(true);
    }
  };

  return (
    <IonPage>
      <HeaderComponent title="Add Activities" />
      <IonContent>
        <ActivityForm onSubmit={handleFormSubmit} />
      </IonContent>
      <IonToast
        isOpen={isOpenToast}
        message="Se agregó la actividad de manera correcta"
        onDidDismiss={() => setIsOpenToast(false)}
        duration={3000}
      />
    </IonPage>
  );
};

export default AddActivities;
