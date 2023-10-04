import React from "react";
import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IHeaderComponentProps } from "../../interfaces/interfaces";

const HeaderComponent: React.FC<IHeaderComponentProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderComponent;
