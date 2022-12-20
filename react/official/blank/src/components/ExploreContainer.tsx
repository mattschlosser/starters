import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Explore more of Ionic</strong>
      <p><a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <p><a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/native">Native Functionality</a></p>
      <p><a target="_blank" rel="noopener noreferrer" href="https://ionic.io/enterprise-sdk">Enterprise Auth & Security</a></p>
    </div>
  );
};

export default ExploreContainer;
