import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Route, Redirect } from "react-router-dom";
import AllActivities from "./pages/AllActivity/AllActivities";
import AddActivities from "./pages/AddActivity/AddActivities";
import NavBarComponent from "./components/Globals/NavBarComponent";
import ActivitiesContextProvider from "./context/ActivitiesContextProvider";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <NavBarComponent navId="nav-id" />
      <ActivitiesContextProvider>
        <IonRouterOutlet id="nav-id">
          <Route path="/" component={AllActivities} exact />
          <Route path="/add-activities" component={AddActivities} exact />
          <Redirect to="/" />
        </IonRouterOutlet>
      </ActivitiesContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
