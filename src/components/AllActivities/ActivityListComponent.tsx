import React, { useContext, useState } from "react";
import {
  IActivity,
  IActivityListComponentProps,
} from "../../interfaces/interfaces";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
  IonButton,
  IonCardTitle,
  IonCardSubtitle,
  IonItem,
  IonModal,
  IonIcon,
  IonText,
  IonToast,
} from "@ionic/react";
import styles from "./ActivityListComponent.module.css";
import ModalCompleteComponent from "../Globals/ModalCompleteComponent";
import { checkmarkCircle, trashSharp } from "ionicons/icons";
import { ActivitiesContextCreate } from "../../context/ActivitiesContextProvider";

const ActivityListComponent: React.FC<IActivityListComponentProps> = ({
  activity,
}) => {
  console.log("activity", activity)
  const [activityToComplete, setActivityToComplete] = useState<IActivity>();
  const activityCtxt = useContext(ActivitiesContextCreate);

  const handleOpenModal = (activity: IActivity) => {
    setActivityToComplete(activity);
  };

  const handleModalDismiss = () => {
    setActivityToComplete(undefined);
  };

  const handleDeleteActivity = (activityId: string) => {
    activityCtxt.deleteActivity(activityId);
  };

  return (
    <>
      <IonModal
        isOpen={!!activityToComplete}
        onIonModalDidDismiss={handleModalDismiss}
      >
        <ModalCompleteComponent
          activity={activityToComplete as IActivity}
          dismissModal={handleModalDismiss}
        />
      </IonModal>
      <IonCard className="ion-text-center">
        <div className={styles.imageContainer}>
          <IonImg src={activity.imageUrl} alt={activity.title} />
          {activity.isComplete ? (
            <div className={styles.deleteIcon}>
              <IonIcon
                color="danger"
                icon={trashSharp}
                onClick={() => handleDeleteActivity(activity.id)}
              />
            </div>
          ) : null}
        </div>
        <IonCardHeader>
          <IonCardSubtitle>{activity.description}</IonCardSubtitle>
          <IonCardTitle>{activity.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonText>{activity.hour}</IonText>
          <IonItem lines="none" className="fullWidth">
            {!activity.isComplete ? (
              <IonButton
                className={styles.fullWidth}
                fill="clear"
                onClick={() => handleOpenModal(activity)}
              >
                Actividad completada
              </IonButton>
            ) : (
              <IonIcon
                color="success"
                className={styles.fullWidth}
                icon={checkmarkCircle}
              />
            )}
          </IonItem>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default ActivityListComponent;
