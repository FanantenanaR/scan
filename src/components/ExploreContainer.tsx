import './ExploreContainer.css';
import { IonButton, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
interface ContainerProps {
  name: string;
}



const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <IonButton>
        <IonIcon slot="icon-only" icon={camera}></IonIcon>
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
