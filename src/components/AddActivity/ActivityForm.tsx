import React, { useRef, useState } from "react";
import {
  IonButton,
  IonCol,
  IonDatetime,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonAlert,
} from "@ionic/react";
import { ActivityType, ActivityFormProps } from "../../interfaces/interfaces";
import Alert from "../Globals/Alert";

const ActivityForm: React.FC<ActivityFormProps> = ({ onSubmit }) => {
  const [selectedSegment, setSelectedSegment] = useState("work");
  const [showAlert, setShowAlert] = useState(false);

  const segmentInput = useRef<HTMLIonSegmentElement>(null);
  const titleInput = useRef<HTMLIonInputElement>(null);
  const descriptionInput = useRef<HTMLIonInputElement>(null);
  const hourInput = useRef<HTMLIonDatetimeElement>(null);

  const handleAddActivity = () => {
    const activityType = selectedSegment as ActivityType;
    const title = titleInput.current?.value as string;
    const description = descriptionInput.current?.value as string;
    const selectedHour = hourInput.current?.value as string;
    const hour = selectedHour ? selectedHour.split("T")[1].slice(0, 5) : "";

    if (activityType && title && description && hour) {
      onSubmit({
        activityType,
        title,
        description,
        hour,
      });
    } else {
      setShowAlert(true); // Mostrar el alert si falta algún campo
    }
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonSegment
            ref={segmentInput}
            value={selectedSegment}
            onIonChange={(e) => setSelectedSegment(e.detail.value as string)}
          >
            <IonSegmentButton value="work">
              <IonLabel>Work</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="rest">
              <IonLabel>Rest</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="hobby">
              <IonLabel>Hobby</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Nombre de la actividad</IonLabel>
            <IonInput ref={titleInput} type="text" />
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Descripción</IonLabel>
            <IonInput ref={descriptionInput} type="text" />
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="fixed">Hora</IonLabel>
            <IonDatetime
              ref={hourInput}
              presentation="time"
              value={new Date().toISOString()}
            ></IonDatetime>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton
            className="ion-margin-top"
            expand="block"
            fill="outline"
            onClick={handleAddActivity}
          >
            Agregar actividad
          </IonButton>
        </IonCol>
      </IonRow>
      <Alert
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
        header="Campos vacíos"
        message="Por favor, complete todos los campos."
        buttons="OK"
      />
    </IonGrid>
  );
};

export default ActivityForm;
