// EmptyFieldAlert.tsx
import React from "react";
import { IonAlert } from "@ionic/react";
import { EmptyFieldAlertProps } from "../../interfaces/interfaces";

const AlertComponent: React.FC<EmptyFieldAlertProps> = ({ isOpen, onClose, header, message, buttons }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header={header}
      message={message}
      buttons={[buttons]}
    />
  );
};

export default AlertComponent;
