import React from "react";
import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { HeaderComponentProps } from "../../interfaces/interfaces";

const HeaderComponent: React.FC<HeaderComponentProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons>
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderComponent;
