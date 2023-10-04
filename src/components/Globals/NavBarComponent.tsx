import React from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { bodyOutline, newspaperOutline } from "ionicons/icons";
import { INavBarComponentId } from "../../interfaces/interfaces";

const NavBarComponent: React.FC<INavBarComponentId> = ({navId}) => {
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
