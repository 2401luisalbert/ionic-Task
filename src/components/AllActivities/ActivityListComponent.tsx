import React from "react";
import { ActivityListComponentProps } from "../../interfaces/interfaces";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
  IonButton,
  IonCardTitle,
  IonCardSubtitle,
  IonItem,
  IonLabel,
} from "@ionic/react";
import styles from "./ActivityListComponent.module.css";

const ActivityListComponent: React.FC<ActivityListComponentProps> = ({
  activity,
}) => {
  return (
    <IonCard className="ion-text-center">
      <IonImg src={activity.imageUrl} alt={activity.title} />
      <IonCardHeader class="ion-margin">
        <IonCardSubtitle>{activity.hour}</IonCardSubtitle>
        <IonCardTitle>{activity.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{activity.description}</p>
        <IonItem lines="none" className="">
          <IonButton className={styles.fullWidth} fill="clear">
            Actividad completada
          </IonButton>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default ActivityListComponent;
