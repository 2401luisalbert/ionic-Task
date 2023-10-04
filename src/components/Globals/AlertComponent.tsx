// EmptyFieldAlert.tsx
import React from "react";
import { IonAlert } from "@ionic/react";
import { IEmptyFieldAlertProps } from "../../interfaces/interfaces";

const AlertComponent: React.FC<IEmptyFieldAlertProps> = ({ isOpen, onClose, header, message, buttons }) => {
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
