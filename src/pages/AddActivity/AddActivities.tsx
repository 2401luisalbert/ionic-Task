import {
  IonContent,
  IonPage,
  IonToast,
} from "@ionic/react";
import React, { useContext, useState } from "react";
import HeaderComponent from "../../components/Globals/HeaderComponent";
import { ActivitiesContextCreate } from "../../context/ActivitiesContextProvider";
import { ActivityType } from "../../interfaces/interfaces";
import ActivityForm from '../../components/AddActivity/ActivityForm'; // Importa el componente de formulario
import { useHistory } from "react-router-dom";


const AddActivities: React.FC = () => {
  const history = useHistory();
  const activitiesCtxt = useContext(ActivitiesContextCreate);
  const [isOpenToast, setIsOpenToast] = useState(false);

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
          message="Se agrego la actividad de manera correcta"
          onDidDismiss={() => setIsOpenToast(false)}
          duration={3000}
        ></IonToast>
      </IonPage>
  );
};

export default AddActivities;
