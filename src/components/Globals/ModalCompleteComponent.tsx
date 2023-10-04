import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useContext } from "react";
import { CompleteModalProps } from "../../interfaces/interfaces";
import { ActivitiesContextCreate } from "../../context/ActivitiesContextProvider";

const ModalCompleteComponent: React.FC<CompleteModalProps> = (props) => {
  const activityCtxt = useContext(ActivitiesContextCreate);

  const confirmComplete = (activityId: string) => {
    activityCtxt.completeActivity(activityId);
    props.dismissModal();
  };

  if (!props.activity) {
    return null; // Otra acción apropiada si activity no está definido
  }

  return (
    <IonContent>
      <IonGrid className="ion-no-padding">
        <IonRow>
          <IonCol className="ion-no-padding">
            <IonImg src={props.activity.imageUrl} />
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-text-center">
            <IonText>
              <h2>{props.activity.title}</h2>
            </IonText>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-no-padding ion-text-center">
            <IonText color="medium">
              <p>¿Estas seguro de haber concluido la actividad?</p>
            </IonText>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton color="danger" fill="clear" onClick={props.dismissModal}>
              Cancelar
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-center">
            <IonButton color="primary" fill="clear" onClick={() => confirmComplete(props.activity.id)}>
              Completar
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default ModalCompleteComponent;
