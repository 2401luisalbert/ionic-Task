import {
  IonContent,
  IonGrid,
  IonPage,
} from "@ionic/react";
import React, { useContext } from "react";
import HeaderComponent from "../../components/Globals/HeaderComponent";
import { ActivitiesContextCreate } from "../../context/ActivitiesContextProvider";
import ActivityListComponent from "../../components/AllActivities/ActivityListComponent";
const AllActivities: React.FC = () => {
  const AllActivitiesCtxt = useContext(ActivitiesContextCreate);

  return (
    <IonPage>
      <HeaderComponent title="All Activities" />
      <IonContent>
        <IonGrid>
          {AllActivitiesCtxt.activities.length === 0 ? (
            <p>No hay actividades disponibles.</p>
          ) : (
            AllActivitiesCtxt.activities.map((activity) => (
              <ActivityListComponent key={activity.id} activity={activity} />
            ))
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
