import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { bodyOutline, newspaperOutline } from "ionicons/icons";
import { NavBarComponentId } from "../../interfaces/interfaces";

const NavBarComponent: React.FC<NavBarComponentId> = ({navId}) => {
  return (
    <IonMenu contentId={navId}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonMenuToggle>
            <IonItem routerLink="/" routerDirection="none" lines="none">
              <IonIcon  icon={bodyOutline} className="ion-padding"/>
              <IonLabel>All Activities</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/add-activities" routerDirection="none" lines="none">
              <IonIcon  icon={newspaperOutline} className="ion-padding" />
              <IonLabel>Add Activities</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default NavBarComponent;
