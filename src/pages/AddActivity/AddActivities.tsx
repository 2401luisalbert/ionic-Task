import React, { useContext, useState} from "react";
import {
  IonContent,
  IonPage,
  IonToast
} from "@ionic/react";
import HeaderComponent from "../../components/Globals/HeaderComponent";
import { ActivitiesContextCreate } from "../../context/ActivitiesContextProvider";
import { ActivityType } from "../../interfaces/interfaces";
import ActivityForm from '../../components/AddActivity/ActivityForm' // Importa el componente de formulario
import { useHistory } from "react-router-dom";


const AddActivities: React.FC = () => {
  const history = useHistory();
  const activitiesCtxt = useContext(ActivitiesContextCreate);
  const [isOpen, setIsOpen] = useState(false);
   

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
      setIsOpen(true)
    } else {
      alert("Llena todos los campos");
    }
  };

  return (
    <IonPage>
      <HeaderComponent title="Add Activities" />
      <IonContent>
        <ActivityForm onSubmit={handleFormSubmit} />
      </IonContent>
      <IonToast
          isOpen={isOpen}
          message="Se agrego la actividad de manera correcta"
          onDidDismiss={() => setIsOpen(false)}
          duration={3000}
        ></IonToast>
    </IonPage>
  );
};

export default AddActivities;
